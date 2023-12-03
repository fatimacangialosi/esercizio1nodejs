/*Esercitazione2 : *
1. Creare un nuovo progetto node
2. Creare un file HTML nella cartella di progetto con contenuto a piacere
3. Creare uno script nodejs che utilizza il file HTML come response della richiesta http
4. Creare uno script nodejs che crea un file di testo prova.txt nella cartelle di progetto
5. Creare uno script nodejs che aggiunge una riga di testo (a piacere) alla fine del file
”prova.txt”
6. Creare uno script nodejs che sostituisce il contenuto del file ”prova.txt"
7. Creare uno script node js che cancella il file prova.txt
*/
var http = require("http");
var fs = require("fs");
http
	.createServer((req, res) => {
		fs.readFile("SitoWebCavia.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});

		fs.open("prova.txt", "w", function (err, file) {
			if (err) throw err;
			console.log("File è stato creato ed anche aperto!");
		});

		fs.writeFile("prova.txt", "prima frase\n", function (err) {
			if (err) throw err;
			console.log("Replaced!");
		});
		fs.readFile("prova.txt", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.write(data);
			return res.end();
		});

		fs.writeFile("prova.txt", "seconda frase ...\n", function (err) {
			if (err) throw err;
			console.log("Replaced l' ultimo aggiornamento!");
		});
		fs.appendFile("prova.txt", "terza frase \n", function (err) {
			if (err) throw err;
			console.log("Updated finale!");
		});
		fs.writeFile("prova.txt", "quarta frase \n", function (err) {
			if (err) throw err;
			console.log("Replaced l' ultimo aggiornamento!");
		});
		if (request.url === "delete")
			response.writeHead(200, { "Content-Type": "text/html" });
		fs.unlink("prova.txt", function (err) {
			if (err) throw err;
			console.log("File deleted!");
		});
	})
	.listen(3000);
