

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// темно-сіра смуга навігації, лого + інше
const navigation = document.querySelector('#navigation');
const a = document.querySelectorAll('#levus-menu.desktop ul a');
const logo = document.querySelector('#logo');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 20){
    navigation.classList.add('header-small');
    logo.classList.add('logo-small');
    a.forEach(item => item.classList.add('link-small'));
  } else {
    navigation.removeAttribute('class');
    logo.removeAttribute('class');
    a.forEach(item => item.removeAttribute('class'));
  }
});

// levus-menu
{const e=document.querySelector("#levus-menu");if(null!=e){const s=document.createElement("div");s.className="levus-wrapper";const n=e.querySelectorAll("li");function changeMenu(){window.innerWidth<1200?(e.classList.remove("desktop"),e.classList.add("mobile")):(e.classList.remove("mobile"),e.classList.add("desktop"))}function showMenu(){e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")}function showUl(e){e.stopPropagation(),e.target.classList.contains("parent")&&this.classList.toggle("show")}n.forEach(e=>e.childNodes.length>1?e.className="parent":""),window.addEventListener("resize",changeMenu),document.addEventListener("DOMContentLoaded",changeMenu),document.addEventListener("DOMContentLoaded",n=>e.append(s)),s.addEventListener("click",showMenu),n.forEach(e=>{e.addEventListener("click",showUl)})}}

// levus-onslide
class LevusOnslide{constructor(s){this.slider=document.querySelector(s),this.slides=this.slider.querySelectorAll("article"),this.left=this.slider.querySelector("#levus-left"),this.right=this.slider.querySelector("#levus-right"),this.length=this.slides.length-1,this.first=this.slides[0],this.cnt=0}click(){this.left.addEventListener("click",()=>{setTimeout(()=>{this.slides.forEach(s=>s.removeAttribute("class")),this.cnt<this.length?this.cnt++:this.cnt=0,this.slides[this.cnt].classList.add("show")},500)}),this.right.addEventListener("click",()=>{setTimeout(()=>{this.slides.forEach(s=>s.removeAttribute("class")),0===this.cnt?this.cnt=this.length:this.cnt--,this.slides[this.cnt].classList.add("show")},500)})}arrow(){this.left.classList.add("hide"),this.right.classList.add("hide"),this.slider.addEventListener("mouseover",()=>{this.left.removeAttribute("class"),this.right.removeAttribute("class")}),this.slider.addEventListener("mouseout",()=>{this.left.classList.add("hide"),this.right.classList.add("hide")})}autoScroll(){setInterval(()=>{this.slides.forEach(s=>s.removeAttribute("class")),this.cnt<this.length?this.cnt++:this.cnt=0,this.slides[this.cnt].classList.add("show")},8e3)}init(){this.click(),this.first.classList.add("show"),this.arrow(),window.addEventListener("resize",()=>window.innerWidth<1200&&this.autoScroll())}}

// init slider
document.querySelector("#levus-slider") && new LevusOnslide("#levus-slider").init();

// levus-animate
{const height=document.documentElement.clientHeight,elements=document.querySelectorAll(".levus-animate");elements.forEach(e=>e.parentElement.classList.add("hidden")),window.addEventListener("scroll",()=>elements.forEach(e=>e.getBoundingClientRect().top<height&&e.classList.add("show")));}