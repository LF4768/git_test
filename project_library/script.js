const library = [];

function book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
};

function addBookToLibrary() {

};

const book1 = new book("Yes", "Ansh", 300, "Read")
const book2 = new book("No", "Hsna", 3, "Unread")
library.push(book1, book2)
console.log(library)

let container = document.querySelector(".container")
let list = document.getElementById("myList");

library.forEach((item) => {
    let div = document.createElement("div")
    container.appendChild(div)
    let para = document.createElement("p");
    para.innerText = `title: ${item.title} \n author: ${item.author} \n Number Of Pages: ${item.numberOfPages} \n Status: ${item.status}`
    div.appendChild(para);
});