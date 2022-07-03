const http = require("http");
let arg = process.argv[2];

http.get(arg, function(response){
	response.setEncoding("utf-8");
	response.on("data", console.log);
	response.on("error", console.error);
});