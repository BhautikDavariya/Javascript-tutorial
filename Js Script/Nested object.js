// object ni andar object 

let user_info =
{
    id: 100,
    gmail: "bhautik@gmail.com",
    pro_info:
    {
        name: "bhautik",
        surname: "davariya",
        address:
        {
            city: "surat",
            contry: "india",
        }
    }
};
// console.log(user_info);
// console.log(user_info.pro_info);
// console.log(user_info.pro_info.address);

// for (let key in user_info) 
// {
//     console.log(key + " : " + user_info[key]);

//     for (let key in user_info.pro_info) 
//     {-+
//         console.log(key + " : " + user_info.pro_info[key]);

//             for (let key in user_info.pro_info.address) 
//         {
//             console.log(key + " : " + user_info.pro_info.address[key]);
//         }
//     }
// }



function value(obj) 
{
    for (var key in obj) 
    {
        if (typeof obj[key] === "object")
        {
            value(Object[key]);

        }
        else
        {
            console.log(key + " : " + obj[key]);
        }
    }
}
value(user);



console.log(`\n`);

// for (let key in user_info) {
//     console.log(key + " : " + user_info[key]);
// }
// for (let key in user_info.pro_info) {
//     console.log(key + " : " + user_info.pro_info[key]);
// }
// for (let key in user_info.pro_info.address) {
//     console.log(key + " : " + user_info.pro_info.address[key]);
// }

// hoisting 

console.log(`\n`);

function hello() {
    console.log("hello bhautik");
}
hello();


hello1();
function hello1() {
    console.log("hello bhautik davariya");
}

console.log(`\n`);
var x;
x = 7;
console.log(x);




console.log(`\n`);
console.log(x1);
var x1;
x1 = 7;

console.log(`\n`);
console.log(x2);
var x2 = 7;
