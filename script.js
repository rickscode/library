const bookshelf = document.querySelector(".bookshelf");
// Binding for add book button node
const newBook = document.querySelector("#add");
// Binding for form bookParentNode node
const formContainer = document.querySelector(".form-container");
// Event listeners
newBook.addEventListener("click", inputForm);

// Increase button size on hover
function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}
  
// Decrease button size after hover
function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

// Dynamic form

function inputForm() {
        
   
        // Create new DOM node elements
        let popup = document.createElement("form");
        let titleInput = document.createElement("input");
        let authorInput = document.createElement("input");
        let pagesInput = document.createElement("input");
        let submit = document.createElement("button");
        let close = document.createElement("button");

        titleInput.id = "title";
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("placeholder", "TITLE");
        titleInput.setAttribute("name", "title");

        authorInput.id = "author";
        authorInput.setAttribute("type", "text");
        authorInput.setAttribute("placeholder", "AUTHOR");
        authorInput.setAttribute("name", "author");

        pagesInput.id = "pages";
        pagesInput.setAttribute("type", "number");
        pagesInput.setAttribute("placeholder", "PAGES READ");
        pagesInput.setAttribute("name", "pages");

        submit.id = "submit-button"
        submit.textContent = "ENTER";

        close.id = "close-button";
        close.textContent = "CLOSE";
        
        popup.id = "book-form";
        popup.appendChild(titleInput);
        popup.appendChild(authorInput);
        popup.appendChild(pagesInput);
        popup.appendChild(submit);
        popup.appendChild(close);
        formContainer.appendChild(popup);
      
}

let myLibrary = [];

// Object constructor for making book objects
class Book{
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
      return `${title} by ${author}, ${pages} pages, read: ${read}`
  }
  }
}

// Function to display books in myLibrary
function addBookToShelf() {
  
  // Create nodelist from myLibrary array 
  myLibrary.forEach(function(item){
    // Create new div element to hold book info
    let newBookNode = document.createElement("div");
    let bookCard = document.createElement("IMG");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let removeBook = document.createElement("button");
    removeBook.textContent = "REMOVE BOOK";
    removeBook.id = "remove-book";
    // removeBook.setAttribute("type", "radio");
    newBookNode.id = "book-item";
    
    // Assign tebookParentNodetcontent to new elements
    bookCard.setAttribute("src", "images/books.png"); 
    bookTitle.textContent = "Title:" + item.title;
    bookAuthor.textContent = "Author:" + item.author;
    bookPages.textContent = "Pages:" + item.pages;

    // Append child nodes too parent
    newBookNode.appendChild(bookCard);
    newBookNode.appendChild(bookTitle);
    newBookNode.appendChild(bookAuthor);
    newBookNode.appendChild(bookPages);
    newBookNode.appendChild(removeBook);
    bookshelf.appendChild(newBookNode);

    // Improve design of book cards
    
  }

)};

// create new book object from form

document.addEventListener("click",function(e){
  e.preventDefault();
  myLibrary = [];
  if(e.target.id == "submit-button") {
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, "no");
    myLibrary.push(newBook);
    addBookToShelf()
    closeForm();
    
   }
});

document.addEventListener("click",function(e){
  e.preventDefault();
  if(e.target.id == "close-button") {
    closeForm();
    
   }
});

// close imput form
function closeForm() {
  let shutForm = document.getElementById("book-form");
  shutForm.remove();
}

// remove book card
document.addEventListener("click",function(e){
  if(e.target.id == "remove-book") {
    let bookParentNode = e.target.parentElement;
    let bookNodeList = Array.from(bookParentNode.childNodes);
    bookNodeList.forEach((element) => {
    bookParentNode.removeChild(element);
  });
}
});

