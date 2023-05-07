const http = require("http")

const requestListener = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("home page")
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("about page")
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("404 not found")
  }
}

const server = http.createServer(requestListener)

server.listen(3003, () => console.log("server is running at 3000"))