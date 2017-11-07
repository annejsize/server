// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest1(request1, response1) {

  // Send the below string to the client when the user visits the PORT URL
  response1.end("You are AWESOME, dude. " + request1.url);
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

function handleRequest2(request2, response2) {
  response2.end("Okaaaay, dude. " + request2.url);
}
var server = http.createServer(handleRequest2);
server.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});
