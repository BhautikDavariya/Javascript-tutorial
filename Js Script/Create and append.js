let select = document.getElementById("Create");
console.log(select);
let Create = document.createElement("li");
console.log(Create);
// let add = document.createTextNode("mY nAME IS Bhautik");

// biji rit 

Create.textContent = "my name is bhautik";
// kya mukvu che te
select.appendChild(Create); //last ma lagava mate



// insert before ........................>

// koi element ni pehla insert karvu tyare 

let select1 = document.getElementById("before");
console.log(select1);
let Create1 = document.createElement("li");
console.log(Create1);
Create1.textContent = "Bhautik" // conten creat kariyu

let pos = select1.firstElementChild; // pela add karva mate
let pop1 = select1.firstElementChild.nextElementSibling; // vache add karva mate

select1.insertBefore(Create1 , pos); // insertBefore keyword
select1.insertBefore(Create1 , pop1);

let par1 = document.body;
let Create003 = document.createElement("h1");
Create003.textContent = "hello ji hello";
let element001 = document.getElementById("before"); 
par1.insertBefore(Create003 , element001);


// remove Child El ........................>

// id select kariyu 
let select2 = document.getElementById("remove");
console.log(select2); 
// li ne select kariyu
let eml = select2.firstElementChild.nextElementSibling.nextElementSibling;
console.log(eml); 
// removekariyu 
select2.removeChild(eml);


// clone El ..........................>

let select3 = document.getElementById("clone");
console.log(select3); 
// copy kriyu 
let cloneEml = select3.cloneNode(true);
// jo true aapsho to aakhu copy thase netar khali Element j copy thase 
// document.body.appendChild(cloneEml);

let copy = select3.firstElementChild.nextElementSibling.nextElementSibling;
copy.appendChild(cloneEml); //VACHE SELECT KARVA


// REPLACE element ........................>

// id selectbkariyu
var select5 = document.getElementById("REPLACE");

// content banaviyu 
let redyLi = document.createElement("li");
redyLi.textContent = "BhautikD";

// pogition select kari 
let pogition = select5.firstElementChild.nextElementSibling;

// replace kariyu 
                    // kyo Element  // kya mukvo che
select5.replaceChild(redyLi , pogition);

// insert before

let par = document.body;
let Create02 = document.createElement("h1");
Create02.textContent = "hello ji";
console.log(Create02);
let element1 = document.getElementById("h4tag"); 
par.insertBefore(Create02 , element1);


// insert Abjacent Html....................>

// id select kariyu 
let insert = document.getElementById("insert");
// content banaviyu 
let redyH1 = "<h1>BDavariya</h1>"


insert.insertAdjacentHTML('beforebegin' , redyH1);
insert.insertAdjacentHTML('afterbegin' , redyH1);
insert.insertAdjacentHTML('beforeend' , redyH1);
insert.insertAdjacentHTML('afterend' , redyH1);



// my pretice 

let selectIds = document.getElementById("Listed");

let creatE = document.createElement("h2");
creatE.textContent = "Hello Antik";

let pogition01 = selectIds.firstElementChild.nextElementSibling;

selectIds.insertBefore(creatE , pogition01);