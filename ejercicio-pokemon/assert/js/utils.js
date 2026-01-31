const container = document.getElementById('cards-container');
const overlay = document.getElementById('loading-overlay');

function toggleLoading(isLoading) {
    if (isLoading) {
        overlay.classList.remove('d-none');
    } else {
        overlay.classList.add('d-none');
    }
}

function clearData() {
    container.innerHTML = '';
}
function createCard(pokemon) {
   
    const id = pokemon.url.split('/')[6]; 
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
        <div class="card h-100 shadow hover-effect">
            <img src="${imageUrl}" class="card-img-top p-3" alt="${pokemon.name}">
            <div class="card-body text-center">
                <h5 class="card-title text-capitalize fw-bold text-primary">
                    #${id} ${pokemon.name}
                </h5>
            </div>
            <div class="card-footer bg-transparent border-top-0">
                <a href="${pokemon.url}" target="_blank" class="btn btn-sm btn-outline-secondary">Ver JSON</a>
            </div>
        </div>
    `;
    container.appendChild(col);
}