$(document).ready(function() {

  $('.hamburger').click(function() {
    $('nav .nav-links').toggleClass('display-ul');
    $('nav .nav-links ul').toggleClass('display-li');
    $('nav .nav-links ul li').toggleClass('display-li-padding');
    $('nav').toggleClass('fullscreen-nav');
    $('body').bind('touchmove', function(e){e.preventDefault()});
    $('body').toggleClass('stop-scrolling');
    $('.nav-links').toggleClass('fadein');
  });

  if($('.hamburger').css('display') != 'none'){
    $('.nav-links ul li').click(function(){
      $('nav').toggleClass('fullscreen-nav');
      $('nav .nav-links').toggleClass('display-ul');
      $('nav .nav-links ul').toggleClass('display-li');
      $('nav .nav-links ul li').toggleClass('display-li-padding');
      $('body').toggleClass('stop-scrolling');
  });
  }
  // else{
  //   $('nav').toggleClass('fullscreen-nav');
  // }


});

// var hamburgerMenuFunctionality = document.querySelector(".hamburger").addEventListener("click", function() {
//   this.classList.toggle('bg-red');
// });

$(function(){



// popwindow --------------
function popWindow(){
var upit = document.getElementById("popUp");
upit.style.display = "block";
}
function closeWindow() {
var cloclose = document.getElementById("popUp");
cloclose.style.display = "none";
}
//$('#popUp').css('display') = 'block';
var windowOpen = document.getElementById('menu-icon');
var closebutton = document.getElementById("closebtn");
windowOpen.addEventListener('click', popWindow, false);
closebutton.addEventListener('click', closeWindow, false);

});
//Scroll EVENT
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("event2").style.display = "block";
    } else {
        document.getElementById("event2").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
