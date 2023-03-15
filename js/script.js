const shoppingBox = document.getElementById("shopping-list")
const shoppingList = ["pasta", "uova", "gelato al limone", "tiramisù", "peperoni"]
const addProduct = document.getElementById("add-product");


function scriviLista() {
    let counter = 0; //contatore
    while (counter < shoppingList.length) { //finché contatore è minore della quantità dell'array, esegui
        shoppingBox.innerHTML += `<li class="list-group-item">${shoppingList[counter]}</li>`//scrivi li con testo elemento array del ciclo attuale
        counter++;//incrementa contatore
    }
}

scriviLista();
const product = document.getElementById("product");
addProduct.addEventListener("click", function (){
shoppingList.push(product.value);//pusha valore input product nell'array
shoppingBox.innerHTML = "";//cancella la lista
scriviLista();//riscrivila col nuovo array
})