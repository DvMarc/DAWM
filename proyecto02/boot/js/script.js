const api = "https://www.dnd5eapi.co";
let coloresFondo = []
let coloresBorde = []

let select = document.getElementsByClassName('box')[0]
select.addEventListener("change", (event) => {
    let datosP = [] 
    let input = document.getElementById('number')
    let cantidad = input.value
    let opcion = event.target.value;
    datosP=[]
    llamarDatos(cantidad,opcion,datosP);
    input.addEventListener("change",(event) => {
        let cantidad1 = event.target.value
        datosP=[]
        llamarDatos(cantidad1,opcion,datosP);
    })
})

const cargarOpciones = () => {
    let select = document.getElementsByClassName('box')[0]
    let optionSize = document.createElement('option')
    let optionType = document.createElement('option')
    optionSize.innerHTML = "Mounstros por tamaño";
    optionSize.setAttribute("value","size")
    optionType.innerHTML = "Mounstros por tipo";
    optionType.setAttribute("value","type")
    select.appendChild(optionSize)
    select.appendChild(optionType)
}


let llamarDatos =  (valor,opcion,datosP)=>{
    let mapa = new Map()
    fetch("../monstruos.json") 
        .then(response => response.json())
        .then( async json => {
            let opciones = json["mounstros"];
            if(valor>334) {
                valor = 334
                input.value = valor
            }
            for (let i = 0; i < valor; ++i){
                
                 await cargarDatos(opciones[i]["url"], mapa,opcion,datosP)
            }
            llenarGrafica1(mapa,opcion,datosP)
        })
    
}

let cargarDatos = async (url,mapa,opcion,datosP) =>{
    await fetch(api+url)
    .then(response => response.json())
    .then(data =>{
        datosP.push([data["wisdom"],data["charisma"],data["strength"],data["intelligence"],data["hit_points"],data["constitution"],data["dexterity"]]);
        if(!mapa.has(data[opcion])){
            mapa.set(data[opcion],1)
        }else{
            let valor = mapa.get(data[opcion])
            valor=valor+1
            mapa.set(data[opcion],valor)
        }
    })
}

let llenarGrafica1 = (data,filtro,datosP) => {
    let section = document.getElementsByClassName("raw")[0]
    section.innerHTML = ""
    let canva = document.createElement("canvas")
    canva.setAttribute("id","grafica")
    section.appendChild(canva)
    let $grafica = document.querySelector("#grafica");
    let valores = []
    let etiquetas = []
    
    for( let clavevalor of data.entries()){
        valores.push(clavevalor[1])
        etiquetas.push(clavevalor[0])
    }
    while(coloresFondo.length<=etiquetas.length){
        coloresFondo.push(colorRGB())
        coloresBorde.push(colorRGB())
    }
    let datos = {
        label: 'mounstros por tamanio',
        data: valores,
        backgroundColor: coloresFondo,
        borderColor: coloresBorde,
        borderWidth: 1,
    }

    new Chart($grafica, {
        type: 'pie',
        data: {
            labels: etiquetas,
            datasets: [
                datos,
            ]
        },
    });
    let resultado = procesarDato(datosP,datosP.length,filtro)
    llenarGrafica2(resultado,filtro)
}

let procesarDato = (info,cantidad,filtro) =>{
    let mediaDeDatos = []
    let mediaWisdom = 0
    let mediaCharisma = 0
    let mediaStrength = 0
    let mediaIntelligence = 0
    let mediaHit = 0
    let mediaConstitucion = 0
    let mediaDexterity = 0
        for (let i=0;i<cantidad;++i){
                mediaWisdom += info[i][0]
                mediaCharisma += info[i][1]
                mediaStrength += info[i][2]
                mediaIntelligence += info[i][3]
                mediaHit += info[i][4]
                mediaConstitucion += info[i][5]
                mediaDexterity += info[i][6]
        }
        mediaDeDatos.push(mediaWisdom/cantidad)
        mediaDeDatos.push(mediaCharisma/cantidad)
        mediaDeDatos.push(mediaStrength/cantidad)
        mediaDeDatos.push(mediaIntelligence/cantidad)
        mediaDeDatos.push(mediaHit/cantidad)
        mediaDeDatos.push(mediaConstitucion/cantidad)
        mediaDeDatos.push(mediaDexterity/cantidad)
        return mediaDeDatos

}

let llenarGrafica2 = (dato, filtro) => {
    let section = document.getElementsByClassName("raw1")[0]
    section.innerHTML = ""
    let canva = document.createElement("canvas")
    canva.setAttribute("id","grafica1")
    section.appendChild(canva)
    let $grafica1 = document.querySelector("#grafica1");
    let etiquetas2 = ["wisdom", "charisma", "strength", "intelligence", "hit_points", "constitution", "dexterity"]
    let data = {
        label: `Media de atributos de mountros de la cantidad de datos usados`,
        data: dato,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    }
    new Chart($grafica1, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas2,
            datasets: [
                data,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
}

function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
	var color = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255)+ "," + Math.random()+")";
	return "rgba" + color;
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarOpciones()
});