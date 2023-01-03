/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{}); 
sr.reveal('.home__img',{}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 200}); 
sr.reveal('.about__text',{delay: 200}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 200});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 


const chat_id = '-809984259', botID = 'bot5835177481:AAEVjch3hqgoIL_m6r_ZTq8iwmvZSqzLIBU';
const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;
var name = document.getElementById('na').value
        var email = document.getElementById('em').value
document.querySelector("#messageForm").addEventListener("submit", async e => { // When the user submits the form
    e.preventDefault(); // Don't submit
    let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
        Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
    null, 2); // Prettify the JSON so we can read the data easily
    console.log(text)
    const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
        method: 'POST',
        headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
        body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
    });
    const messageStatus = document.querySelector('#status');
    if (sendMessage.ok) // Update the user on if the message went through
        messageStatus.textContent = "Message Sent!";
        // alert("Message sent")
    else
    // alert("Message failed")
        messageStatus.textContent = "Message Failed to send "
    e.target.reset(); // Clear the form fields.
});
