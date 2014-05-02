var http 		= require('http')				//HTTP
var	url	 		= require('url')
var path 		= require('path')
var fs 			= require('fs')					//FILESYSTEM				
var util 		= require('util')

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"};

var webserver = http.createServer(function (req, res) {
	var uri = url.parse(req.url).pathname;
	var filename = path.join(process.cwd()+"/static", uri);
	console.log(uri)
	if (uri == "/") {
			var page = process.cwd()+"/static/index.htm"
			var mimeType = mimeTypes[path.extname(page).split(".")[1]]
			res.writeHead(200, {'Content-Type': mimeType})
			var fileStream = fs.createReadStream(page);
			fileStream.pipe(res);
			return;
	}
	

	//####################   STATIC FILES ################
	fs.exists(filename, function(exists) {
		if (!exists) {
			//console.log("404:"+filename);		
			res.writeHead(404, {'Content-Type': 'text/html'});
		  	res.write('error 404');
		  	res.end();
		  	return;
		} 

		var stats = fs.statSync(filename);
		//console.log("STATS: "+stats.isDirectory());

		if (stats.isDirectory()) {
			res.writeHead(200, {'Content-Type':'text/html'})
			res.write('Are you lost?')
			res.end();
		} else {
			var mimeType = mimeTypes[path.extname(filename).split(".")[1]]
			res.writeHead(200, {'Content-Type': mimeType})
			var fileStream = fs.createReadStream(filename);
			fileStream.pipe(res);	
		}		
	});	//end static server
	
})

console.log("starting up local webserver.")
console.log("open your browser on http://127.0.0.1:8000")
webserver.listen(8000, "127.0.0.1");



