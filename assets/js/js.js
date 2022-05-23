
// import { getProducts } from "./crud";

function printAllProducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('AllProducts-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < products.length; i++) {
        html += `<div class="shopping-cart">
                        <figure>
                    <div>
                        <a href="./Product-Viewport.html"> 
                            <img src="${products[i].image}" alt="bike">
                        </a>
                    </div>                  
                        </figure>
                    <p class="Title">${products[i].name}</p>
                    <p class="Sub-title">$ ${products[i].price}</p>
                    <div>
                        <button onclick="deleteProduct(${products[i].id})" class="icon1-button">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editProduct(${products[i].id}) " class="icon2-button">
                            <i class="fa-solid fa-pen"></i>
                        </button>   
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

function printAllProducts2(products) {
    // Identificar el contenedor
    const container = document.getElementById('Recomended-Products');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < products.length; i++) {
        html += `<div class="shopping-cart">
                        <figure>
                    <div>
                    <img src="${products[i].image}" alt="bike">
                    </div>                  
                        </figure>
                            <p class="shopping-card-title">${products[i].name}</p>
                            <p>$ ${products[i].price}</p>
                    <div>
                        <button onclick="deleteProduct(${products[i].id})" class="icon1-button">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button onclick="editProduct(${products[i].id})" class="icon2-button">
                            <i class="fa-solid fa-pen"></i>
                        </button>   
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

function printBigProducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('BigProduct-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < products.length; i++) {
             html += `<div class="grid-2">
                                
                        <div class="mitad-1">
                            <img src="${products[i].image}" alt="">
                        </div>

                        <div class="mitad-2">
                            <p class="Title padding-1">
                                ${products[i].name}
                            </p>

                            <p class="Title Negrita padding-1">
                                ${products[i].price}
                            </p>

                            <p class="padding-1">
                            Hoodles Oficiales de Academlo
                            </p>

                            <div class="padding-1">
                                <p class="Sub-title">
                                    Colores
                                </p>
                                <div class="colum-6">
                                    <div class="colum-6">
                                        <img src="${products[i].image}" alt="">
                                    </div>
                                    <div class="colum-6">
                                        <img src="${products[i].image}" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="tallas-container padding-1">
                                <input type="radio" class="btn-check" name="options-outlined" id="talla-s" autocomplete="off">
                                <label class="btn btn-outline-danger" for="talla-s">S</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="talla-m" autocomplete="off">
                                <label class="btn btn-outline-danger" for="talla-m">M</label>
                                
                                <input type="radio" class="btn-check" name="options-outlined" id="talla-l" autocomplete="off">
                                <label class="btn btn-outline-danger" for="talla-l">L</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="talla-xl" autocomplete="off">
                                <label class="btn btn-outline-danger" for="talla-xl">XL</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="talla-2xl" autocomplete="off">
                                <label class="btn btn-outline-danger" for="talla-2xl">2XL</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="talla-3xl" autocomplete="off">
                                <label class="btn btn-outline-danger" for="talla-3xl">3XL</label>
                            </div>
                            
                        </div>

                    </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

function printLitteProducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('offcanvas-body');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < products.length; i++) {
        html += `<div class="carrito row">
        <div class="col-4">
            <img src="${products[i].image}" class="card-img-top" alt="...">
        </div>
        <div class="col-8">
            <h5 class="card-title">${products[i].name}</h5>
            <p>${products[i].price}</p>
            <p>Talla: S</p>
        </div>
        <div class="col-4">

        </div>
        <div class="col-8 row">   
            <div class="plus col-2">
                <button>-</button>
            </div>
            <div class="cantidad col-2">
                <button>1</button>
            </div>
            <div class="plus col-2">
                <button>+</button>
            </div>
            <div class="cantidad col-2">
                <button></button>
            </div>
            <div class=" col-2">
                <button><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    </div>
    <hr>
    <div class="row  margin-1">
        <div class="col-6"><p>Subtotal:</p></div>
        <div class="col-6 card-price">${products[i].price}</div>
    </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

const baseURL='https://e-commerce-api-academlo.herokuapp.com/api'
let editingID = null;

function getAllProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const products = response.data;
            printAllProducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function getAllProducts2() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const products = response.data;
            printAllProducts2(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function getBigProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const products = response.data;
            printBigProducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function getLitteProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const products = response.data;
            printLitteProducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function createProduct() {
    const newProduct = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image-url').value
    }

    axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', newProduct)
        .then(function (response) {
            alert('Se creo el producto correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo crear el producto');
            console.log(error);
        })
}


function deleteProduct(id) {
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return
    }
    //https://e-commerce-api-academlo.herokuapp.com/api/products/1
    axios.delete(`${baseURL}/products/${id}`)
        .then(function () {
            alert('La tarea se eliminó correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo eliminar la tarea');
        })
}

function editProduct(id) {
    axios.get(`${baseURL}/products/${id}`)
        .then(function (response) {
            editingID = id;
            const product =  response.data;
            document.getElementById('name').value = product.name;
            document.getElementById('price').value = product.price;
            document.getElementById('image-url').value = product.image;
        })
        .catch(function (error) {
            alert('No se pudo cargar la tarea');
        })
}

function updateProduct() {
    const productEdited = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image-url').value
    }

    axios.put(`${baseURL}/products/${editingID}`, productEdited)
        .then(function (response) {
            alert('Se editó la tarea correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo editar la tarea');
        })
}


getAllProducts();
getAllProducts2();
getBigProducts();
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct