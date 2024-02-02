let numeroSecreto;
console.log(numeroSecreto);
let intentos;
let listaNumerosSorteados=[];
let numeroMaximo=10;
let maximosIntentos=3;

const asignarTexto=(elemento, texto)=>{
    
    let titulo=document.querySelector(elemento);

    titulo.innerHTML=texto;

    return;

}

const verificarIntento = ()=>{
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos)

    if(numeroDeUsuario=== numeroSecreto){
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos === 1 ) ? 'intento' : 'intentos'}, felicidades`);
        // document.getElementById('reiniciar').removeAttribute('disabled');
        // document.getElementById('intentar').setAttribute('disabled', 'true');
        BotonNuevoJuego();
        
        
    }else{

        //el usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTexto('p', 'El número secreto es menor')
        }
        else{
            asignarTexto('p', 'El número secreto es mayor')
        }
        intentos++;
        if(intentos > maximosIntentos){
            asignarTexto('p', `Llegaste al número máximo de intentos, el número es ${numeroSecreto}`);
            // document.getElementById('reiniciar').removeAttribute('disabled');
            // document.getElementById('intentar').setAttribute('disabled', 'true');
            BotonNuevoJuego();
        }
        Limpiar();
    }
    return;
}

function Limpiar(){
   document.querySelector('#valorUsuario').value='';
}

function generarNumero(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p', 'ya se sortearon todos los números posibles');


    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){

        return generarNumero();


        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

 
    
}

function condicionesIniciales(){
    
   
    asignarTexto('h1', 'Juego del número secreto');
    
    asignarTexto('p', `Indica un número del 1 al ${numeroMaximo}! Tienes ${maximosIntentos} ${(maximosIntentos === 1 ) ? 'intento' : 'intentos'}`);
    
    //Generar el número aleatorio
    numeroSecreto=generarNumero();
    console.log(numeroSecreto)
    //inicializar el número de intentos

    intentos=1;
    console.log({intentos})

  

    
}

function reiniciarJuego(){
    //limpiar caja
    Limpiar();
    //indicar mensaje de intervalo de números
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
   
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

  
    document.getElementById('intentar').removeAttribute('disabled');


   
}

function BotonNuevoJuego(){
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intentar').setAttribute('disabled', 'true');
}

condicionesIniciales();


// Agregar el evento keyup para la tecla Enter en el campo de entrada
document.getElementById('valorUsuario').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        verificarIntento();
    }});






// function Saludar(nombre){
    
//     console.log(`hola, ${nombre}`)
// }

// Saludar('miguel angel');

// function Doblar(numero){
    
    
//     return  numero*2;
// }


// console.log(Doblar(0))

// function Promedio(numero1, numero2, numero3){
//     return (numero1+numero2+numero3)/3;
// }

// let resultado=Promedio(1,2,3);
// console.log(resultado)

// function numeroMayor(a,b){
//     if(a>b){
//         return a
//     }else if (b>a){
//         return b
//     }else{
//         return 'son iguales'
//     }

// }

// let resultado=numeroMayor(7,7)
// console.log(resultado)


// function cuadrado(a){
//     return a*a;

// }

// let resultado=cuadrado(7);
// console.log(resultado)