[<img src="https://github.com/shrenujgandhi/Readme-Images/blob/master/AP.png" width="150">](https://github.com/shrenujgandhi/Redis-Cache-and-Proxy-Server)
[<img src="https://github.com/shrenujgandhi/Readme-Images/blob/master/DO.png" width="90">](https://github.com/shrenujgandhi/Redis-Cache-and-Proxy-Server)
# Redis Cache and Proxy Server

## Screencast
[<img src="https://img.youtube.com/vi/_ttUyPwcs-4/0.jpg" href="Click to Watch" title="Click to Watch" height="200" width="350">](https://www.youtube.com/watch?v=_ttUyPwcs-4)

## References
* [Redis Commands](https://redis.io/commands)

## Running the Code and Output
- start proxy server in one terminal
```
$ nodejs proxy.js
```

- start main file in another terminal
```
$ nodejs main.js
````

- Open Browser and run enter following routes
```
http://localhost:5000/set
http://localhost:5000/get/key/1

http://localhost:5000/recent

$ curl -F "image=@./img/morning.jpg" localhost:5000/upload
http://localhost:5000/meow

http://localhost:5000/listservers
http://localhost:5000/spawn/port/3001
http://localhost:5000/destroy
```

## Main.js output
```
Example app listening at http://0.0.0.0:3000
cleaning cahce for recent
cleaning cache for servers
GET /
GET /
GET /get/key/1
GET /set
GET /get/key/1
GET /get/key/1
GET /get/key/1
GET /get/key/1
GET /set
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /get/key/2
GET /recent
GET /listservers
GET /listservers
GET /recent
GET /meow
null
POST /upload
uploads/1297ff4dc9e525892b747b44b0f6fe4a.jpg
POST /upload
uploads/92761c565a9ab61dbd99c7e5ac730d3f.jpg
GET /meow
uploads/92761c565a9ab61dbd99c7e5ac730d3f.jpg
GET /meow
uploads/1297ff4dc9e525892b747b44b0f6fe4a.jpg
GET /meow
null
POST /upload
uploads/43968a0dbe165cbbe3ad85fa2b3927a0.jpg
POST /upload
uploads/c4eb6c3f04c15823f952df7613f1f212.jpg
POST /upload
uploads/d8ad1e439f07b6f7f1aa6e4bac42c878.jpg
GET /meow
uploads/d8ad1e439f07b6f7f1aa6e4bac42c878.jpg
GET /meow
uploads/c4eb6c3f04c15823f952df7613f1f212.jpg
GET /meow
uploads/43968a0dbe165cbbe3ad85fa2b3927a0.jpg
GET /meow
null
GET /listservers
GET /spawn/port/3001
GET /
GET /favicon.ico
GET /
GET /spawn/port/30012
GET /spawn/port/3001
App already listening
GET /spawn/port/3002
GET /
GET /listservers
GET /destroy
2
Server at port 3002 destroyed
GET /destroy
0
Server at port 3000 destroyed
GET /listservers
GET /destroy
0
Server at port 3001 destroyed
GET /destroy
All servers destroyed except 1
GET /destroy
All servers destroyed except 1
GET /destroy
All servers destroyed except 1
GET /listservers
GET /listservers
GET /spawn/port/3001
GET /spawn/port/3002
GET /spawn/port/3003
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
GET /listservers
```

## Proxy.js output
```
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:3000
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:30012

target is: http://127.0.0.1:30012
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:30012

target is: http://127.0.0.1:3002
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:3003
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:3002
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:3003
target is: http://127.0.0.1:30012
target is: http://127.0.0.1:3002
target is: http://127.0.0.1:3001
target is: http://127.0.0.1:3003
target is: http://127.0.0.1:30012
```

