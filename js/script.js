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