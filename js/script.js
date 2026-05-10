const containerCards = document.getElementById("cards");
const loading = document.getElementById("loading");

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) =>{

        loading.style.display = "none";

        data.results.forEach((personagem)=>{

            //CARD
            const card = document.createElement("div");
            card.classList.add("card");

            //IMAGEM
            const imagem = document.createElement("img");
            imagem.src = personagem.image;
            imagem.alt = personagem.name;

            //NOME 
            const nome = document.createElement("h2");
            nome.textContent = personagem.name;

            //DIV INFO
            const info = document.createElement("div");
            info.classList.add("info");

            //STATUS
            const status = document.createElement("p");
            status.textContent = "Status: " + personagem.status;

            //ESPÉCIE
            const especie = document.createElement("p");
            especie.textContent = "Espécie: " + personagem.species;

            //GÊNERO
            const genero = document.createElement("p");
            genero.textContent = "Gênero: " + personagem.gender;

            //ADICIONANDO ELEMENTOS
            info.appendChild(status);
            info.appendChild(especie);
            info.appendChild(genero);

            card.appendChild(imagem);
            card.appendChild(nome);
            card.appendChild(info);

            containerCards.appendChild(card);

        })
    })

    .catch((error) => {
        console.log("erro ao buscas api:", error);
    })

        



   