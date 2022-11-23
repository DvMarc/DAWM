const apiMonsters = "https://www.dnd5eapi.co/api/monsters";
const apiEquipment = "https://www.dnd5eapi.co/api/equipment";

let opciones;

const cargarOpciones = async () =>{
    let select = document.getElementsByClassName('box')[0]
    let optionMonsters = document.createElement('option')
    let optionEquipment = document.createElement('option')
    optionMonsters.innerHTML = "Monsters";
    optionMonsters.setAttribute("value",apiMonsters)
    optionEquipment.innerHTML = "Equipment";
    optionEquipment.setAttribute("value",apiEquipment)
    select.appendChild(optionMonsters)
    select.appendChild(optionEquipment)
}

let select = document.getElementsByClassName('box')[0]
select.addEventListener("change", async (event) => {
    let valor = event.target.value;
    await fetch(valor)
    .then(response => response.json())
    .then(data => {
        opciones = data["results"]
        //cargarDatos(opciones, valor)
    })
})

let cargarDatos = async (opciones, valor) =>{
    let raw = document.getElementsByClassName('raw')[0]
    raw.innerHTML = ""
    for (let i = 0; i <opciones.length; ++i){
        let object = opciones[i]["index"]
        let urlObject = valor+'/'+object
        await fetch(urlObject)
        .then(response => response.json())
        .then(data =>{
            raw.innerHTML += JSON.stringify(data["name"])
        })
    }   
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarOpciones()
});