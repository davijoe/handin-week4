window.onload = function() {
    loadNavbar();
};

function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("navbar").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "/resources/navbar.html", true);
    xhr.send();
}