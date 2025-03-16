// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let campoLista = document.querySelector('#listaAmigos');
function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    if (amigo.value == ''){
        alert('Por favor, ingresa un nombre valido.');
    }else {
        nombres.push(amigo.value);
        campoLista.innerHTML += amigo.value + '<br>';
        amigo.value = '';
        amigo.focus();
    }
    return;
}

function sortearAmigo(){
    if(nombres.length == 0){
        alert('No hay amigos');
        return;
    }
    const numeroAleatorio = Math.floor(Math.random()*nombres.length);
    
    const resultado = document.querySelector('#resultado');
    campoLista.innerHTML = ''
    resultado.innerHTML = 'El amigo secreto sorteado es: ' + nombres[numeroAleatorio];
}