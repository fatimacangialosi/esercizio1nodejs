/* Esercizio di fatima cangialosi
il forum sulle "Cavie" o "Porcellini D\'India"
1. Definire un server Node.js sulla porta 3000
2. Gestire due rotte ‘/’ e ‘/users’
• Scrivere del testo a vostro piacimento sulla pagina ‘/’
• Scrivere una lista di utenti a caso sulla pagina ‘/users’
3. Creare un form con un campo <input> nome utente e un bottone di submit che al click invia una
richiesta POST all’indirizzo ‘/create-user’
4. Aggiungere una rotta ‘/create-user’ e fare il parse dei dati in arrivo e scriverli sulla console.
'
*/
const http = require("http");
const server = http
	.createServer((request, response) => {
		if (request.url === "/") {
			response.writeHead(200, { "Content-Type": "text/html" });
			response.write(
				'<html> <body>  <br> <h1>Benvenuti nel forum  "AMICA CAVIA ": '
			);
			response.write("<br>");
			response.write(
				'il forum sulle "Cavie" o "Porcellini D\'India" </h1> </body> </html>'
			);

			response.write(
				"<p> COMPILA QUESTO FORM PER REGISTRARTI NEL BLOG E POTER COMMENTZARE E INTERAGGIRE CON GLI UTENTI <p>"
			);
			response.write(
				'<html> <body><form action="/create-user" method="post"><label for="username">Nome Utente:</label><form> <input  type="text"  id="utentename" name="nomeutente" ></input>'
			);
			response.write('<input type="submit" value="Submit"></input></form>');

			response.end();
		} else if (request.url === "/users") {
			response.writeHead(200, { "Content-Type": "text/html" });

			response.write("<html> <body> <h1> UTENTI DEL BLOG: </h1> <br> ");
			response.write("<ul> <li>franci_fra3 </li> <li>paolo</h2> ");
			response.write(
				"<li> fatima93 </li> <li> chiakka </li>  Autore  &copy; FatimaCangialosi  </h2> </ul>"
			);
			response.end();
		} else if (request.url === "/create-user" && request.method == "POST") {
			/*response.write(
				"<p> COMPILA QUESTO FORM PER REGISTRARTI NEL BLOG E POTER COMMENTZARE E INTERAGGIRE CON GLI UTENTI <p>"
			);
			response.write(
				'<html> <body><form action="/create-user" method="post"><label for="username">Nome Utente:</label><form> <input  type="text"  id="utentename" name="nomeutente" ></input>'
			);
			response.write('<input type="submit" value="Submit"></input></form>');*/
			let body = [];
			request
				.on("data", (chunk) => {
					body.push(chunk);
				})
				.on("end", () => {
					body = Buffer.concat(body).toString();
					console.log(body);
					response.end(body);
				});

			//response.end();
		} else {
			response.writeHead(404, { "Content-Type": "text/html" });
			response.write(
				" <h1> Ei,c'é qualcosa che non quadra !Non trovato! </h1>"
			);
			response.end();
		}
	})
	.listen(3000); //permette di definirlo sulla porta 3000//
