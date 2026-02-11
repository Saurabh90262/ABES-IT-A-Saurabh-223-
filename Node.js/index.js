const http = require('http');


const server = http.createServer((req,res) => {
    // console.log("Server 1");
    // res.end('This is the first Server');
    // console.log(req);
    // console.log(res);
    // if(req.url === '/'){
    //     res.end('This is the Home Page');
    // }else if(req.url === '/about'){
    //     res.end('This is About Page');
    // }else{
    //     res.end('404 Page does not Exists....!');
    // }

    if(req.url === '/'){
        res.end(`<html>
        <head>
          <title>Manasthali Education Centre</title>
        </head>
        <body>
          <h1>Welcome to Manasthali</h1>
          <h2>Explore our School</h2>
          <img src = "https://www.yayskool.com/images/school/375170manasthali-school-ballia.jpg" alt = "MEC">
          <ul>
          <li><a href="/">Manasthali</a></li>
          <li><a href="/admission">Admissions</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="/about">About us</a></li>
          </ul>
        </body>
      </html>`);
    }else if(req.url === '/admission'){
        res.end(`<html>
        <head>
          <title>Manasthali Education Centre</title>
        </head>
        <body>
          <h1>Welcome to Admissions</h1>
          <h3>Admissions are Open</h3>
          <ul>
          <li><a href="/">Manasthali</a></li>
          <li><a href="/admission">Admissions</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="/about">About us</a></li>
          </ul>
        </body>
      </html>`);
    }else if(req.url === '/about'){
        res.end('This is About Page');
    }else{
        res.end('404 Page does not Exists....!');
    }
});

const fs = require('fs');
// fs.writeFile("./school.txt","One of the top Schools in Ballia Uttar Pradesh",()=>{});
// const brosture = fs.readFileSync("./school.txt","utf-8");
// console.log(brosture);

// fs.readFile("./school.txt","utf-8",(err,result)=>{
//   if(err){
//     console.log("Error:", err)
//   }else{
//     console.log(result)
//   }
// })
 

// fs.appendFileSync("./school.txt",". This is our School....!")

// fs.appendFile("./school.txt",". This is our School....!",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// })

// fs.copyFile("./school.txt","./a1.txt",(err)=>{
//    if(err){
//     console.log(err);
//    }else{
//     console.log("Copied Successfully....!");
//    }
// });


// fs.unlinkSync("./a1.txt");

// fs.mkdir('./myFolder', (err) => {
//   if (err) {
//     console.error('Error creating directory:', err);
//     return;
//   }
//   console.log('Directory created successfully');
// });

fs.rename("./Hello.txt","File.txt",(err)=>{
  if(err){
    console.log("Something went wrong..!");
    return;
  }
  console.log("Name Updated Successfully....!");
})


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running at : http://localhost:${PORT}`);
})


