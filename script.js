const showFormButton = document.getElementById("show-form-button");  
const modal = document.getElementById("myModal"); // references parent of the entire form content. allows it to be manipulated by changing its display when buttons are clicked
const closeFormButton = document.getElementById("close-form-button");


showFormButton.addEventListener("click", () => {
    modal.style.display = "block"; //when plus button is clicked changes modal display from none to block so it appears
});

closeFormButton.addEventListener("click", () => {
    modal.style.display = "none"; // changes modal display to none when x is clicked
});



const myLibrary= []; //an array to store book objects

// Function to handle form submission
function Book(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    

    // Get values from form inputs
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    
    // Create object called book with form values
    let book = {
        title: title,
        author: author,
        pages: pages,
        read: read
    };
    
    // Add book object to library array
    myLibrary.push(book);
    
    // Reset form to clear input fields when submit is clicked
    event.target.reset();
}

// Function to display books on the page
function addBookToLibrary() {

    // Get the container element where book cards will be displayed
    let container = document.getElementById("book-cards");
    container.innerHTML = '';
    
    //  loop goes through the book objects in library
    for(let i = 0; i < myLibrary.length; i++) {
        // Access each book object and assign it to the variable book
        let book = myLibrary[i];
        
        // Create a div element for each book (card)
        let card = document.createElement('div');
        card.className = 'book-card';
        
        // Add book details to the card
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        `;
        
        // Add card to the container
        container.appendChild(card);
    }
}

// event listener for the form submit event
document.querySelector('form').addEventListener('submit', function(event) {
    // Call the Book function to handle form submission
    Book(event);

     // Call function to display book on the page
    addBookToLibrary();
});


