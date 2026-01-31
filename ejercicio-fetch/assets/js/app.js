const idCharacter= 2;
document.getElementById('btn')
.addEventListener('click',obtenerInfo);
function obtenerInfo(){
   const  idCharacter = document.getElementById('id_character').value;
   llamarApiAsyncAwait(idCharacter);
}