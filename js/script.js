const aPagar = document.getElementById('aPagar');
const totAPag = 'Total a Pagar: $ ';
// console.log(inputCantidad);
// console.log(inputCategoria);
// console.log(apagar2);


const datos = {
    nombre: '',
    apellido: '',
    email: '',
    categoria: '',
    cantidad: ''
}

const nombre = document.getElementById('inputNombre');
const apellido = document.getElementById('inputApellido');
const email = document.getElementById('inputEmail');
const cantidad = document.getElementById('inputCantidad');
const categoria = document.getElementById('inputCategoria');
const formulario = document.querySelector('.formulario');
const contador = document.createElement('P');

//email.disabled= true;
//mensaje.disabled = true;

formulario.appendChild(contador); 

// let apagar2 = document.getElementById('aPagar');
nombre.addEventListener('input', function (event){
    datos.nombre = event.target.value;
});
apellido.addEventListener('input', function (event){
    datos.apellido = event.target.value;
});
email.addEventListener('input', function (event){
    datos.email = event.target.value;
});
cantidad.addEventListener('input', function (event){
    datos.cantidad = event.target.value;
    const {cantidad} = datos;
    console.log(cantidad);
});
categoria.addEventListener('input', function (event){
    datos.categoria = event.target.value;
    const {categoria} = datos;
    console.log(categoria);
});



formulario.addEventListener('submit', function(event){
    var totalNuevo = 0;
    event.preventDefault();
    var cod = 0;
    //aca se valida el formulario
    const {nombre, apellido, email, categoria, cantidad} = datos; //destructuring

    console.log(categoria);
    console.log(cantidad);
    cod = numCat(categoria);
    totalNuevo = calcPagoTot(cod, cantidad);
    nuevoTotal(aPagar, totalNuevo);
    /*
    if(mensaje.length>=20){
        mostrarMensaje("El mensaje es demasiado largo.", true);
        return;
    }

    if(nombre === '' || email ==='' || mensaje ===''){
        mostrarMensaje("Alguno de los campos no se completó.", true);
        return;
    }

    //Alerta de succes formulario
    mostrarMensaje("Los datos se ingresaron correctamente.");
    */

});

function numCat(seleccion){
    var codigo = 0;
    switch (seleccion) {
        case "Estudiante":
            console.log("es estudiante cod1");
            codigo = 0.2;
            break;
        case "Trainee":
            console.log("es trainee cod2");
            codigo = 0.5;
            break;
        case "Junior":
            console.log("es junior cod3");
            codigo = 0.85;
            break;
    }
    return codigo;
};
function calcPagoTot(codigo2, cant){
    return 200*cant*codigo2;
};
function nuevoTotal(aPagar, totalNuevo){
    aPagar.textContent = totAPag + totalNuevo;
}