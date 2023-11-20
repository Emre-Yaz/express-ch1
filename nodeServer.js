const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("A request has been made to: " + req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const homePageHTML = fs.readFileSync("node.html");
    res.write(homePageHTML);
    res.end();
  } else if (req.url === "/node.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    const image = fs.readFileSync("node.png");
    res.write(image);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    const css = fs.readFileSync("styles.css");
    res.write(css);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h4>404 Page not found!</h4>");
    res.end();
  }
});

server.listen(5027);
