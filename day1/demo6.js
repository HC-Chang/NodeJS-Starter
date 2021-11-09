// http

// npm install request --save

var http = require('http')
function processRecord(request, response){
    var body = "Node js Tutorial\n"
    var contentLength = body.length
    response.writeHead(200, {
        "Content_Length": contentLength,
        "Content_Type": "text/plain"
    })
    response.end(body)
}

var server = http.createServer(processRecord)
console.log("server createted, start listening port 8756")
server.listen(8756)