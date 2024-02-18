const library = [];

function book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
};

function addBookToLibrary() {

};

const book2 = new book("No", "Hsna", 3, "Unread")

library.push(book2, book2, book2, book2,book2, book2,book2, book2,book2, book2,book2, book2,)
console.log(library)



let container = document.querySelector(".container")


library.forEach((item) => {
    let div = document.createElement("div")
    container.appendChild(div)
    div.setAttribute("class", "card")
    let para = document.createElement("p");
    para.innerText = `title: ${item.title} \n author: ${item.author} \n Number Of Pages: ${item.numberOfPages} \n Status: ${item.status}`
    div.appendChild(para);
})

const dialog = document.querySelector("dialog");
const titleValue = dialog.querySelector("#title");
const authorValue = dialog.querySelector("#author");
const numberOfPagesValue = dialog.querySelector("#number-of-pages");
const submitButton = dialog.querySelector("#submit");
const showButton = document.querySelector("dialog + button");
showButton.addEventListener("click", ()=> {
    dialog.showModal();
    
});

function displayRadioValue() {
    let ele = document.getElementsByName('status');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return  ele[i].value
    }
}


submitButton.addEventListener("click", (event)=> {
    event.preventDefault();
    dialog.close();
    let book1 = new book(titleValue.value, authorValue.value, numberOfPagesValue.value, displayRadioValue());
    library.push(book1);
    let newBook = [library.pop()];
    newBook.forEach((item) => {
        let div = document.createElement("div")
        container.appendChild(div)
        div.setAttribute("class", "card")
        let para = document.createElement("p");
        para.innerText = `title: ${item.title} \n author: ${item.author} \n Number Of Pages: ${item.numberOfPages} \n Status: ${item.status}`
        div.appendChild(para);
        })
    titleValue.value = "";
    authorValue.value = "";
    numberOfPagesValue.value = "";

})
