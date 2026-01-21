// ===============================
// Library storage
// ===============================
const myLibrary = [];


// ===============================
// Book constructor
// ===============================
function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}


// ===============================
// Prototype method
// ===============================
Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};


// ===============================
// Add book to library
// ===============================
function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}


// ===============================
// DOM elements
// ===============================
const libraryContainer = document.getElementById("library");
const dialog = document.getElementById("book-dialog");
const newBookBtn = document.getElementById("new-book-btn");
const closeDialogBtn = document.getElementById("close-dialog");
const form = document.getElementById("book-form");


// ===============================
// Display library
// ===============================
function displayLibrary() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = book.id;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.isRead ? "Read" : "Not read"}</p>
      <button class="toggle-read">Toggle Read</button>
      <button class="remove-book">Remove</button>
    `;

    libraryContainer.appendChild(bookCard);
  });
}


// ===============================
// Dialog controls
// ===============================
newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});


// ===============================
// Form submission
// ===============================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const isRead = form.isRead.checked;

  addBookToLibrary(title, author, pages, isRead);
  displayLibrary();

  form.reset();
  dialog.close();
});


// ===============================
// Card button actions (event delegation)
// ===============================
libraryContainer.addEventListener("click", (e) => {
  const bookId = e.target.parentElement.dataset.id;

  if (e.target.classList.contains("remove-book")) {
    const index = myLibrary.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      myLibrary.splice(index, 1);
      displayLibrary();
    }
  }

  if (e.target.classList.contains("toggle-read")) {
    const book = myLibrary.find((book) => book.id === bookId);
    if (book) {
      book.toggleRead();
      displayLibrary();
    }
  }
});


// ===============================
// Test data
// ===============================
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Deep Work", "Cal Newport", 296, false);
displayLibrary();
