const sectionHero=document.querySelector(".section-hero");

//=================================================
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-acitve"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-acitve")
  );


});

//=======================================================================
//sticky nav-bar
//=======================================================================
const observer= new IntersectionObserver((entries)=>{
  const ele=entries[0];
  !ele.isIntersecting? 
  document.body.classList.add("sticky"):document.body.classList.remove("sticky");


},{root:null,threshold:0,});

observer.observe(sectionHero);
//======================================================================
// scroll to top
const footerElement=document.querySelector(".footer");

const scrollElement=document.createElement("div");

scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

const scrolltop =()=>{
sectionHero.scrollIntoView({behavior:"smooth"});
}
scrollElement.addEventListener("click",scrolltop);

//=========================================================
//toggle btn

const mobile_btn=document.querySelector(".navbar-mobile-btn");
const headerElem=document.querySelector(".header");

mobile_btn.addEventListener("click",()=>{
  headerElem.classList.toggle("active");
})