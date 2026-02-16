const http = require('http');
fs = require('fs');
const home = fs.readFileSync('abes.html');


const server = http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type", "text/html");
  res.end(home);
})



server.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
