 // Import the HTTP module
 const http = require('http');

 // Import the 'today' module
 const today = require('./todat');
 
 // Define the request listener function
 const requestListener = function (req, res) {
     res.writeHead(200); // Set the status code to 200 (OK)
     // Send the response with the current date from the 'today' module
     if (today.getDate().includes('AM'))
         res.end(`Hello, World! The date today is ${today.getDate()}`);
     else
         res.end(`Hello, World! The date tonight is ${today.getDate()}`);
     
 };
 
 // Define the port number
 const port = 8081;
 
 // Create an HTTP server using the request listener function
 const server = http.createServer(requestListener);
 
 // Start the server and listen on the specified port
 server.listen(port);
 console.log('Server listening on port: ' + port);
 