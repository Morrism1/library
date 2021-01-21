const submitBtn = document.querySelector('.submit');

let myLibrary = [
  {
    title: 'Been through Hell',
    author: 'John Smith',
    pages: 220,
    read: 'No',
  },
  {
    title: 'Good life',
    author: 'Jane Smith',
    pages: 120,
    read: 'No',
  },
];

function validateForm() {
  const x = document.forms.form.title.value;
  const y = document.forms.form.author.value;
  const z = document.forms.form.pages.value;
  const spanMessage = document.querySelector('.message');
  if (x === '') {
    spanMessage.innerHTML = 'Please fill the Tittle field';
    spanMessage.classList.add('alert', 'alert-danger');
    return false;
  }
  if (y === '') {
    spanMessage.innerHTML = 'Please fill the Author field';
    spanMessage.classList.add('alert', 'alert-danger');

    return false;
  }
  if (z === '' || z <= 0) {
    spanMessage.innerHTML = 'Please fill the Number field the right way!';
    spanMessage.classList.add('alert', 'alert-danger');

    return false;
  }
  return true;
}
function setLibrary() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}
const heroPlaceholder = document.querySelector('#hero-template');

function changeReadStatus(read) {
  if (read.textContent === 'Yes') {
    read.textContent = 'No';
    read.classList.remove('btn-primary');
    read.classList.add('btn-warning');
  } else {
    read.textContent = 'Yes';
    read.classList.remove('btn-primary', 'btn-warning');
    read.classList.add('btn-success');
  }
}

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// const BookFactory = (title, author, pages, read) => ({
//   title, author, pages, read,
// });

class BookClass {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(e) {
  e.preventDefault();

  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  const pagesInput = document.querySelector('#pages').value;
  const readInput = document.querySelector('#read').value;
  const newBook = new BookClass(titleInput, authorInput, pagesInput, readInput);

  if (validateForm()) {
    myLibrary.push(newBook);
    setLibrary();

    window.location.reload();
  }
}

function displayBook() {
  const list = document.createElement('ul');
  list.classList.add('list', 'hero-list');

  const template = document.querySelector('#hero-template');
  function deleteCard(i) {
    myLibrary.splice(myLibrary[i], 1);
  }

  for (let i = 0; i < myLibrary.length; i += 1) {
    const heroCard = document.importNode(template.content, true);
    const removeButton = heroCard.querySelector('.remove');
    const readStatus = heroCard.querySelector('.read');
    const bookCard = heroCard.querySelector('li');
    bookCard.setAttribute('data-num', i);
    heroCard.querySelector('.card-title').textContent = myLibrary[i].title;
    heroCard.querySelector('.card-text').textContent = myLibrary[i].author;
    heroCard.querySelector('.card-pages').textContent = myLibrary[i].pages;
    removeButton.textContent = 'Remove book';
    removeButton.addEventListener('click', () => {
      list.removeChild(bookCard);
      deleteCard(i);
      setLibrary();
    });
    readStatus.textContent = myLibrary[i].read;
    readStatus.addEventListener('click', () => {
      changeReadStatus(readStatus);
    });

    list.appendChild(heroCard);
    setLibrary();
  }

  heroPlaceholder.replaceWith(list);
}

const modal = document.querySelector('#myModal');

const modalBtn = document.querySelector('#myBtn');
const closeModal = document.querySelector('.close');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = function modalwrite(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

function getData() {
  if (!localStorage.myLibrary) {
    displayBook();
  } else {
    let data = localStorage.getItem('myLibrary');
    data = JSON.parse(data);
    myLibrary = data;
    displayBook();
  }
}
submitBtn.addEventListener('click', addBookToLibrary);
getData();
