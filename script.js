// Increase button size on hover
function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
  }
  
// Decrease button size after hover
function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}



let myLibrary = [];


// Object constructor for making book objects

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, read: ${read}`
    }
}



function addNewBook() {
// Call the object constructor function
// Call new Book and use userinput 
// Create empty variables for title,author, etc
const newBook = new Book("lotr", "JR", "500", "no");
const newBook1 = new Book("lotr", "JR", "500", "no");
const newBook2 = new Book("lotr", "JR", "500", "no");

myLibrary.push(newBook);
myLibrary.push(newBook1);
myLibrary.push(newBook2);
//console.table(myLibrary);
addBookToShelf()
}

// Function to display books in myLibrary
const bookshelf = document.querySelector(".bookshelf");

function addBookToShelf() {
  // Loop through myLibrary array 
  myLibrary.forEach(function(item){
    // Create new div with binding
    let newBookNode = document.createElement("div");
    // newBookNode.textContent = item.title;
    // newBookNode.textContent += item.author;
    // Assign book content to new div
    let bookTitle = document.createElement("p");
    bookTitle.textContent = "Title:" + item.title;

    newBookNode.appendChild(bookTitle);
    bookshelf.appendChild(newBookNode);
    
  }

  )};

addNewBook();
