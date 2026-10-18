import http from 'http'

// server
const server=http.createServer((req,res)=>{
    console.log("server established succesfully")
    const date=new Date();
    console.log("last tim  access date",date)
    res.end("thank you for request")
})
const port=1000
server.listen(port,()=>console.log(`server is running ${port}`))