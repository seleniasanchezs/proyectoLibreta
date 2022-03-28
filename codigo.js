var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('enviandoFormulario...');
    var mensajeError =[];

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('ingresa tu nombre');
    }

    if(password.value === null || password.value == ''){
        mensajeError.push('ingresa tu password');
    }

    error.innerHTML = mensajeError.join(',');

    return false;
}