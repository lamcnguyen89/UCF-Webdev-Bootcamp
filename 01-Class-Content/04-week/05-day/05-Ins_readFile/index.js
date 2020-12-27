// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.csv", "utf8", function(error, data) {
  // UTF-8 is a method of encoding the output to be human readable

  if (error) {
    return console.log(error);
  }

  console.log(data);

});
