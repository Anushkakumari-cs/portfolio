const menu=document.querySelector(".menu-toggle"),nav=document.querySelector("#nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const modal=document.getElementById("modal"), modalImg=document.getElementById("modal-img");
document.querySelectorAll(".view-cert").forEach(btn=>btn.addEventListener("click",()=>{modalImg.src=btn.dataset.img;modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
document.querySelector(".close").addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
document.getElementById("year").textContent=new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal-on-scroll");
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
revealItems.forEach(item => observer.observe(item));

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
}, {passive:true});
