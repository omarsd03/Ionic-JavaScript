const nombreProducto = document.querySelector('#nombreProducto');
const precioProducto = document.querySelector('#precioProducto');
const btnGuardar = document.querySelector('#btnGuardar');
const btnLimpiar = document.querySelector('#btnLimpiar');
const listaProductos = document.querySelector('#listaProductos');
const totalOutput = document.querySelector('#total');

let total = 0;

const crearNuevoProducto = (nombre, precio) => {

    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-content');
    newProductItem.textContent = nombre + ': $' + precio;
    ionCard.appendChild(newProductItem);
    listaProductos.appendChild(ionCard);

}

const limpiarInputs = () => {
    nombreProducto.value = "";
    precioProducto.value = "";
}

const esVacio = str => !str.trim().length;

const mostrarAlerta = () => {

    const alerta = document.createElement('ion-alert');
    alerta.header = 'Datos Invalidos';
    alerta.subHeader = 'Por favor verifica tus inputs';
    alerta.message = 'Nombre o precio incorrectos';
    alerta.buttons = ['Ok'];

    document.body.appendChild(alerta);
    return alerta.present();

}
 
btnGuardar.addEventListener('click', () => {

    const nombre = nombreProducto.value;
    const precio = precioProducto.value;

    if (esVacio(nombre) || precio <= 0 || esVacio(precio)) {
        mostrarAlerta();
        return;
    }

    crearNuevoProducto(nombre, precio);
    total += +precio;
    totalOutput.textContent = total;
    limpiarInputs();

});

btnLimpiar.addEventListener('click', limpiarInputs);