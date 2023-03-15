const shoppingBox = document.getElementById("shopping-list")
const shoppingList = ["manzo", "salmone", "arachidi", "pollo"]

function scriviLista() {
    let counter = 0; //contatore
    while (counter < shoppingList.length) { //finché contatore è minore della quantità dell'array, esegui
        shoppingBox.innerHTML += `<li class="list-group-item">${shoppingList[counter]}</li>`//scrivi li con testo elemento array del ciclo attuale
        counter++;//incrementa contatore
    }
}

scriviLista();