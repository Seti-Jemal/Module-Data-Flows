const titleInputEl = document.getElementById("title");
const authorInputEl = document.getElementById("author");
const pagesInputEl = document.getElementById("pages");
const checkInputEl = document.getElementById("check");
const tableBodyEl = document.getElementById("table-body");
const messageEl = document.getElementById("message");

const myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Quran", "Revealed to Prophet Muhammad", 604, true);

    const book2 = new Book(
      "A Thousand Splendid Suns",
      "Khaled Hosseini",
      371,
      true
    );

    const book3 = new Book("Harry Potter", "J.K. Rowling", 223, true);

    const book4 = new Book("This Is How You Heal", "Brianna Wiest", 600, true);

    myLibrary.push(book1, book2, book3, book4);
  }
}

function showMessage(text) {
  messageEl.textContent = text;
  messageEl.style.display = "block";

  setTimeout(function () {
    messageEl.textContent = "";
    messageEl.style.display = "none";
  }, 2500);
}

window.submit = function submit() {
  const title = titleInputEl.value.trim();
  const author = authorInputEl.value.trim();
  const pagesValue = pagesInputEl.value.trim();
  const hasReadBook = checkInputEl.checked;

  if (title === "" || author === "" || pagesValue === "") {
    alert("Please fill all fields!");
    return;
  }

  const pages = Number(pagesValue);

  if (Number.isNaN(pages) || pages < 1) {
    alert("Pages must be a number greater than 0.");
    return;
  }

  const book = new Book(title, author, pages, hasReadBook);
  myLibrary.push(book);

  render();

  titleInputEl.value = "";
  authorInputEl.value = "";
  pagesInputEl.value = "";
  checkInputEl.checked = false;
};

function render() {
  tableBodyEl.textContent = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const rowEl = document.createElement("tr");

    const titleCellEl = document.createElement("td");
    titleCellEl.textContent = book.title;

    const authorCellEl = document.createElement("td");
    authorCellEl.textContent = book.author;

    const pagesCellEl = document.createElement("td");
    pagesCellEl.textContent = book.pages;

    const readCellEl = document.createElement("td");
    const readButtonEl = document.createElement("button");
    readButtonEl.className = "btn btn-success";
    readButtonEl.textContent = book.check ? "Yes" : "No";

    readButtonEl.addEventListener("click", function () {
      book.check = !book.check;
      render();
    });

    readCellEl.appendChild(readButtonEl);

    const deleteCellEl = document.createElement("td");
    const deleteButtonEl = document.createElement("button");
    deleteButtonEl.className = "btn btn-warning";
    deleteButtonEl.textContent = "Delete";

    deleteButtonEl.addEventListener("click", function () {
      const deletedTitle = book.title;
      myLibrary.splice(i, 1);
      render();
      showMessage('You deleted "' + deletedTitle + '".');
    });

    deleteCellEl.appendChild(deleteButtonEl);

    rowEl.appendChild(titleCellEl);
    rowEl.appendChild(authorCellEl);
    rowEl.appendChild(pagesCellEl);
    rowEl.appendChild(readCellEl);
    rowEl.appendChild(deleteCellEl);

    tableBodyEl.appendChild(rowEl);
  }
}
