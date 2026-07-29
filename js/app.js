

/* ==========================================
   RECKLESS AUDIO
   Main JavaScript
========================================== */



// Mobile Navigation

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuButton){


    menuButton.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


    });


}







// Contact Form


const form = document.getElementById("project-form");

const message = document.getElementById("form-message");



if(form){


form.addEventListener("submit",(event)=>{


event.preventDefault();



message.textContent =
"Thanks for your enquiry. We'll get back to you shortly.";



form.reset();



});


}