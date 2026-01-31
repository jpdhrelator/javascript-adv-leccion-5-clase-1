function llamarApi(idCharacter){
    const url=`https://rickandmortyapi.com/api/character/${idCharacter}`;
    const xhr= new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange= ()=>{
        if(xhr.readyState == 4 ){
            if(xhr.status == 200){
                const character=JSON.parse(xhr.responseText);
                console.log(character);          

                h1.innerText=character.name;
                img.src= character.image;
                img.alt=character.name;;
            }else{
                h1.innerText="Error en la llamada";
            }
        }
        
    }
    xhr.send();
}
