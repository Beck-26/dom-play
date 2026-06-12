alert("Welcome to Beckham Kunda's DOM Play project! Click an actor's name to highlight their lines.");

// Dynamic HTML checker
document.getElementById("html-checker").setAttribute(
    "href",
    "https://validator.w3.org/nu/?doc=" + location.href
);

// Dynamic CSS checker
document.getElementById("css-checker").setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
);

// Manages mobile nav
function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}