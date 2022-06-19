// aek aevu function k je method mujab call thase

// propety taraf call thay te mate getters and setter no use thai che 

// simple method 
let preson = {
  name: "bhautik",
  age: 23,
};
console.log(preson.name.toUpperCase());


// call method 
let preson1 = {
  name: "davariya",
  age: 23,
  call_method: function () {
    return this.name.toUpperCase();
  }
};
console.log(preson1.call_method());


// koi pn property ne get karva mate getter function no use thai che 

// getter

let preson2 = {
  name: "shopdoor",
  age: 23,
  get call_method1() {
    return this.name.toUpperCase();
  }
};
console.log(preson2.call_method1);


// koi pn property ne set karva mate setter function no use thai che 
// like koi property ni jagiya ye biju batavu che to set function no use thai che 


// setter

let preson3 = {
  name: "Hello",
  age: 23,
  set set_method(n) {
    this.name = n.toUpperCase();
  }
};
preson3.set_method = "Hello Bhautik";
console.log(preson3.name);


// user pase thai 
var comment = prompt("Enter Any Comments");
let Comments = {
  name: `${comment}`,
  set com(x) {
    this.name = x.toUpperCase();
  }
};
Comments.com = "Sorry";
document.write(Comments.name);



// let com = {
//     name : `${comment}`,
// }