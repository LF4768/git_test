let previousButton = document.querySelector(".previous-button");
let nextButton = document.querySelector(".next-button");
let frame = document.querySelector(".frame");
let left = document.querySelector(".image-left");
let right = document.querySelector(".image-right");
let container = document.querySelector(".btn-container");

let arr = [
  '<img src="./imageCarousel/download.jpg" alt="img" />',
  '<img src="./imageCarousel/download (1).jpg" alt="img" />',
  '<img src="./imageCarousel/download (2).jpg" alt="img" />',
  '<img src="./imageCarousel/download (3).jpg" alt="img" />',
];

left.innerHTML = arr[0];
frame.innerHTML = arr[1];
right.innerHTML = arr[2];

for (let i = 0; i < arr.length; i++) {
  let btn = document.createElement("button");
  btn.classList.add("circle-button");
  container.appendChild(btn);
}

let ind = 1;
let circleBtns = document.querySelectorAll(".circle-button");
circleBtns[1].classList.add("chosen-one");

for (let i = 0; i < arr.length; i++) {
  circleBtns[i].addEventListener("click", () => {
    left.innerHTML = arr[(i + 3) % arr.length];
    frame.innerHTML = arr[i];
    right.innerHTML = arr[(i + 1) % arr.length];
    let flag = 0;
    let reqIndex = 999;
    for (let j = 0; j < arr.length; j++) {
      if (circleBtns[j].classList.contains("chosen-one")) {
        flag = 1;
        reqIndex = j;
      }
    }
    if ((flag = 1)) {
      circleBtns[reqIndex].classList.remove("chosen-one");
    }
    circleBtns[i].classList.add("chosen-one");

    ind = i;
  });
}

function next(index) {
  circleBtns[index].classList.remove("chosen-one");
  left.innerHTML = arr[index % arr.length];
  frame.innerHTML = arr[(index + 1) % arr.length];
  right.innerHTML = arr[(index + 2) % arr.length];
  circleBtns[(index + 1) % arr.length].classList.add("chosen-one");
}

nextButton.addEventListener("click", () => {
  next(ind);
  ind = (ind + 1) % arr.length;
});

function previous(index) {
  circleBtns[index].classList.remove("chosen-one");
  left.innerHTML = arr[(index + 2) % arr.length];
  frame.innerHTML = arr[(index + 3) % arr.length];
  right.innerHTML = arr[index];
  circleBtns[(index + 3) % arr.length].classList.add("chosen-one");
}

previousButton.addEventListener("click", () => {
  previous(ind);
  ind = (ind + 3) % arr.length;
});
