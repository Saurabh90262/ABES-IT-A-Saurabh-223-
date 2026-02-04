const http = require('http');


const server = http.createServer((req,res) => {
    console.log("Server 1");
    // res.end('This is the first Server');
    // console.log(req);
    // console.log(res);
});


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running at : http://localhost:${PORT}`);
})