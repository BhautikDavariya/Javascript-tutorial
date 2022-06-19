let SelectButton = document.getElementById("btm");

// new attribute add karva mate
// prla name aapva nu pchi aeni value appva ni
SelectButton.setAttribute("name" , "ClickNow"); 

// attribute ni value jovi hoi to 

let see_value = SelectButton.getAttribute("class");
console.log(see_value);

// Attribute remove karva mate 

let deletAttribute = SelectButton.removeAttribute("name");


// Attribute che k nahi te jova mate 
// jo hase to true aavche nahitor false aav che 
let chackAttribute = SelectButton.hasAttribute("class");
console.log(chackAttribute);