// Array 
    // index =    0       1         2      3          4 
// let Array = ["Match","Physics","Bio","Computer","Science"];
//     ArrayInex = Array.indexOf("Science"); //index kya sudhi che ae jova mate 
//     console.log(ArrayInex);
//     console.log(Array); // Array index
//     console.log(Array[1]); // index number

//     // array ni koi value change karvi hoi tyare 

//     console.log(Array[1]="Hello");
//     console.log(`\n`);


// oparation on array 
    // length  =    1        2        3        4         5 
let ArrayLength = ["Match","Physics","Bio","Computer","Science","bhautik"];
    console.log(ArrayLength); 
    console.log(ArrayLength.length); 
    console.log(`\n`);

    // array ma koi subject vadhare add krvo hoi to 

    let subject = ["Physics","Bio","Computer","bhautik"];
    console.log(subject);
    subject.push("Davariya"); //koi subject pachal thi add krva mate push no use thai che 
    console.log(subject);
    subject.unshift("ankit"); //koi subject aagal thi add krva mate push no use thai che 
    console.log(subject);
    subject.pop(); // pachal koi subject ne delete karva use thai che 
    console.log(subject);
    subject.shift(); // aagal koi subject ne delete karva use thai che 
    console.log(subject);
    subject.splice(2,1); // vache thi koi subject delete karvo hoi tyare  // index ma work kr che
    console.log(subject);
    console.log(`\n`);

    // array ne khali karvo hoi tyre use karvu

    let empty = ["Physics","Bio","Computer","bhautik"];
        empty.length = 0;  // peli rit
        console.log(empty);
        // empty = [];  // biji rit
        // console.log(empty);
        // empty.splice( 0,empty.length); // 3 ji rit 
        // console.log(empty);
        console.log(`\n`);

    // koi index ni postition jovi hoi tyare 

    let chackindex = ["Physics","Bio","Computer","bhautik"];
        position = chackindex.indexOf("Computer");
        console.log(position);
        console.log(`\n`);

        // koi vriable array che k nai jova mate use thai che 

        let chackArray = ["Physics","Bio","Computer","bhautik"];
        // document.write(Array.isArray(chackArray));
        console.log(Array.isArray(chackArray));


// koi aakho word ne array banva mate use thai 

    let word = "Bhautik Davariya Form Surat";
    let countword = word.split('a');
    console.log(countword);
    console.log(`\n`);


// koi array ne akha word ma convert karvu hoi tyare use thai 

let word1 = ["Physics","Bio","Computer","bhautik"];
    let convertword = word1.join('');
    console.log(convertword);
    console.log(`\n`);

    // 2 thi vadhare array ne join karva mate 

    array1 = ["Physics","Bio","Computer","bhautik"];
    array2 = ["Physics","Bio","Computer","bhautik"];
    array3 = ["Physics","Bio","Computer","bhautik"];

    let joinAllArray = array1.concat(array2,array3);
    console.log(joinAllArray);
    console.log(`\n`);


    // array ni andar koi array hoi to tene print karva mate use thai che 

    let arras = [
            //0   1
            ["A",'B'], //0
            ["C","D"], //1
            ["E","F"], //2
    ];

    fetch = arras[1][1];
    console.log(fetch);


    let arrayloop =["A","B","C","D","E"];

    for (let i = 0; i < arrayloop.length; i++) 
    {
        console.log(`numberOf ${i} is ${arrayloop[i]}`);
    }

    // task
    // let input_array = prompt("Enter any word");
    // document.write("<br>");

    // document.write(`name is :${input_array}`);
    // document.write("<br>");

    // let countword1 = input_array.split(" "); // array bani gayu
    // document.write("<br>");

    // document.write(`total word is :${countword1.length}`);
    // document.write("<br>");

    // let joina = countword1.join(""); // array ne join kariyu
    // document.write(`word character is :${joina.length}`);

    console.log(`\n`);
    let arrayloop1 =["A","B","C","D","E", "F"];

    for (let i = 0; i <= 5; i++) 
    {
        console.log(`numberOf ${i} is ${arrayloop1[i]}`);
    }


    let add_input_word = prompt("enter any word");

    document.write(`your word is : ${add_input_word}`);

    countword = add_input_word.split(' ');

    document.write(countword);
    document.write("<br>")

    for (let i = 0; i< countword.length; i++) 
    {
        document.write(`your enter this word ${i} is ${countword[i]}`);
        document.write("<br>")
       
    }
    