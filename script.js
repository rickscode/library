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

// Call the object constructor function
const book = new Book("lotr", "JR", "500", "no");
// Log the function inside the object constructer
console.log(book.info());