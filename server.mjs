import http from "http";
import fs from "fs";
const home = fs.readFileSync("home.htm","utf-8");
const about = fs.readFileSync("about.htm","utf-8");
const contact = fs.readFileSync("contact.htm","utf-8");
const services = fs.readFileSync("services.htm","utf-8");
const port = process.env.port;
// const port = 4000;
const localhost = "localhost";
const server = http.createServer((req,res,next)=>{
    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end(about);
    }
    if(req.url === "/contact"){
        return res.end(contact);
    }
    if(req.url === "/services"){
        return res.end(services);
    }
    else{
        res.end("404 page not found");
    }
});

// server.listen(port,localhost,()=>{
//     console.log(`Server is running on (http://${localhost}:${port})`);
// });
server.listen(port,()=>{
    console.log(`Server is working`);
});