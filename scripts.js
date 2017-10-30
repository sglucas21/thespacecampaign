
//scrolling effect for navigation menu

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
    

//modal effect for cover art images

var modal = document.getElementById('myModal');
var img1 = document.getElementById('campaign_pic');
var img2 = document.getElementById('crown_pic');
var img3 = document.getElementById('civil_rights_pic');
var modalImg = document.getElementById("img01");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

