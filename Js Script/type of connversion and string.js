// type conversion of javas. 

// let type = 3;
// console.log(typeof type);
// let type1 = "3";
// console.log(typeof type1);
// let type2 = "hello";
// console.log(typeof type2);
// let type3 = true;
// console.log(typeof type3);


// autopmatic coverion 

// let type = 5 + null;
// console.log(type);
// console.log(typeof type);

// let type1 = "5" + null;
// console.log(type1);
// console.log(typeof type1);

// let type2 = "5\a" + null;
// console.log(type2);
// console.log(typeof type2);


// aaphe cheng karvo hoi to

// let type = 4;
// console.log(typeof type);
// let nettype = String(type);
// console.log(typeof nettype);

// console.log("\n");
// let type1 = "4";
// console.log(typeof type1);
// let nettype1 = Number(type1);
// console.log(typeof nettype1);

// console.log("\n");
// let type2 = 1;
// console.log(typeof type2);
// let nettype2 = Boolean(type1);
// console.log(typeof nettype2);

// string manipulation type casting
// 2 word ne join karvu hoi tyare aa vapray che 

    // let str = "bhautik";
    // let get = `davariya ${str}`;
    // console.log(get);


    // string ma ketla chareter che te jova mate 

let str = "bahtuik davariya";
console.log(str.length);

let str1 = "bahtuik davariya";
console.log(str1[6]);

let name1 = "davariya";
let name2 = "bhautik";
console.log(name1+" "+name2);

// string comperet

let names = "bhautik";

if ("davariya" == names) 
{
 console.log("same name");   
}
else
{
    console.log("not same name");
}

// concat function ne string sathe join karva mate 

let names1 = "davariya";
let names2 = "bhautik";

let names3 = name1.concat(name2);
console.log(names3);

// String mathi koi pn bhag ne batava mate 

let names4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

let subname4 = names4.substr(6, 12); // index 6 thi 12 index laginu print thase
console.log(subname4);

// sub String ni position ne locale janva mate 

let names5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let position = names5.indexOf("dolor");
console.log(position);

let names6 = "Lorem ipsum dolor sit amet consectetur dolor adipisicing elit.";
let position1 = names6.indexOf("dolor", 20);
console.log(position1);

// last thi jova mate 

let names7 = "Lorem ipsum dolor sit amet consectetur dolor adipisicing elit.";
let position2 = names7.lastIndexOf('dolor');
console.log(position2);

// String ma aagal and pachal space mate 

let nameof = "bhautik davariya";
let namespace = nameof.trim( ); 
let namespace1 = nameof.trimStart( ); //aagal mate
let namespace2 = nameof.trimEnd( ); // pachal mate 
console.log(namespace);

// koi pn String ne replace karva mate

let nameby = 'bhautik';
let namecheng = nameby.replace('bhautik' , 'davariya');
console.log(namecheng);