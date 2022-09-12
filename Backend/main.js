// Require modules 
const express = require("express");
// const { router } = require("./api");
const api = require("./api");


let app = express();
// parse the JSON body received through post request
app.use(express.json());

// use the router to enable the URI mapper 
app.use(api.router);

app.listen(3000, (error)=>{
    if (error) {
        console.log(error);
        // exitcode: 0 
        // signal to other dependent code that the program experienced an error
        process.exit(0);
    } else {
        console.log("Server started at port: 3000");
    }
}); 


