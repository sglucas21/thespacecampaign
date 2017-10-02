$('.top-nav').localScroll();


    /*Toggle responsive class */
function myFunction() {
    var x = document.getElementById("myTop-nav");
    if (x.className ==="top-nav") {
        x.className += " responsive";
    } else {
        x.className ="top-nav";
    }
}
    
