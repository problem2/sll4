const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==="/")
        res.write("HOMEPAGE")
        res.end()
})
server.listen(3000)