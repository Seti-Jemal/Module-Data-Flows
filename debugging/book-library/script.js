// Get input elements
const titleInputEl = document.getElementById("title");
const authorInputEl = document.getElementById("author");
const pagesInputEl = document.getElementById("pages");
const checkInputEl = document.getElementById("check");

// Get table and message
const tableBodyEl = document.getElementById("table-body");
const messageEl = document.getElementById("message");

// Store books
const myLibrary = [];

// Load books when page loads
window.addEventListener("load", function () {
  populateStorage();
  render();
});

// Book constructor
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// Default books
function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(
      new Book("Quran", "Revealed to Prophet Muhammad", 604, true),
      new Book("A Thousand Splendid Suns", "Khaled Hosseini", 371, true),
      new Book("Harry Potter", "J.K. Rowling", 223, true),
      new Book("This Is How You Heal", "Brianna Wiest", 600, true)
    );
  }
}

// Show message
function showMessage(text, color = "green") {
  messageEl.textContent = text;
  messageEl.style.display = "block";
  messageEl.style.color = color;

  setTimeout(function () {
    messageEl.textContent = "";
    messageEl.style.display = "none";
  }, 2000);
}

// Add new book
window.submit = function () {
  const title = titleInputEl.value.trim();
  const author = authorInputEl.value.trim();
  const pagesValue = pagesInputEl.value.trim();
  const hasRead = checkInputEl.checked;

  // Validate inputs
  if (title === "" || author === "" || pagesValue === "") {
    showMessage("Please fill all fields!", "red");
    return;
  }

  const pages = Number(pagesValue);

  if (Number.isNaN(pages) || pages < 1) {
    showMessage("Pages must be a valid number!", "red");
    return;
  }

  // Add book
  const book = new Book(title, author, pages, hasRead);
  myLibrary.push(book);

  render();
  showMessage(`Added "${title}"`);

  // Clear inputs
  titleInputEl.value = "";
  authorInputEl.value = "";
  pagesInputEl.value = "";
  checkInputEl.checked = false;
};

// Render books
function render() {
  tableBodyEl.textContent = "";

  myLibrary.forEach(function (book, index) {
    const row = document.createElement("tr");

    // Title
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    // Author
    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    // Pages
    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    // Read button
    const readCell = document.createElement("td");
    const readBtn = document.createElement("button");

    readBtn.className = book.check ? "btn btn-success" : "btn btn-secondary";

    readBtn.textContent = book.check ? "Yes" : "No";

    readBtn.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    readCell.appendChild(readBtn);

    // Delete button
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");

    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      const deletedTitle = book.title;

      myLibrary.splice(index, 1);
      render();

      showMessage(`Deleted "${deletedTitle}"`, "red");
    });

    deleteCell.appendChild(deleteBtn);

    // Add cells to row
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteCell);

    tableBodyEl.appendChild(row);
  });
}
