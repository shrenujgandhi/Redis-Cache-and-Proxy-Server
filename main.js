var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var app = express()

// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})

client.on("error", function(err) {
    console.log("Error " + err);
});

// clearing cache
client.ltrim('visited', -1, 0, function(err, res) {
    console.log("cleaning cahce for recent");
});
client.ltrim('servers', -1, 0, function(err, res) {
    console.log("cleaning cache for servers");
});

var key_count = 0;
var imageData;
var server_dict = {};
///////////// WEB ROUTES

// Add hook to make it easier to get all visited URLS.
app.use(function(req, res, next) 
{
    console.log(req.method, req.url);
    client.lpush('visited', req.url);
    client.ltrim('visited', 0, 4);  	
    next(); // Passing the request to the next handler in the stack.
});

// GET and SET routes
app.get('/get/key/:key', function(req, res) {
    key = req.params.key;
    client.get(key, function (err, value) {
        if (value) {
            res.send(value) 
        } else {
            res.send("the message expired")
        }
    });
})

app.get('/set', function(req, res) {
    key_count += 1;
    client.set(key_count, "this message will self-destruct in 10 seconds");
    client.expire(key_count, 10);
    res.send('self-destruct message set to key ' + key_count);
})

// RECENT VISITED SITES
app.get('/recent', function(req, res) {
    var data = [];
    client.lrange('visited', 0, 4, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            result.forEach(function (site, i) {
                data.push(site);
            });
        }
        res.send(data);
    });
})

// UPLOAD AND MEOW ROUTES
app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
    if( req.files.image ) {
        console.log(req.files.image.path);
        client.lpush('img', req.files.image.path);
    }
    res.status(204).end()

}]);

app.get('/meow', function(req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    client.lpop('img', function(err, path) {
        console.log(path);
        if (err || path == null) {
            res.write('the image queue is empty');
            res.end();
        } else {
            fs.readFile(path, function(err, data) {
                if (err) { 
                    res.write('error reading the image');
                    res.end();
                } else {
                    imageData = new Buffer(data).toString('base64');
                    res.write("<h1>\n<img src='data:my_pic.jpg;base64,"+imageData+"'/>");
                    res.end();
                }
            });
        }
   });
})

// SPAWN
app.get('/spawn/port/:port', function(req, res) {
    if (!server_dict[req.params.port]) {
        client.lpush('servers', req.params.port, function(err, value) {
            if (err || value == 0) {
                console.log("App already listening");
                res.send("App aleady listening");
            } else {
                var server = app.listen (req.params.port, function (err, success) {
                    if (err) {
                        console.log("address already in use");
                        res.send("address already in use");
                    } else {
                        var host = server.address().address
                        var port = server.address().port
                        res.send("App listening at http://" + host + ":" + port)
                        server_dict[port]=server;
                    }
                });
            } 
        });
    } else {
        console.log("App already listening");
        res.send("App already listening");
    }
})

// DESTROY
app.get('/destroy', function(req, res) {
    if (Object.keys(server_dict).length != 1) {
        var rand = parseInt(Math.random() * (Object.keys(server_dict).length - 1));
        console.log (rand);
        client.lindex('servers', rand, function (err, port) {
            var p = parseInt(port);
            client.lrem('servers', 1, p, function (err, res2) { 
                server_dict[port].close();
                delete server_dict[p];
                console.log ("Server at port %d destroyed", p);
                res.send("Server at port " + p + " destroyed"); 
            });
        });
    } else {
       console.log("All servers destroyed except 1");
       res.send("All servers destroyed except 1");
    }
})

// LISTSERVERS
app.get('/listservers/', function(req, res) {
    for (var key in server_dict) {
        res.write("http://" + server_dict[key].address().address + ":" + key + "\n")
    }
    res.end()
})

// DEFAULT ROUTE
app.get('/', function(req, res) {
    res.send('Hello World')
})

// HTTP SERVER
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
    server_dict[3000] = server;
    client.lpush('servers', 3000, function(err, res) {
    });
})

