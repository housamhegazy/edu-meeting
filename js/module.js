// header nav toggle

let navbar = document.querySelector(".navbar");
let toggleBtn = document.querySelector(".toggle");
let pageList = document.querySelector(".navbar .page-list");
let smList = document.querySelector(".navbar .page-list .sm-list");

pageList.addEventListener("click",()=>{
    smList.classList.toggle("open")
})

function navbarFun() {
  toggleBtn.onclick = function () {
    navbar.classList.toggle("open");
  };

  window.addEventListener("scroll", () => {
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
    }
    if(smList.classList.contains("open")){
        smList.classList.remove("open");
    }
  });
}

//footer
let yearEle = document.querySelector("footer .copyright span");
let date = new Date().getFullYear();

navbarFun();
export { navbar, toggleBtn, navbarFun, yearEle, date };