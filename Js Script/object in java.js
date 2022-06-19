// object in java

let bhautik = { 'first Nmae': "Bhautik", last_Name: "Davariya", age: 22, height: 5.6 }; // object and property

console.log(bhautik.last_Name); // lastName vadi propery and aeni velue print thase
//  console.log(bhautik.first Nmae); // aam ni chale
console.log(bhautik['first Nmae']); // aam chal che
console.log(bhautik.color); // undefined aav che
bhautik.age = 23; // cheng katva mate
bhautik.phoneNu = 9904656110; // add karva
delete bhautik.phoneNu; // delete karva
console.log("height" in bhautik); // jo object ni property hase hase to true av che netar false aav che 
console.log(bhautik);



// Jo khali proprty and value print karvi hoi tyre for loop thi karay 

let person = { firstNmae: "Bhautik", lastName: "Davariya", age: "22", height: "5.6" };

for (let Key in person) //key ae aek keyword che jema badha object ni property batav che
{
    //  console.log(Key); // khali propery batav che
    console.log(Key + " : " + person[Key]); // propery sathe velue batav che

}


// method 1

let person1 = {
    firstNmae: "Bhautik",
    lastName: "Davariya",
    age: 22,
    height: 5.6
};

// object nu Name  [say ae action(method) che mens aenu name] aane aa aek action bNI
person1.say = function () {
    console.log("Hello Bhautik");
}
person1.say();

// method 2

let person2 = {
    firstNmae: "Bhautik",
    lastName: "Davariya",
    age: 22,
    height: 5.6
};

function greet() {
    console.log("Hello Bhautik davariya");
}
person2.hello = greet;
person2.hello();

// method 3

let person3 = {
    firstNmae: "Bhautik",
    lastName: "Davariya",
    age: 22,
    height: 5.6,

    sayHello: function () {
        console.log("hello");
        
    }

};
person3.sayHello();
// method 4

let person4 = {
    firstNmae: "Bhautik",
    lastName: "Davariya",
    age: 22,
    height: 5.6,

    sayHello1() {
        console.log("hello davariya");
    }

};
person4.sayHello1();

// this keyword 

let person5 = {
    firstNmae: "Bhautik",
    lastName: "Davariya",
    age: 22,
    height: 5.6,

    sayHello2() {
        console.log("hello i am" + " " + this.firstNmae + " " + "my car is" + " " + person6.car + " " + "and car color is" + " " + person6.color);
    }

};
let person6 = {
    color: "red",
    car: "BMW",
};
person5.sayHello2();


