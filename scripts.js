
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
    


//mouse over effect to change image to greyscale

function newPicture1() {
    
    document.getElementById("campaign_pic").src="images/The_Campaign_Artwork_Grey.jpg";
}

function oldPicture1() {
    document.getElementById("campaign_pic").src="images/The_Campaign_Artwork.jpg";
}

function mousedown1() {
    document.getElementById("campaign_pic").src="images/The_Campaign_Artwork.jpg";
}

//mouse over effect to change image to greyscale
function newPicture2() {
    
    document.getElementById("crown_pic").src="images/jetson_crown_grey.jpg";
}

function oldPicture2() {
    document.getElementById("crown_pic").src="images/jetson_crown.jpg";
}

function mousedown2() {
    document.getElementById("crown_pic").src="images/jetson_crown.jpg";
}

//mouse over effect to change image to greyscale
function newPicture3() {
    
    document.getElementById("civil_rights_pic").src="images/yons_civil_rights_grey.jpg";
}

function oldPicture3() {
    document.getElementById("civil_rights_pic").src="images/yons_civil_rights.jpg";
}

function mousedown3() {
    document.getElementById("civil_rights_pic").src="images/yons_civil_rights.jpg";
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


var span = document.getElementsByClassName("close-button")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


