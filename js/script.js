// READ MORE - READ LESS FUNCTIONALITY
function myFunction() {
    var dots = document.getElementsByClassName("dots");
    var moreText = document.getElementsByClassName("more");
    var btnText = document.getElementsByClassName("myBtn");

    for (var i = 0; i < dots.length; i++) {
        if (dots[i].style.display === "none") {
            dots[i].style.display = "inline";
            btnText[i].textContent = "Read more";
            moreText[i].style.display = "none";
        } else {
            dots[i].style.display = "none";
            btnText[i].textContent = "Read less";
            moreText[i].style.display = "inline";
        }
    }
}



// ADDING FUNCTIONALITY TO THE SEARCH ICON
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
    const searchQuery = window.prompt('Enter a search query:');

    processSearch(searchQuery);
});



//LOGIN AND SIGNUP FORM TOGGLE
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

signupLink.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the page from reloading
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupLink.style.display = "none";
    loginLink.style.display = "inline";
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the page from reloading
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginLink.style.display = "none";
    signupLink.style.display = "inline";
});