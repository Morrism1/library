const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", addBookToLibrary);

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
// To change the read staus of the book
function changeReadStatus(read) {
  // const read= document.querySelector(".read");

  if (read.innerHTML === "true") {
    read.textContent = "false";
  } else {
    read.textContent = "true";
  }
}

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  // do stuff here

  e.preventDefault();
  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;
  const readInput = document.querySelector("#read").value;
  const newBook = new Book(titleInput, authorInput, pagesInput, readInput);

  myLibrary.push(newBook);
  setLibrary();
  window.close();
}

function displayBook() {
  const list = document.createElement("ul");
  list.classList.add("list", "hero-list");

  const template = document.querySelector("#hero-template");

  for (let i = 0; i < myLibrary.length; i += 1) {
    const heroCard = document.importNode(template.content, true);
    const removeButton = heroCard.querySelector(".remove");
    const readStatus = heroCard.querySelector(".read");
    const bookCard = heroCard.querySelector("li");
    bookCard.setAttribute("data-num", i);
    heroCard.querySelector(".card-title").textContent = myLibrary[i].title;
    heroCard.querySelector(".card-text").textContent = myLibrary[i].author;
    removeButton.textContent = "Remove book";
    removeButton.addEventListener("click", () => {
      list.removeChild(bookCard);
      myLibrary.splice(myLibrary[i], 1);
      setLibrary();
    });
    readStatus.textContent = myLibrary[i].read;
    readStatus.addEventListener("click", () => {
      changeReadStatus(readStatus);
    });

    list.appendChild(heroCard);
    setLibrary();
  }

  heroPlaceholder.replaceWith(list);
}

// create modal
// 1. get all elements
const modal = document.querySelector("#myModal");

const modalBtn = document.querySelector("#myBtn");
const closeModal = document.querySelector(".close");

// open the modal
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function modalwrite(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// set the local storage
function setLibrary() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function getData() {
  if (!localStorage.myLibrary) {
    displayBook();
  } else {
    let data = localStorage.getItem("myLibrary");
    data = JSON.parse(data);
    myLibrary = data;
    displayBook();
  }
}

getData();
