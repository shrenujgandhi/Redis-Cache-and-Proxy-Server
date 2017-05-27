var redis = require('redis')
var http = require('http');
var httpProxy = require('http-proxy');


var proxy = httpProxy.createProxyServer();
var client = redis.createClient(6379, '127.0.0.1', {})

//
// Create your server that makes an operation that waits a while
// and then proxies the request
//
http.createServer(function (req, res) {
    client.rpoplpush('servers','servers', function(err, reply) 
    {
        client.lindex('servers', 0, function(err, portnumber) 
        {
            target = 'http://127.0.0.1:' + portnumber;
            console.log('target is: %s', target);
            proxy.web(req, res, 
            {
                target: target
            });
        });
    })
}).listen(5000);
