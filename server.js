var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var fs = require('fs');

  function onRequest(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  fs.readFile('./AppNode.html', null, function(error, data){
    if(error){
      response.writeHead(404);
      response.write('File not found!')
    }else{
      response.write(data);
    }
    response.end();
  });

}

http.createServer(onRequest).listen(port);
