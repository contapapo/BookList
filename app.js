//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI(){};

UI.prototype.addBookToList = function(book){
    //Create tr
const list = document.querySelector('#book-list');
const row = document.createElement('tr');
row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
`;

list.appendChild(row);
}

UI.prototype.clearForm = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
};

//Event listener
document.querySelector('#book-form').addEventListener('submit', function(e){
    
const title = document.querySelector('#title').value,
      author = document.querySelector('#author').value,
      isbn = document.querySelector('#isbn').value;

const book = new Book(title, author, isbn);
const ui = new UI();

//add book
ui.addBookToList(book);

//clear form
ui.clearForm();


    e.preventDefault();
});