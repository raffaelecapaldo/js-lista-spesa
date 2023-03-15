const shoppingBox = document.getElementById("shopping-list")
const shoppingList = ["pasta", "uova", "gelato al limone", "tiramisù", "peperoni"]
const addProduct = document.getElementById("add-product")
const removeProduct = document.getElementById("remove-product");
const product = document.getElementById("product");
const nProduct = document.getElementById("n-product");




function scriviLista() {
    let counter = 0; //contatore
    while (counter < shoppingList.length) { //finché contatore è minore della quantità dell'array, esegui
        shoppingBox.innerHTML += `<li class="list-group-item">${shoppingList[counter]} </li>`//scrivi li con testo elemento array del ciclo attuale
        counter++;//incrementa contatore
    }
}

function addAProduct () {
    shoppingList.push(product.value);//pusha valore input product nell'array
    shoppingBox.innerHTML = "";//cancella la lista
    scriviLista();//riscrivila col nuovo array
}

function removeAProduct () {
    shoppingList.splice(nProduct.value - 1, 1)// rimuovi un elemento partendo dall'indice scelto dall'utente (la sua lista parte da 1, quindi - 1)
    shoppingBox.innerHTML = "";//cancella la lista
    scriviLista();//riscrivila col nuovo array

    
}

scriviLista();
addProduct.addEventListener("click", addAProduct);
removeProduct.addEventListener("click", removeAProduct);