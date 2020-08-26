const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2,4);

let data = request(input[0], (error, response, body) => {
  console.log('error:', error); 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  });
fs.writeFile(input[1], data,(err) =>{
  if (err) throw err;
  console.log(`Downloaded and saved 3261 bytes to ${input[1]}`);} 
  );


//> node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html