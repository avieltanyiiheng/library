const addBookButton = document.querySelector(".addBook");
const library = document.querySelector(".library");

addBookButton.addEventListener("click", function (e) {
  e.preventDefault();
});

addBookButton.addEventListener("click", addBookToLibrary);

let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// Add functionality into changing Read Status
Book.prototype.changeRead = function () {
  if (this.read === "Yes") {
    this.read = "No";
  } else {
    this.read = "Yes";
  }
};

function addBookToLibrary() {
  // Create obj and push to myLibrary
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);

  //   add to html
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookDiv = document.createElement("div"); // Create div
    bookDiv.classList.add("card"); // Add "Card" classname

    // Associate html with DOM Elements
    const author = document.createElement("p");
    author.textContent = `Author: ${myLibrary[i].author}`;

    const title = document.createElement("p");
    title.textContent = `Title: ${myLibrary[i].title}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${myLibrary[i].pages}`;

    const read = document.createElement("button");
    read.classList.add("readButton");
    // const readButton = document.querySelector(".readButton");
    // readButton.addEventListener("click", this.changeRead);
    read.textContent = `Read?: ${myLibrary[i].read}`;

    // Append data to card
    bookDiv.append(author, title, pages, read);

    // Append card to Library
    library.append(bookDiv);
  }

  //   Add functionality to all buttons
  const readButton = document.querySelectorAll(".readButton");
  readButton.forEach((button) => {
    button.addEventListener("click", function () {
      button.textContent === "Read?: yes"
        ? (button.textContent = "Read?: no")
        : (button.textContent = "Read?: yes");
    });
  });
}
