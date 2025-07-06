let dropDownbutton = document.querySelector(".menu-holder");
let dropDownList = document.querySelector(".items");

dropDownbutton.addEventListener("click", () => {
  dropDownList.classList.add("visible");
});

dropDownList.childNodes.forEach((item) => {
  item.addEventListener("click", () => {
    dropDownbutton.textContent = `${item.textContent}`;
    dropDownList.classList.remove("visible");
  });
});
