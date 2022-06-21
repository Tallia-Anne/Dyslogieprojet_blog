// recupération des éléments

let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);