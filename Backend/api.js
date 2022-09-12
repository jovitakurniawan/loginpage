// Require modules 
const express = require("express");

// let app = express();

let router = express.Router();

//.Router takes two parameter 
// router.api_verb("API path", (request, response) => {   });

// create the router 
router.get("/", (req, res) => {
    res.send({firstname: "Jovita", lastname: "Kurniawan"});
    // console.log("Hello, We received your request!");
});

// create sum API that returns sum of 2 inputs 
router.get("/sum", (req, res) => {
    //convert input to number by using parsingfloat function 
    //default input received by JSON is string
    let n1 = parseFloat(req.query.number1);
    let n2 = parseFloat(req.query.number2);
    let sum = n1 + n2; 
    res.send(`Sum: ${sum}`);
});

router.post("/product", (req, res) => {
    let n1 = parseFloat(req.body.number1);
    let n2 = parseFloat(req.body.number2);
    let product = n1 * n2; 
    res.send(`Product: ${product}`);
});

module.exports = {router};
