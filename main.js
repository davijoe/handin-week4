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

// Event delegation for all buttons with class "modal-btn"
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-btn')) {
      const targetModalId = e.target.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetModalId);
      targetModal.style.display = "block";
  }
});

// Close modals with class "close"
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('close')) {
      e.target.closest('.modal').style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
}


document.addEventListener('click', function(e) {
  if (e.target.id.startsWith('topRightBtn')) {
      const targetCodeId = e.target.getAttribute('data-code-target');
      const targetCode = document.getElementById(targetCodeId);
      const codeButton = document.getElementById('topRightBtn');

      // Toggle the clicked class
      e.target.classList.add('clicked');
      setTimeout(function() {
          e.target.classList.remove('clicked');
      }, 300);

      const textarea = document.createElement('textarea');
      textarea.value = targetCode.innerText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Optionally, give some feedback that text was copied
      //alert('Code copied to clipboard!');
      const originalText = e.target.innerText;
      e.target.innerText = "Copied!";
      setTimeout(function() {
          e.target.innerText = originalText;
      }, 500);
  }
});