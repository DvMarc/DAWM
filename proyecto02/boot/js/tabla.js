const api = "https://www.dnd5eapi.co";
let datos = [] 

let llamarDatos = () => {
    fetch("../monstruos.json") 
        .then(response => response.json())
        .then( async json => {
            let opciones = json["mounstros"];
            for (let i = 0; i < json["resultados"]; ++i){
                await fetch(api+opciones[i]["url"])
                .then(response => response.json())
                .then(data =>{
                    datos.push([data["name"],data["type"],data["size"],data["strength"],data["intelligence"],data["hit_points"]]);
                })
           }
           console.log(typeof datos)
           cargarTabla();
        })
}

let cargarTabla = () => {
    let tabla = document.getElementsByClassName("tabla")[0]
    for (let i = 0; i < datos.length; ++i){
            tabla.innerHTML +=`<tr>
            <th>${datos[i][0]}</th>
            <th>${datos[i][1]}</th>
            <th>${datos[i][2]}</th>
            <th>${datos[i][3]}</th>
            <th>${datos[i][4]}</th>
            <th>${datos[i][5]}</th>
        </tr>`
    }
}

let select = document.getElementsByClassName('opcionTamanio')[0]
select.addEventListener('change', (event) => {
    actualizar(event.target.value)
})

let select1 = document.getElementsByClassName('opcionTipo')[0]
select1.addEventListener('change', (event) => {
    actualizar(event.target.value)
})

let actualizar = (valor) =>{
    let tabla = document.getElementsByClassName("tabla")[0]
    tabla.innerHTML = ""
    if(valor=="Todo"){
        for (let i = 0; i < datos.length; ++i){
            tabla.innerHTML +=`<tr>
            <th>${datos[i][0]}</th>
            <th>${datos[i][1]}</th>
            <th>${datos[i][2]}</th>
            <th>${datos[i][3]}</th>
            <th>${datos[i][4]}</th>
            <th>${datos[i][5]}</th>
            </tr>`
        }
        return;   
    }
    for (let i = 0; i < datos.length; ++i){
        if(valor==datos[i][2]){
            tabla.innerHTML +=`<tr>
            <th>${datos[i][0]}</th>
            <th>${datos[i][1]}</th>
            <th>${datos[i][2]}</th>
            <th>${datos[i][3]}</th>
            <th>${datos[i][4]}</th>
            <th>${datos[i][5]}</th>
            </tr>`
        }
    }
    
}

window.addEventListener('DOMContentLoaded', (event) => {
    llamarDatos()
});