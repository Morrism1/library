let myLibrary = [
  {
    title: "Been through Hell",
    author: "John Smith",
    pages: 220,
    read: false,
  },
  {
    title: "Good life",
    author: "Jane Smith",
    pages: 120,
    read: false,
  },
];

const heroPlaceholder = document.querySelector("#hero-template");

// addBookToLibrary();

// get the table

const table = document.querySelector("tr");

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function addBookToLibrary() {
// do stuff here
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;
  const readInput = document.querySelector("#read").value;
  const newBook = new Book(titleInput, authorInput, pagesInput, readInput);
  console.log(newBook.length);
  myLibrary.push(newBook);
  console.log(myLibrary);
});
// }

function displayBook() {
  const list = document.createElement("ul");
  list.classList.add("list", "hero-list");

  const template = document.querySelector("#hero-template");

  for (let i = 0; i < myLibrary.length; i++) {
    const heroCard = document.importNode(template.content, true);
    const removeButton = heroCard.querySelector(".remove");
    const readStatus = heroCard.querySelector(".read");
    heroCard.querySelector("li").setAttribute("data-num", i);
    heroCard.querySelector(".card-title").textContent = myLibrary[i].title;
    heroCard.querySelector(".card-text").textContent = myLibrary[i].author;
    removeButton.textContent = "Remove book";
    removeButton.addEventListener("click", () => {
      document.querySelector(`[data-num="${i}"]`).remove();
    });
    readStatus.textContent = myLibrary[i].read;
    readStatus.addEventListener("click", () => {
      changeReadStatus(readStatus);
    });
    console.log(myLibrary[i].author);
    list.appendChild(heroCard);
  }

  heroPlaceholder.replaceWith(list);
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

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
// To change the read staus of the book
function changeReadStatus(read) {
  //const read= document.querySelector(".read");

  if (read.innerHTML === "true") {
    read.textContent = "false";
  } else {
    read.textContent = "true";
  }
}

//set the local storage
localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
