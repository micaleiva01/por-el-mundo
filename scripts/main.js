var elementIntro = document.getElementById("intro");
let btn = document.getElementById("btn");
var elementPage = document.getElementById("page");
var elementFooter = document.getElementById("footer");

elementPage.style.display = "none";
elementFooter.style.display = "none";
elementIntro.style.display = "block";

//shows website
btn.onclick = function showPage() {
    elementIntro.style.display = "none";
    elementPage.style.display = "block";
    elementFooter.style.display = "block";
};