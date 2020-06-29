

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// темно-сіра смуга навігації, лого + інше
const navigation = $('#navigation');
const a = $$('#levus-menu.desktop ul a');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 20){
    navigation.classList.add('header-small');
    a.forEach(item => item.classList.add('link-small'));
  } else {
    navigation.removeAttribute('class');
    a.forEach(item => item.removeAttribute('class'));
  }
});

// levus-menu
{const e=document.querySelector("#levus-menu");if(null!=e){const s=document.createElement("div");s.className="levus-wrapper";const n=e.querySelectorAll("li");function changeMenu(){window.innerWidth<1200?(e.classList.remove("desktop"),e.classList.add("mobile")):(e.classList.remove("mobile"),e.classList.add("desktop"))}function showMenu(){e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")}function showUl(e){e.stopPropagation(),e.target.classList.contains("parent")&&this.classList.toggle("show")}n.forEach(e=>e.childNodes.length>1?e.className="parent":""),window.addEventListener("resize",changeMenu),document.addEventListener("DOMContentLoaded",changeMenu),document.addEventListener("DOMContentLoaded",n=>e.append(s)),s.addEventListener("click",showMenu),n.forEach(e=>{e.addEventListener("click",showUl)})}}
