// header nav toggle

let navbar = document.querySelector(".navbar");
let toggleBtn = document.querySelector(".toggle");
let pageList = document.querySelector(".navbar .page-list");
let smList = document.querySelector(".navbar .page-list .sm-list");

pageList.addEventListener("click", (e) => {
  e.preventDefault();
  smList.classList.toggle("open");
});

function navbarFun() {
  toggleBtn.onclick = function () {
    navbar.classList.toggle("open");
  };

  window.addEventListener("scroll", () => {
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
    }
    if (smList.classList.contains("open")) {
      smList.classList.remove("open");
    }
     let header = document.querySelector(".landing .header");
     if (window.scrollY >= 600) {
       header.classList.add("fixed");
     }else{
      header.classList.remove("fixed");
     }
  });
}

//footer
let yearEle = document.querySelector("footer .copyright span");
let date = new Date().getFullYear();

navbarFun();
export { navbar, toggleBtn, navbarFun, yearEle, date };
