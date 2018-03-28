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

UI.prototype.showMsg = function(msg, className){
    //Create div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('#book-form');
    //Insert
    container.insertBefore(div, form);

    //Timeout
    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 3000);
}

UI.prototype.clearForm = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
};

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
};

//Event listener
document.querySelector('#book-form').addEventListener('submit', function(e){
    
const title = document.querySelector('#title').value,
      author = document.querySelector('#author').value,
      isbn = document.querySelector('#isbn').value;

const book = new Book(title, author, isbn);
const ui = new UI();

//Validate
if(title === '' || author === '' || isbn === ''){
    //Error
    ui.showMsg('Please fill all fields', 'error');
}else{
    //add book
    ui.addBookToList(book);
    ui.showMsg('Book added', 'success');

    //clear form
    ui.clearForm();
}

    e.preventDefault();
});

//Event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
    const ui = new UI;
    ui.deleteBook(e.target);
    ui.showMsg('Book removed', 'success');

    e.preventDefault();
});