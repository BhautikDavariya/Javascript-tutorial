
// desktop computer ni date batava mate 

console.log(new Date());

// biji date sdet karvi hoi to 

// console.log(new Date(year, mothe, day, hr, min, sec, ms));
console.log(new Date(2020, 11, 13, 10, 33, 30,6));
console.log(new Date(2020, 11, 13, 10));

// jo parsrnter dur karvi hoi to kari sakay che sec and ms ni jarur nathi to 
console.log(new Date("october 13, 2018 11:12:33"));


// 1,jan,1970 thi lai aaj ni date sudhi no time milisecond ma jovo hoi to 
// aaj no time sudhi jova mate getTime function no ues thay che 
var x = new Date("october 13, 2018 11:12:33");
console.log(x.getTime());
console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getDate());
console.log(x.getDay());


// jo date ma cheng karvo hoi ti .set vapray che 
// 50 day pachi ni date batavi
var x = new Date("october 13, 2018 11:12:33");
console.log(x);
x.setDate(x.getDate()+50);
console.log(x);

// atyar ni ane 50 date pachi ni banne date compare karva sathe jova mate 

var x1 = new Date("october 13, 2018 11:12:33");
var y1 = new Date("october 13, 2018 11:12:33");
y1.setDate(x1.getDate()+50);
console.log(x1);
console.log(y1);


// opction 2 (2 date comare katva) with condision 

let x2 = new Date("october 13, 2025 11:12:33");
let y2 = new Date();

if (y2 > x2)
{
 console.log("x2 is past year");   
}
else if (x2 > y2) 
{
    console.log("y2 is futare year");
}
else
{
    console.log("same year");
}

