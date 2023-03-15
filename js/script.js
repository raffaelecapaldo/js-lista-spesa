/* Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzionea non dimenticare tutte le differenze implementative
che il ciclo while ci impone, in particolare alla variabile di indice.
*/

const shoppingBox = document.getElementById("shopping-list")
const shoppingList = ["pasta", "uova", "gelato al limone", "tiramisù", "peperoni"]
const addProduct = document.getElementById("add-product")
const removeProduct = document.getElementById("remove-product");
const product = document.getElementById("product");
const nProduct = document.getElementById("n-product");




function WriteList() {
    let counter = 0; //contatore
    while (counter < shoppingList.length) { //finché contatore è minore della quantità dell'array, esegui
        shoppingBox.innerHTML += `<li class="list-group-item">${shoppingList[counter]} </li>`//scrivi li con testo elemento array del ciclo attuale
        counter++;//incrementa contatore
    }
}

function addAProduct() {
    shoppingList.push(product.value);//pusha valore input product nell'array
    shoppingBox.innerHTML = "";//cancella la lista
    product.value = "" //svuota campo input
    WriteList();//riscrivila col nuovo array
}

function removeAProduct() {
    shoppingList.splice(nProduct.value - 1, 1)// rimuovi un elemento partendo dall'indice scelto dall'utente (la sua lista parte da 1, quindi - 1)
    shoppingBox.innerHTML = "";//cancella la lista
    nProduct.value = "" //svuota campo input
    WriteList();//riscrivila col nuovo array


}

WriteList();
addProduct.addEventListener("click", addAProduct);
removeProduct.addEventListener("click", removeAProduct);