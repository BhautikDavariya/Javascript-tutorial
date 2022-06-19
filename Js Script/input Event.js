let x = document.getElementById("input1");
let Y = document.getElementById("input2");
x.addEventListener('focus' , myFocus);
x.addEventListener('blur' , myblur);

function myFocus() 
{
    x.style.background = "red";
}

function myblur() 
{
    x.style.background = "blue";
}


// jyare value detect karvi hoi tyare 'change' use karva nu 

// jyare enter karo tyare value print kravibhoi tyare 
// x.addEventListener('change' , function ()
// {
//     console.log(this.value);
//     Y.value = x.value;    
// });


// jyare sathe sathe value print karavi hoi tyare 



x.addEventListener('input' , function ()
{
    
    // let x1 = (x * 9/5) + 32;
    // let x = fahr;
    console.log(this.value);
    Y.value = x.value;    
});


// Event Bubbling & Event Copturing.............>


// buttun upar click karsho to body tena div and tena button ne effect lag che 
// let x1 = document.getElementById("myDiv");
// let x2 = document.getElementById("btn");

// x1.addEventListener('click' , btnClick , true);
// x2.addEventListener('click' , DivClick , true);
// document.body.addEventListener('click' , bodyClick , true);

// function btnClick() 
// {
//     console.log("buttton Click.........");
// }
// function DivClick() 
// {
//     console.log("Div Click.........");
// }
// function bodyClick() 
// {
//     console.log("Body Click.........");
// }


// jyare button upar click kare tyare khali button pr effect lagavi hoi tyare 
let x1 = document.getElementById("myDiv");
let x2 = document.getElementById("btn");

x1.addEventListener('click' , DivClick );
x2.addEventListener('click' , btnClick );
document.body.addEventListener('click' , bodyClick);

function btnClick(event1) 
{
    console.log("buttton Click.........");
    event1.stopPropagation();
}
function DivClick(event1) 
{
    console.log("Div Click.........");
    event1.stopPropagation();

}
function bodyClick(event1) 
{
    console.log("Body Click.........");
    event1.stopPropagation();

}