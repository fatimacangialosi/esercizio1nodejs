/* esercitazione tre scrivere d un esercio in cui a secondo ddell url se mare.html o montagna.html mi indirzza ad un file o a un file montagna.html */
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {
	let adr = request.url;
	let q = url.parse(adr, true);

	console.log("host: " + q.host);
	console.log("pathname: " + q.pathname);

	let myPath = q.pathname.slice(1);

	if (q.pathname !== null && q.pathname !== undefined) {
		// fs.readFile("." + q.pathname, "utf8", (err, data) => {
		fs.readFile(myPath, "utf8", (err, data) => {
			if (err) {
				console.log("ciao fatima; qui c'è stato un errore");
				response.writeHead(404, { "Content-Type": "text/html" });
				response.write("<h1>Non funziona, non trovato</h1>");
				console.error("azzz: " + err);
			}
			if (request.url === "/favicon.ico") {
				// Ignora la richiesta per favicon.ico
				response.writeHead(204, { "Content-Type": "image/x-icon" });
				response.end();
			}

			response.writeHead(200, { "Content-Type": "text/html" });
			// response.write();
			response.end(data);
		});

		// if(q.pathname === "/mare.html") {
		//   response.writeHead(200,{"Content-Type":"text/html"});
		//   fs.readFile("mare.html", function (err, data) {
		//     res.writeHead(200, { "Content-Type": "text/html" });

		//      console.log(q.parse)
		//     return res.end();

		// })
		// if(q.pathname === "/montagna.html") {
		//   response.writeHead(200,{"Content-Type":"text/html"});
		//   fs.readFile("montagna.html", function (err, data) {
		//     res.writeHead(200, { "Content-Type": "text/html" });

		//      console.log(q.parse)
		//     return res.end();

		// })

		// else {
		//   response.writeHead(404, { "Content-Type": "text/html" });
		//   response.write(
		//     " <h1> Ei,c'é qualcosa che non quadra !Non trovato! </h1>"
		//   );
		//   response.end();
		// }
	}
});
server.listen(3000, () => {
	console.log("Il server è in ascolto sulla porta 3000");
});
