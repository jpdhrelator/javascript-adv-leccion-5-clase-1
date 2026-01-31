const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';

function getDataXHR(){
    clearData();
    toggleLoading(true);

    const xhr= new XMLHttpRequest();

    xhr.open('GET', url,true);


    xhr.onreadystatechange = ()=>{

        if(xhr.readyState ==4){
            if(xhr.status== 200){
                const response = JSON.parse(xhr.responseText);
                const pokemons= response.results;

                pokemons.forEach(pokemon => createCard(pokemon));

            }else{
                console.error("Error en XHR:", xhr.status);
                alert('Error al cargar datos');
            }
            toggleLoading(false);
        }
    };

    xhr.send();
}