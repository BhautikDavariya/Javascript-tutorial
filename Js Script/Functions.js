// simpale function 

function table() {
    for (let  i = 1;  i <= 10; i++) 
    {
        document.write(`2 * ${i} = ${2*i}`);
        document.write("<br>")
    }
}
table();

document.write("<br>")

// user pase karva mate 
// user = prompt("Enter number");
// function multiple1(num1) //perameters 
// {   
//     for (let  i = 1;  i <= 10; i++) 
//     {
//         console.log(`${num1} * ${i} = ${num1*i}`);
//         // document.write("<br>")
//     }
// }
// multiple1(user); //arguments

// document.write("<br>")

// perameters and arguments 

function multiple(num) //perameters 
{
    for (let  i = 1;  i <= 10; i++) 
    {
        document.write(`${num} * ${i} = ${num*i}`);
        document.write("<br>")
    }
}
multiple(5); //arguments

document.write("<br>")

// multiple perameters

function sum(num1, num2) {
    document.write(num1 + num2);
}
sum(5,6);

// arguments is object 

// array ni lenth jova mate 
document.write("<br>")

function add() 
{
    document.write(arguments.length);
}
add(5,4,3,2,1,0);


document.write("<br>")
document.write("<br>")

// koi vache ni index jiva mate 

function add1() 
{
    document.write(arguments[2]);
}
add1(5,4,3,2,1,0);

// arrya vare vare print karvo hoi tyare
document.write("<br>")
document.write("<br>")


// let user = prompt("enter any numbers")
// function add2() 
// {
//     for (let i = 0; i < user.length; i++) 
//     {
//         document.write(`${user[i]}`);
//         document.write("<br>")
        
//     }
// }
// add2(user);


// function return

document.write("<br>");

function add4(b,c) 
{
    let a = b * c;
    return a;
}
let h = add4(10,5);
document.write(h);

// return with condisions

document.write("<br>");

function compers(a,b) 
{
    if (a>b) 
    {
        return 1;
    }
    else if (b > a) 
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
let ans = compers(6,8);
document.write(ans);


// locale and globle 

let dog="alex";
function all() {
    let  result = 35;
    // console.log(dog);
    console.log(result);
}
function sub() {
    let result = 50;
    console.log(result);
}
all();
sub();
// console.log(dog);


document.write("<br>");

// anonymous function 

let show =  function () 
{
    console.log("hello bhautik");
}
show();


// set timeout function 

setTimeout (function () 
{
    console.log("hello ankit");
},3000);

// immediately invoked function 

(function () 
{
    console.log("hello kevin");
})();