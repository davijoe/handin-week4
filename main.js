function goToIndex() {
    window.location.href = "/index.html";
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var myDivs = document.getElementsByClassName('my-div');

for (var i = 0; i < myDivs.length; i++) {
    myDivs[i].addEventListener('click', function() {
        this.classList.add('clicked');

        let currentDiv = this;

        setTimeout(function() {
            currentDiv.classList.remove('clicked');
        }, 300);
    });
}