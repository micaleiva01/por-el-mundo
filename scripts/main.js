var elementIntro = document.getElementById("intro");
let btn = document.getElementById("btn");
var elementPage = document.getElementById("page");
var elementContact = document.getElementById("contact");

elementPage.style.display = "none";
elementContact.style.display = "none";
elementIntro.style.display = "block";

//shows website
btn.onclick = function showPage() {
    elementIntro.style.display = "none";
    elementPage.style.display = "block";
    elementContact.style.display = "block";
};
