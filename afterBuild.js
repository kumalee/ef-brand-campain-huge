var UglifyJS = require("uglify-js");
var path = require('path');
var jsGroups1 = ['flexible.js'];
var fs = require('fs');

jsGroups1 = Array.from(
  jsGroups1,
  (file) => path.resolve(__dirname, 'app/' + file)
);

console.log(jsGroups1);

var result = UglifyJS.minify(jsGroups1);
console.log(result.code);
fs.writeFileSync(path.resolve(__dirname, 'app/flexible.js'), result.code);
fs.writeFileSync(path.resolve(__dirname, 'build/flexible.js'), result.code);
