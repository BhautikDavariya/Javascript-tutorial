
// id select kriyu ..................>

let chengId = document.getElementById("firt_id");
// te id ma cheng kariyu
chengId.innerHTML =  "Bhautik";




// class cheng karva mate ..................>

// class select kariyo 
let eml01 = document.getElementsByClassName("class_cheng");
// badha ne vara farti cheng kariya 
for (let i = 0; i < eml01.length; i++) 
{
    eml01[i].innerHTML = "davariya";
}



// teg hame select  ..................>

// id select thayu 
let tag = document.getElementById("div_el");
// tag select thayu
let eml02 = tag.getElementsByTagName("h2");

for (let i = 0; i < eml02.length; i++) 
{
    eml02[i].innerHTML = "hello bhautik";
    
}
// console ma jova mate slect thayu k nahi 
console.log(tag);



// query selector ..................>

// class no frist p slect thayu 
let eml = document.querySelector("p.cheng");
eml.innerHTML = "hello bhautik";
console.log(eml);


// badha class ne selecot karva hoi tyare 
let eml1 = document.querySelectorAll("p.cheng");
console.log(eml1);
for (let i = 0; i < eml1.length; i++) 
{
    eml1[i].innerHTML = "bus";
    
}


// traversing elements ..................>

// child na parents ma cheng karvu hoi tyare 
let eml2 = document.getElementById("cheng_list");
let prt = eml2.parentElement;
prt.innerHTML = "<h1>shop door</h1>"

// parent ne id apiyu hoi and child ma cheng karvu hoi

let eml3 = document.getElementById("cheng_ul");
// let prt1 = eml3.firstElementChild; //pela child ne lag che 
// let prt1 = eml3.lastElementChild; // last ma lagava mate

//let prt1 = eml3.firstElementChild.nextElementSibling.nextElementSibling;  // vache na koi ne lagava mate

let prt1 = eml3.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling; // tena upar no cheng thase 

prt1.innerHTML = "shop door";



// inner html ..................>

// id select thayu 
let eml4 = document.getElementById("select_by_id");
// tene ine variable ma store kariyu 
let content = eml4.innerHTML;
console.log(console);
// pachi tema cheng kariyu
eml4.innerHTML = "<h3>ohoky done</h3>"