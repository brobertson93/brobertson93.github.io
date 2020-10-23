var coll = document.getElementsByClassName("collapsible");
var modal1 = document.getElementsByClassName("projectSlideShow")[0];
var modalClose = document.getElementsByClassName("closeCursor")[0];
var hideNav = document.getElementsByClassName("hideNav")[0];
var i;
var slideIndex = 1;


for (i = 0 ; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
   
        var content = this.nextElementSibling;
        
        if (content.style.display === "flex") {
            content.style.display = "none";
        }

        else {
            content.style.display = "flex";
        }
    }


    );
}

 
  hideNav.addEventListener("click", () => {
  
    document.getElementsByClassName("nav")[0].style.display = "none";



  });
modal1.addEventListener("click", () => {

    document.getElementById("myModal").style.display = "block";
    document.getElementsByTagName("main")[0].style.display = "none";
    document.getElementsByClassName("nav")[0].style.display = "none";
   
}
);

modalClose.addEventListener("click", () =>{

    
    document.getElementById("myModal").style.display = "none";
    document.getElementsByTagName("main")[0].style.display = "block";
    document.getElementsByClassName("nav")[0].style.display = "flex";



});


showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
 


function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";
  
 
  }
