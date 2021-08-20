const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
   navbarMenu.classList.toggle("is-active")
})

function showAboutMe() {
    document.getElementById('aboutMe').style.display = "block";
}

function showPortfolio() {
    document.getElementById('portfolio').style.display = "block";
}

function showContact() {
    document.getElementById('contact').style.display = "block";
}

function hideAboutMe() {
    document.getElementById('aboutMe').style.display = "none";
}

function hidePortfolio() {
    document.getElementById('portfolio').style.display = "none";
}

function hideContact() {
    document.getElementById('contact').style.display = "none";
}