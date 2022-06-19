

//  Object prototypes 

function Student(firt, last, age, cls) 
{
    this.firtNmame = firt;
    this.lastNmae = last;
    this.age = age;
    this.class = cls;
};

// object ma aa proprty add thai jase 
Student.prototype.Phone_Number = 9904656110;




// badhi value line ma print thase 
Student.prototype.name = function ()
{
 return this.firtNmame + " " + this.lastNmae;
}
var Student1 = new Student ("bhautik", "davariya", 22, 5);
console.log(Student1.name());

// console.log(Student.prototype.name);


var Student1 = new Student ("bhautik", "davariya", 22, 5);
var Student2 = new Student ("nayan", "babariya", 23, 6);
console.log(Student1);
console.log(Student2);
console.log(Student1.Phone_Number);

