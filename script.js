//selecting popupbox, popup-overlay, button
var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addPopupButton = document.getElementById("add-popup-button")

addPopupButton.addEventListener("click",function(){
    popupOverlay.style.display="block";
    popupBox.style.display="block";
})

//select cancel popup
var cancelPopup = document.getElementById("cancel-popup")
cancelPopup.addEventListener("click" , function(event){
    event.preventDefault()
    popupOverlay.style.display="none";
    popupBox.style.display="none";
})

//select container, add-book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitleInput = document.getElementById("book-title-input")
var bookAuthorInput = document.getElementById("book-author-input")
var bookDescriptionInput = document.getElementById("book-description-input")

addBook.addEventListener("click", function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class" , "book-container")
  div.innerHTML = `<h2>${bookTitleInput.value}</h2>
  <h5>${bookAuthorInput.value}</h5>
  <p>${bookDescriptionInput.value}</p>
         <button onclick="deleteBook(event)">Delete</button>`
  container.append(div)
  popupOverlay.style.display="none";
  popupBox.style.display="none";
})

function deleteBook(event){
event.target.parentElement.remove()
}
        