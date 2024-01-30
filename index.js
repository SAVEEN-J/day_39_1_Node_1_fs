//  console.log("world working backend server");
//simp-le web server

//http is a liberay...it s build in only 

// const http= required('http')

//its json
let notes=[
    {
        "id":1,
        "name":"Stora",
        "important":true

    },
    {
        "id":2,
        "name":"Stofgngfra",
        "important":true
    },
    {
        "id":3,
        "name":"Stogfhnfgnra",
        "important":true
    }

]

//create app
var http = require('http');

//create a server object:
http.createServer(function (request, responce) {
    responce.writeHead(200,{'Content-Type':'text/html'})
    responce.writeHead(200,{'Content-Type':'application/json'});
 responce.end(JSON.stringify(notes));

responce.write('<b>Hello World!<b>'); //write a response to the client

    //responce.end(); //end the response
}).listen(8080);
// const app =http.createServer((request,responce)=>{ 
//set responce header
// responce.writeHead(200,{'Content-Type':'text/html'})
// responce.writeHead(200,{'Content-Type':'application/json'});
// responce.end(JSON.stringify(notes));


// responce.end('<h1>hello world</h1>')

// });
//create port to listen data    it listen the resquest
//poer is avalible 0 to 65535
//some or resverde 88 like this 27017
// const PORT =3001;
// app.listen(PORT);
// console.log(`server running on port ${PORT}`);
//run in chrome localhost:3001