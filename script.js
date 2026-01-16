// arrays
let books = [];
let history = [];

// elements
let addBtn = document.getElementById("addBtn");
let bookList = document.getElementById("bookList");
let historyList = document.getElementById("historyList");

// ADD BOOK BUTTON CLICK
addBtn.addEventListener("click", function () {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;

    if (title === "" || author === "") {
        alert("Please enter book name and author");
        return;
    }

    let book = {
        title: title,
        author: author,
        category: category
    };

    books.push(book);

    // clear inputs (fade feel)
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";

    displayBooks();
});

// DISPLAY BOOKS
function displayBooks() {
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${book.title} - ${book.author} (${book.category})
            <button onclick="borrowBook(${index})">Borrow</button>
        `;
        bookList.appendChild(li);
    });
}

// BORROW BOOK
function borrowBook(index) {
    let borrowedBook = books.splice(index, 1)[0];
    history.push(borrowedBook);

    displayBooks();
    displayHistory();
}

// DISPLAY HISTORY
function displayHistory() {
    historyList.innerHTML = "";

    history.forEach(book => {
        let li = document.createElement("li");
        li.textContent = `${book.title} - ${book.author} (${book.category})`;
        historyList.appendChild(li);
    });
}
