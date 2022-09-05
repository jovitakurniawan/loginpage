// // 1. Variables
// let first_name = "jovita";
// let last_name = "kurniawan";

// let full_name = first_name + last_name;

// // Placeholder -- use backtick to pass the value of placeholder
// console.log(`Hello there! ${full_name}`);
// console.log("Hello there! ${full_name}");

// // 2. Conditional Statements 

// if (1 < 2){
//     console.log("I love you");
// } else {
//     console.log("Taste that pink venom");
// }

// let names = ["jo", 'du', 'threee'];

// console.log(`First element: ${names[0]}`);

// // 3. Loop 

// for (i = 0; i < 3; i++) {
//     console.log(`${i}th name: ${names[i]}`);
// }

// 4. Function 

function cool_math_function(a, b){
    return (a + b) ** 2;
}

let num1 = 312;
let num2 = 392; 

console.log(cool_math_function(num1, num2));
console.log(cool_math_function(1, 2));


// normal function 
function sum(a, b){
    return a+b;
}
// anonymous function -- function without name 
let anon_sum = function (a, b){
    return a+b;
}

console.log(anon_sum(3,2));

// arrow function 
let summmy = (a, b) => {
    return a + b
};

console.log(summmy(4, 55));

// 5. Dictionary 

let info = {
    first_name: "Jovita", 
    last_name: "Kurniawan"
};

console.log(info.first_name);

// 6. Callback functions 

let var1 = "Juj";
let var2 = (a, b) => {
    return a + b;
};

function my_cool_function(a, b, cb){
    let result = cb(a, b);
    console.log("Result is: " + result
    );
}

my_cool_function(4, 5, (x, y) => {
    return x**2 + y**5;
});

my_cool_function(2, 2, (x, y) => {
    return x**2 + y;
});

// by default javascript is ascynchronous 
// more efficient way of dealing with loading time 

