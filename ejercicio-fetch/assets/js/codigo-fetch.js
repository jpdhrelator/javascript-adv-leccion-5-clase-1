function llamarApi(idCharacter){
    const url=`https://rickandmortyapi.com/api/character/${idCharacter}`;  

    fetch(url)
    .then((response)=>{
        console.log(response);
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
    })
    .then((characterJson)=>{
        console.log(characterJson);
        h1.innerText=characterJson.name;
        img.src= characterJson.image;
        img.alt=characterJson.name;
    })
    .catch((error)=>{
        console.log(`Error en la API ${error}`);        
    });
}
async function llamarApiAsyncAwait(idCharacter){ 
    try {
       const url=`https://rickandmortyapi.com/api/character/${idCharacter}`;
       console.log(url);
       const response= await fetch(url); 
       if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
       }
       const characterJson= await response.json();

       h1.innerText=characterJson.name;
       img.src= characterJson.image;
       img.alt=characterJson.name;
       
    } catch (error) {
        console.error("Error Async/Await:", error);
    }
}