let myLibrary = ["js","css", "java", "ruby"];
let addbutton= document.querySelector("button");
addbutton.addEventListener("click", addBookToLibrary);


function Book() {
  // the constructor...


}

function addBookToLibrary() {
  // do stuff here
  let book = document.getElementById("book").value;
  myLibrary.push(book);
  console.log(myLibrary);
}

 function displayBook()
 { 
for (let books in myLibrary)
{ 
    console.log(myLibrary[books]);
}
 }




