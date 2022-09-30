import {navbar, toggleBtn, navbarFun ,yearEle, date} from './module.js'
//footer
yearEle.textContent = date;

// courses

let boxes = [
  {
    imgUrl: "images/course-01.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "attractive"],
  },
  {
    imgUrl: "images/course-02.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "soon", "important"],
  },
  {
    imgUrl: "images/course-03.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "attractive"],
  },
  {
    imgUrl: "images/course-04.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "soon", "important"],
  },
  {
    imgUrl: "images/course-01.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "important"],
  },
  {
    imgUrl: "images/course-02.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "soon"],
  },
  {
    imgUrl: "images/course-03.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "important"],
  },
  {
    imgUrl: "images/course-04.jpg",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem est ",
    price: "$200",
    name: ["all", "soon", "important", "attractive"],
  },
];

// add filter list
let filterList = [...new Set(
  boxes.reduce(
    (x, y) => {
      return x.concat(y.name);
    },
    ["all"]
  )
)]
let ListContainer = document.querySelector(".courses .list");
function addItemList(){
    ListContainer.innerHTML = filterList.map(li=>{
        return `<li class="btn" data-name=${li}>${li}</li>`;
    }).join("")
}
addItemList();
//add boxes of meetings
let coursesContainer = document.querySelector(".courses .courses-content");
function addItems(boxes) {
  coursesContainer.innerHTML = boxes
    .map((box) => {
      return `
                    <div class="box animate">
                        <div class="image">
                            <img src=${box.imgUrl} alt="">
                            <div class="price">${box.price}</div>
                        </div>
                        <div class="lecture-body">
                            <div class="date">
                                <span class="month">NOV</span>
                                <span class="day">10</span>
                            </div>
                            <div class="info">
                                <h4>${box.title}</h4>
                                <p>${box.desc}</p>
                            </div>
                        </div>
                    </div>`;
    })
    .join("");
}
addItems(boxes);
// add classes to boxes 

// filter function
function filter(){
    let meetingBoxes =[...document.querySelectorAll(
      ".courses .courses-content .box"
    )]
    let listBtns = document.querySelectorAll(".courses .list li")
    listBtns.forEach(li=>{
        li.addEventListener("click",(e)=>{
            let x = e.target.dataset.name;
            let search = boxes.filter(box=>box.name.includes(x));
            addItems(search);
        })
    })
    
}
filter();