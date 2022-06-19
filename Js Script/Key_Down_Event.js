window.addEventListener('keydown' , function ckeckKey(enent){
    console.log(enent.key);
});

// scroll Event .AT_TARGET.........................>

// scroll
// jyare scrolling thase tyare output aav che 
window.addEventListener('scroll' , function () {
    console.log("scrolling start.......")
});


// wheel 
// jyare mouse nu wheel up down thase tyare 
window.addEventListener('wheel' , function (wheelEvent) 
{
    if(wheelEvent.deltaY < 0)
    {
        console.log("scrolling Up.......");
    }
    else if(wheelEvent.deltaY > 0)
    {
        console.log("scrolling down.......");
    }
});

// amuk px pachi scrolling pachi je output jovu hoi tyare delta use karva nu 

window.addEventListener('scroll' , function ()
{                         //px
    if (window.pageYOffset > 100) 
    {
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.body.style.backgroundColor = "blue";
    }
});












