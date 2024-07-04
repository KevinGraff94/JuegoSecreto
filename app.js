
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElement(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElement('p',`Adivinaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        habilitarBoton();
    
    //El usuario no acertó
    }else if(numeroDeUsuario < numeroSecreto){
        asignarTextoElement('p','El número es mayor');
    }else{
        asignarTextoElement('p','El número es menor');
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElement('p','Ya se sortearon todos los números posibles')
    //Si el numero generado está incluido en la lista
    }else if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }

}

function condicionesIniciales (){
    asignarTextoElement('h1', 'Juego del número secreto');
    asignarTextoElement('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function habilitarBoton(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Inicializar el número de intentos
    //Generar el número aleatorio
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
