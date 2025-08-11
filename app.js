// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación.Aquí deberás desarrollar la lógica para resolver el problema.

let friends= [];
const elementoPadre = document.querySelector('ul');
const elementoli = document.getElementById('listaAmigos');

// funcion que ingresa un nombre al input y lo va ingresando a la lista de friends.
function agregarAmigo(){
    let ingresoName = document.getElementById('amigo').value;
    if(ingresoName == ''){
        alert('El campo esta vacío por favor ingresa un nombre');
    }else {
        friends.push(ingresoName); 
        limpiarCaja();
        mostrarLista()
        
    }
    return;
}

// Limpia el input despues de a ver ingresado un nombre
function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

// Funcion que crea una lista en el elemento ul para ir ingresando los nombres que ingresa mi usuario.
function mostrarLista(){
    const mostrandoNombres = document.getElementById('listaAmigos');
    mostrandoNombres.innerHTML = '';
    friends.forEach(ingresoName =>{
        const newItem = document.createElement("li");
        newItem.textContent =ingresoName;
        mostrandoNombres.appendChild(newItem);
    });
    return;
}
//agragando 

//Funcion que sortea numero aleatorio de la lista "Friends" 
// y despues lo manda a llamar por su nombre de lista para que se muestre en la pagina
 
function sortearAmigo(){
   
    if(friends.length==''){
        alert('No hay una lista de nombres que sortear.');
    }else{
        const sorteo = Math.floor(Math.random()*friends.length);
        console.log(sorteo);
        const seleccionado = friends[sorteo];
        console.log(seleccionado);
        const mostrandoNom = document.getElementById('resultado');
        mostrandoNom.innerHTML = "El amigo secreto sorteado es: " + seleccionado;
        elementoPadre.remove(elementoli);
        
    }
}
    


