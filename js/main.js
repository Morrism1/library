let myLibrary = ["js", "css", "java", "ruby"];
let addbutton = document.querySelector("button");
addbutton.addEventListener("click", addBookToLibrary);

// get the table

const table = document.querySelector("tr");

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  let book = document.getElementById("book").value;
  myLibrary.push(book);
  console.log(myLibrary);
}

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(myLibrary[i]);
    cell.appendChild(cellText);
    table.appendChild(cell);
  }
}

displayBook();

// create modal
// 1. get all elements
const modal = document.querySelector("#myModal");
const modelContent = document.querySelector(".modal-content");
const modalBtn = document.querySelector("#myBtn");
const closeModal = document.querySelector(".close");

// open the modal
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
