let slideIndex  =   1;
showSlides(slideIndex)
function plus(n)    {
    showSlides(slideIndex += n);
}
function current(n) {
    showSlides(slideIndex = n);
}
function    showSlides(n)   {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots    =   document.getElementsByClassName("dot");
    if (n > slides.length)  {
        slideIndex = 1;
    }
    if  (n < 1) {slideIndex = slides.length}
    for (i  = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}