// Current Year
document.getElementById("year").textContent =
new Date().getFullYear();

// Scroll Animation
const sections = document.querySelectorAll(".slide-section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
            entry.target.style.transition="all 1s ease";
        }
    });
});

sections.forEach(section=>{
    observer.observe(section);
});

// Active Menu
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{
    link.addEventListener("click",function(){
        navLinks.forEach(item=>item.style.color="white");
        this.style.color="#f59e0b";
    });
});