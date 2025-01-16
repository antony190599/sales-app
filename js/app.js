const $formProduct = document.getElementById("product-form");
const $formCustomer = document.getElementById("customer-form");

let productsArray = [];
let customerArray = [];

/** Manejar la creación de un nuevo producto */
function handleNewProduct(event) {
    event.preventDefault();
    const form = event.target;
    const product = new Product(
        form.productName.value,
        parseFloat(form.productPrice.value),
        parseInt(form.productStock.value)
    );
    productsArray.push(product);
    const list = document.getElementById("products-list");
    list.innerHTML = "";
    productsArray.forEach(element => list.appendChild(element.renderUI()));
    form.reset();
}

/** Manejar la creación de un nuevo cliente */
function handleNewCustomer(event) {
    event.preventDefault();
    const form = event.target;
    const customer = new Customer(
        form.customerName.value,
        form.customerEmail.value
    );
    customerArray.push(customer);
    const list = document.getElementById("customers-list");
    list.innerHTML = "";
    customerArray.forEach(element => list.appendChild(element.renderUI()));
    form.reset();
}

/** Vincular eventos de los formularios */
$formProduct.addEventListener("submit", handleNewProduct);
$formCustomer.addEventListener("submit", handleNewCustomer);
