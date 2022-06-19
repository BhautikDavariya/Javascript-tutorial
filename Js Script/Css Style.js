let StyleInline = document.getElementById("btm");


// firt method 
// jo html inline style and js style ne work karvi hoi tyare += aapva nu
StyleInline.style.cssText += "color: red; background-color:black";

// second method 
// aama html ma inline aapel hase to ae nahi lage 
// StyleInline.setAttribute("style", "background-color: blue; color: blue");

// third Method 
// StyleInline.style.color = "yellow";
// StyleInline.style.background = "red";


// badhi j css jova mate 
let css = getComputedStyle(StyleInline);
// .color aetle khali colr ni style batav che 
console.log(css.color);


// css class ...............>

let CssClass = document.getElementById("c_class");

// badha class jova mate but badha arrya ma batav che 
console.log(CssClass.classList);
// khali value jovi hoi to loop find karva nu 
for (let cssLi of CssClass.classList) {

    console.log(cssLi);
}

// new class add karva mate 
CssClass.classList.add("dim");

// remove karva mate 
CssClass.classList.remove("dim");

// replace karva mate 
CssClass.classList.replace("class3", "ChengClass");

// class lagelo che k nahi te chack krva mate 
let result = CssClass.classList.contains("class3");
console.log(result);


// toggle ................>

let SelectToggle = document.getElementById("Togg");

// jo togg_class1 hase to nikali jase and nai hoi to aavi jase 
SelectToggle.classList.toggle("togg_class1");
// SelectToggle.className.toggle("");

// offset and client

let widht = SelectToggle.offsetWidth;
let height = SelectToggle.offsetHeight;
console.log(widht);
console.log(height);

let widht1 = SelectToggle.clientWidth;
let height1 = SelectToggle.clientHeight;
console.log(widht1);
console.log(height1);


// text toggle.............>

function clicknow() {

}