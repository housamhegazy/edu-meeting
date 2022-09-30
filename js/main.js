// header nav toggle

import { navbar, toggleBtn, navbarFun, yearEle, date } from "./module.js";



//add products to page
let products = [
  {
    icon: '<i class="fa-solid fa-laptop"></i>',
    title: "online courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-solid fa-house-user"></i>',
    title: "online courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-html5"></i>',
    title: "online HTML courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    title: "online CSS3 courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-node"></i>',
    title: "Node.js courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-js"></i>',
    title: "Javascript courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-php"></i>',
    title: "php courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    title: "online CSS3 courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-node"></i>',
    title: "Node.js courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-js"></i>',
    title: "Javascript courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-php"></i>',
    title: "php courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    title: "online CSS3 courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-node"></i>',
    title: "Node.js courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-js"></i>',
    title: "Javascript courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-php"></i>',
    title: "php courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    title: "online CSS3 courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-node"></i>',
    title: "Node.js courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-js"></i>',
    title: "Javascript courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-php"></i>',
    title: "php courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-css3-alt"></i>',
    title: "online CSS3 courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-node"></i>',
    title: "Node.js courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-js"></i>',
    title: "Javascript courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
  {
    icon: '<i class="fa-brands fa-php"></i>',
    title: "php courses",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet impedit, qui velit rerum dolores similique? Amet est",
  },
];

function addProducts() {
  let productsContainer = document.querySelector(".landing .slider .boxes");
  productsContainer.innerHTML = products
    .map((product) => {
      return `<div class="box">
                    <div class="icon">
                        ${product.icon}
                    </div>
                    <h2>${product.title}</h2>
                    <p>${product.desc}</p>
                </div>`;
    })
    .join("");
}
addProducts();
// start  landing slider
let boxesContainers = [...document.querySelectorAll(".landing .slider .boxes")];
let sliderLeft = [...document.querySelectorAll(".slider .arrow.left")];
let sliderRight = [...document.querySelectorAll(".slider .arrow.right")];
boxesContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  console.log(containerWidth)
  sliderRight[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  sliderLeft[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// start question function
let questionBoxes = document.querySelectorAll(".question-box");
let paragraphs = document.querySelectorAll(".question-box p");

questionBoxes.forEach((box) => {
  let question = box.querySelector(".question");
  let paragraph = box.querySelector("p");
  question.addEventListener("click", (e) => {
    questionBoxes.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  });
});

// courses-slider

let arrowLeft = document.querySelector(".courses-slider .fa-chevron-left");
let arrowRight = document.querySelector(".courses-slider .fa-chevron-right");
let boxContainer = document.querySelector(".courses-slider .boxes");
let pulletsContainer = document.querySelector(".pullets");
let boxes = [
  {
    imgUrl: "images/course-01.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-02.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-03.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-04.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-01.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-02.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-03.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
  {
    imgUrl: "images/course-04.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
  },
];

function addItems() {
  boxContainer.innerHTML = boxes
    .map((box) => {
      return `<div class="box">
                        <div class="image">
                            <img src=${box.imgUrl} alt="">
                        </div>
                        <div class="box-body">
                            <h3>${box.title}</h3>
                            <p>${box.desc}</p>
                            <div class="price-section">
                                <ul class="stars">
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                                <span class="price">${box.price}</span>
                            </div>
                        </div>
                    </div>`;
    })
    .join("");
  let sliderBoxes = document.querySelectorAll(".courses-slider .boxes .box");
  moveArrow();
}
addItems();

setInterval(() => {});
function moveArrow() {
  let count = 0;
  arrowRight.addEventListener("click", (e) => {
    let sliderBoxes = document.querySelectorAll(".courses-slider .boxes .box");
    arrowLeft.classList.remove("disable");
    count++;
    sliderBoxes.forEach((box) => {
      box.style.transform = `translateX(calc(((100% + 20px ) * ${count}) ))`;
      if (count >= sliderBoxes.length - 2) {
        arrowRight.classList.add("disable");
      } else {
        arrowRight.classList.remove("disable");
      }
    });
  });

  arrowLeft.addEventListener("click", () => {
    let sliderBoxes = document.querySelectorAll(".courses-slider .boxes .box");
    arrowRight.classList.remove("disable");
    count--;
    sliderBoxes.forEach((box) => {
      box.style.transform = `translateX(calc((((100% + 20px ) * ${count}) ))`;
      if (count === 0) {
        arrowLeft.classList.add("disable");
      } else {
        arrowLeft.classList.remove("disable");
      }
    });
  });
}

// add pullets and handle active
function addPullets() {
  for (let i = 0; i < boxes.length; i++) {
    let li = document.createElement("li");
    li.dataset.order = i;
    pulletsContainer.appendChild(li);
  }
  pulletsContainer.children[0].classList.add("active");
}
addPullets();

let list = pulletsContainer.querySelectorAll("li");
list.forEach((li) => {
  li.addEventListener("click", (e) => {
    let order = +e.target.dataset.order;
    handleActive(e);
    let sliderBoxes = document.querySelectorAll(".courses-slider .boxes .box");
    sliderBoxes.forEach((box) => {
      box.style.transform = `translateX(calc((((100% + 20px ) * ${order}) ))`;
    });
  });
});

function handleActive(e) {
  list.forEach((li) => {
    li.classList.remove("active");
  });
  e.target.classList.add("active");
}

// set interval
let section = document.querySelector(".university");
let nums = document.querySelectorAll(".box .number");
window.onscroll = function () {
  if (window.scrollY + 400 >= section.offsetTop) {
    nums.forEach((num) => {
      countNum(num);
    });
  }
};
function countNum(num) {
  let goal = num.dataset.goal;
  let interval = setInterval(() => {
    num.textContent = Math.floor(+num.textContent + goal / 20);
    if (+num.textContent > goal) {
      num.textContent = goal;
      clearInterval(interval);
    }
  }, 100);
}

//footer
yearEle.textContent = date;