//routing 
import http from 'http'
const server=http.createServer((req,res)=>{
    console.log("server created")
    if (req.url==="/superman"){
    res.end("you are dc fan")}
    else if(req.url==="/ironman"){
        req.end("you are marvel fan")
    }
})
const port=100
server.listen(port,()=>{console.log("server is running")})


