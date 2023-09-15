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

function logoHover() {
    const logo = document.getElementById('logo');
    logo.src = '/resources/images/logo-hover.png';
    document.getElementById('logo').src = '#fff';
}

document.getElementById('dropdownToggle').addEventListener('mouseover', function() {
    const dropdown = document.getElementById('dropdownContent');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});