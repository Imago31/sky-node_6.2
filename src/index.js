const http = require('http');
const fs = require('fs')

const userJson = fs.readFileSync("./src/data/users.json" );


const hostname = '127.0.0.1';
const port = 3003;
const server = http.createServer((req, res) => {

    if(hello != null){
        if(hello != ''){
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end('Hello, ' + hello)
        }
        else{
            res.statusCode = 400
            res.setHeader('Content-Type', 'text/plain')
            res.end('Enter a name')
        }
    }
    else if(users != null){
        if(users != ''){
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end(userJson)
        }
        else{
            res.statusCode = 400
            res.setHeader('Content-Type', 'text/plain')
            res.end('Enter a value for the users')
        }
    }
    else if(users == null && hello == null && url.search != ''){
            res.statusCode = 500
            res.setHeader('Content-Type', 'text/plain')
            res.end()
    }
    else{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello, World!')
    }

});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)
});

const url = new URL('http://127.0.0.3/?hello=Ruben');
const hello = url.searchParams.get("hello");
const users = url.searchParams.get("users");

