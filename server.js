const http = require("http");
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
 if (req.url === "/api/me") {
 res.writeHead(200, { "content-type": "application/json" });
 return res.end(JSON.stringify({ ok: true }));
 }
 res.writeHead(200, { "content-type": "text/plain" });
 res.end("API running");
}).listen(port, "0.0.0.0");
