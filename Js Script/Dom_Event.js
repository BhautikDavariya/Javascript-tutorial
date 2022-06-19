// inline function ma call karavu pde che 

function InlineClick() 
{
    console.log("One Click Run");
}


// page loder Event............>

let image = document.getElementById("Images");

// pela Event nu name aapva nu pachi functon banava nu 
image.addEventListener('load' , function(){
    console.log("Fully Loded");
});