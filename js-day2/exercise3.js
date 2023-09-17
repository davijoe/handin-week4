const names = ["Lars", "Peter", "Jan", "Ian"];

document.getElementById("name-form").addEventListener("submit", function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
    // Get the name from the input field
    const name = document.getElementById("name-input").value;
    
    // Add the name to the names array
    names.push(name);

    // Regenerate the <ul>
    regenerateList();

    // Clear the input field for the next entry
    document.getElementById("name-input").value = '';
});

document.getElementById("remove-first").addEventListener("click", function() {
    // Remove the first name from the array
    names.shift();

    // Regenerate the <ul>
    regenerateList();
});

document.getElementById("remove-last").addEventListener("click", function() {
    // Remove the last name from the array
    names.pop();

    // Regenerate the <ul>
    regenerateList();
});

function regenerateList() {
    const ul = document.getElementById("name-list");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    } // Clear the existing names
    names.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;  // Safe against XSS as it doesn't parse HTML
        ul.appendChild(li);
    });
}