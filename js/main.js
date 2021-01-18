let myLibrary = [
  {
    title: "Been through Hell",
    author: "John Smith",
    pages: 220,
    read: "Sure Soon",
  },
  {
    title: "Good life",
    author: "Jane Smith",
    pages: 120,
    read: "Well Well",
  },
];

const heroPlaceholder = document.querySelector("#hero-template");
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
  const list = document.createElement("ul");
  list.classList.add("list", "hero-list");

  const template = document.querySelector("#hero-template");

  for (let i = 0; i < myLibrary.length; i++) {
    const heroCard = document.importNode(template.content, true);
    const removeButton = heroCard.querySelector("button");
    heroCard.querySelector("li").setAttribute("data-num", i);
    heroCard.querySelector(".card-title").textContent = myLibrary[i].title;
    heroCard.querySelector(".card-text").textContent = myLibrary[i].author;
    removeButton.textContent = "Remove book";
    removeButton.addEventListener("click", () => {
      document.querySelector(`[data-num="${i}"]`).remove();
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
