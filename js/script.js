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



//LOGIN AND SIGNUP FORM TOGGLE
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});