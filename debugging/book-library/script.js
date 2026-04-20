const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkInput = document.getElementById("check");

const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 310, true),
  new Book("Harry Potter", "J.K. Rowling", 223, false),
];

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function submit() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();
  const check = checkInput.checked;

  if (title === "" || author === "" || pages === "") {
    alert("Please fill all fields!");
    return;
  }

  const book = new Book(title, author, Number(pages), check);
  myLibrary.push(book);

  render();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  checkInput.checked = false;
}

function render() {
  const tableBody = document.getElementById("table-body");

  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = myLibrary[i].title;

    const authorCell = document.createElement("td");
    authorCell.textContent = myLibrary[i].author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = myLibrary[i].pages;

    const readCell = document.createElement("td");
    const readButton = document.createElement("button");
    readButton.className = "btn btn-success";
    readButton.textContent = myLibrary[i].check ? "Yes" : "No";

    readButton.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    readCell.appendChild(readButton);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-warning";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      const deletedTitle = myLibrary[i].title;
      myLibrary.splice(i, 1);
      render();
      alert("You've deleted title: " + deletedTitle);
    });

    deleteCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  }
}

render();
