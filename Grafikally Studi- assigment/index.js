// Responsive navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click" , () =>{
  headerElem.classList.toggle("active");
});




//Scroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () =>{
  heroSection.scrollIntoView({behavior: "smooth"});
};

scrollElement.addEventListener("click", scrollTop);



// ==========Animate counter number=====

const counterNum = document.querySelectorAll(".counter-number");

const speed = 20;

counterNum.forEach((curElem) =>{
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);

    const increamentNumber  = Math.trunc(targetNumber / speed);

    if (initialNum < targetNumber){
      curElem.innerText = `${initialNum + increamentNumber}+`;
      setTimeout(updateNumber, 200);
    }
  };
  updateNumber();
}); 

