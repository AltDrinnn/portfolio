// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach(el => observer.observe(el));


// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if(window.scrollY > 50){
        nav.style.background = "rgba(11,15,25,0.9)";
    } else {
        nav.style.background = "rgba(11,15,25,0.6)";
    }
});