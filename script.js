const personajesAg = document.getElementById("personajes");
const personajesFN = document.getElementById("filtroNombre");
const personajesFE = document.getElementById("filtroEstado");
const personajeFEs = document.getElementById("filtroEspecie");


const puntajesLikes = new Map();    
const puntajesDislikes = new Map();
let totalDeLikes = 0;
let totalDeDislikes = 0;


async function obtenerPersonajes(nombre, estado, especie){

    let url = "https://rickandmortyapi.com/api/character";
    if (nombre) {
        url += `/?name=${nombre}&`;
    }
    if (estado) {
        url += `/?status=${estado}&`;
    }
    if (especie) {
        url += `/?species=${especie}&`;
    }

    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
}


async function mostrarPersonajes(nombre, estado, especie) {
    const personajes = await obtenerPersonajes(nombre, estado, especie);
    personajesAg.innerHTML = "";

    personajes.results.forEach(personaje => {
        const divC = document.createElement("div");
        divC.classList.add("card");
        divC.style.width = "18rem";
        divC.innerHTML = `
            <img class="card-img-top" src="${personaje.image}" alt="${personaje.name}">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">Estado: ${personaje.status}</p>
                <p class="card-text">Especie: ${personaje.species}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Género: ${personaje.gender}</li>
                <li class="list-group-item">Origen: ${personaje.origin.name}</li>
            </ul>
            <div class="card-body">
                <div class="buttons-container">
                    <button onclick="actualizarPuntaje(${personaje.id}, 1)" class="card-link like-btn">
                        👍 ${puntajesLikes.get(personaje.id) || 0}
                    </button>
                    <button onclick="actualizarPuntaje(${personaje.id}, -1)" class="card-link dislike-btn">
                        👎 ${puntajesDislikes.get(personaje.id) || 0}
                    </button>
                </div>
            </div>
        `;
        personajesAg.appendChild(divC);
        
        
    });
}

function actualizarPuntaje(id, valor) {
    if (valor > 0) {
        const likesActuales = puntajesLikes.get(id) || 0;
        puntajesLikes.set(id, likesActuales + 1);
        totalDeLikes++;
    } else {
        const dislikesActuales = puntajesDislikes.get(id) || 0;
        puntajesDislikes.set(id, dislikesActuales + 1);
        totalDeDislikes++;
    }
    
    guardarEnLocalStorage();
    contadorGlobal();
    mostrarPersonajes(personajesFN.value, personajesFE.value, personajeFEs.value);
}

function contadorGlobal() {
    document.getElementById('totalLikesLabel').textContent = totalDeLikes + ' Likes';
    document.getElementById('totalDislikesLabel').textContent = totalDeDislikes + ' Dislikes';
}

personajesFN.addEventListener("input", () => {
    const nombre = personajesFN.value;
    const estado = personajesFE.value;
    const especie = personajeFEs.value;
    mostrarPersonajes(nombre, estado, especie);
});

personajesFE.addEventListener("change", () => {
    const nombre = personajesFN.value;
    const estado = personajesFE.value;
    const especie = personajeFEs.value;
    mostrarPersonajes(nombre, estado, especie);
});


personajeFEs.addEventListener("input", () => {
    const especie = personajeFEs.value;
    const nombre = personajesFN.value;
    const estado = personajesFE.value;  
    mostrarPersonajes(nombre, estado, especie);
});

function guardarEnLocalStorage() {
    const likesObj = Object.fromEntries(puntajesLikes);
    const dislikesObj = Object.fromEntries(puntajesDislikes);
    
    localStorage.setItem('puntajesLikes', JSON.stringify(likesObj));
    localStorage.setItem('puntajesDislikes', JSON.stringify(dislikesObj));
    localStorage.setItem('totalLikes', totalDeLikes.toString());
    localStorage.setItem('totalDislikes', totalDeDislikes.toString());
}

function LStorage() {
    const totalLikes = localStorage.getItem('totalLikes');
    const totalDislikes = localStorage.getItem('totalDislikes');
    if (totalLikes) totalDeLikes = parseInt(totalLikes);
    if (totalDislikes) totalDeDislikes = parseInt(totalDislikes);

    const likesObj = JSON.parse(localStorage.getItem('puntajesLikes') || '{}');
    const dislikesObj = JSON.parse(localStorage.getItem('puntajesDislikes') || '{}');
    
    Object.entries(likesObj).forEach(([key, value]) => {
        puntajesLikes.set(parseInt(key), value);
    });
    Object.entries(dislikesObj).forEach(([key, value]) => {
        puntajesDislikes.set(parseInt(key), value);
    });
}

LStorage();
mostrarPersonajes();
contadorGlobal();