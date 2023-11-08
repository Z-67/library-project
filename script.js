const showFormButton = document.getElementById("show-form-button");  
const modal = document.getElementById("myModal"); // references parent of the entire form content. allows it to be manipulated by changing its display when buttons are clicked
const closeFormButton = document.getElementById("close-form-button");
const form = document.getElementById(".modal-content form");
const bookCardsContainer = document.getElementById("book-cards");

showFormButton.addEventListener("click", () => {
    modal.style.display = "block"; //when plus button is clicked changes modal display from none to block so it appears
});

closeFormButton.addEventListener("click", () => {
    modal.style.display = "none"; // changes modal display to none when x is clicked
});


