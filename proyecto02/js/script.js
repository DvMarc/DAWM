const llamadaApi = async () =>{
    await fetch("https://protected-taiga-89091.herokuapp.com/api/card")
      .then(response => response.json() )  
      .then( data => {
        const body = document.querySelector('body');
        const section = document.createElement('section');
        const cartas = data["data"];
        for (index in cartas){
          const carta = cartas[index];
          const kanji = carta["kanji"];
          const nameES = carta["spanishName"];
          const romaji = carta["Rōmaji"];
          
          if (kanji !== undefined) {
            let plantilla = 
            `<tr>
              <td>${kanji}</td>
              <td>${nameES}</td>
              <td>${romaji}</td>
            </tr>`
            document.querySelector("table").innerHTML += plantilla;
          }
        }
      }
    )
}

window.addEventListener('DOMContentLoaded', (event) => {
    llamadaApi()
});
