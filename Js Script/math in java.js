

console.log(Math.PI);

console.log(Math.E);

// KOI  number ne round of karva hoi tyare 

console.log(Math.round(4.3));
console.log(Math.ceil(8.9));
console.log(Math.floor(40.5));
console.log(Math.fround(4.50));
console.log(Math.pow(4,5));
console.log(Math.sqrt(100));

console.log(Math.min(4,5,-3,100));
console.log(Math.max(4,5,-3,100));

// random number 

console.log(Math.random()*10);  // 9 sudhi aav che

function get(min, max) 
{
    let x = Math.floor(Math.random()*(max - min) + min);
    console.log(x);
    
}
get(10, 20) 


