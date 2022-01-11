import './less/index.less'

// Your code goes here!

const navLinks = document.querySelector('nav');
navLinks.addEventListener("mouseover", function(event) {
    event.target.style.color = "skyblue";
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

navLinks.onclick = function(event) {
    console.log("Lets Click IT!!!")
}

// const signUpBtn = document.querySelector('.btn');



// signUpBtn.ondblclick = function(event) {
//     console.log("Clickin' the habit!!!")
// }

Array.from(document.querySelectorAll('.btn')).forEach(elem => elem.addEventListener('click', evt => {
    console.log('clickin the habit!!')
}))
