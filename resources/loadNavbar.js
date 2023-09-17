document.addEventListener("DOMContentLoaded", function() {
    
    loadNavbar();
    
    function loadNavbar() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("navbar").innerHTML = this.responseText;

                // Add event listener here after navbar is loaded
                document.getElementById('dropdownChevron').addEventListener('mouseover', function dropFunction() {
                    const dropdown = document.getElementById('dropdownContent');
                    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                        dropdown.style.display = 'block';
                    } else {
                        dropdown.style.display = 'none';
                    }
                });
                
            }
        };
        xhr.open("GET", "/resources/navbar.html", true);
        xhr.send();
    }
});
