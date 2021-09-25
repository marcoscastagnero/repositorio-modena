const nuestrosdestinos = [{id: 1 , destino:"Maceio"},
                        {id: 2, destino: "Disney"},
                        {id: 3, destino: "Salta"}];

for (const destino of nuestrosdestinos){
    console.log(destino.id);
    console.log(destino.destino);
}

function promociones (dias, precio, disponibilidad) {
    this.dias = dias;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}
const maceio = new promociones ("8 días / 7 noches", "$79000","Hay disponibilidad");

class promociones1 {
    constructor (Dias, Precio, Disponibilidad, Opciones){
        this.Dias = Dias;
        this.Precio = Precio;
        this.Disponibilidad = Disponibilidad;
        this.Opciones = Opciones;
    }
    consultar(){
        console.log("Cantidad de días:"+ " " + this.dias);
        console.log("Precio final:"+ " " + this.precio);
        console.log("Disponibilidad:"+ " " + this.Disponibilidad);
        console.log("Existe estas opciones:"+ " " + this.opciones);
    }
}

const disney = new promociones1 (
    "8 días / 7 noches",
    "U$S390 o $38212",
    "Hay disponibilidad",
    "Pipa Brasil");

class promociones3{
    constructor(Dias, Precio, Disponibilidad){
        this.dias = Dias;
        this.precio = Precio;
        this.disponibilidad = Disponibilidad;
    }
}

const salta = new promociones3(
    "3 noches",
    "$11350 por persona",
    "Hay disponibilidad");

/*argentina.html*/

class destinosargentina{
    constructor (Destino, Fecha, Precio, Disponibilidad){
        this.destino = Destino;
        this.Fecha = Fecha;
        this.Precio = Precio;
        this.Disponibilidad = Disponibilidad;
    }
    consultar(){
        console.log("Destino:"+ " " + this.destino);
        console.log("Cantidad de días:"+ " " + this.dias);
        console.log("Precio final:"+ " " + this.precio);
        console.log("Disponibilidad:"+ " " + this.Disponibilidad);
    }
}

const destinos = [];
destinos.push (new destinosargentina ("Cordoba", "4 de Diciembre", "$35.870", "Hay disponibilidad"));
destinos.push (new destinosargentina ("Mendoza", "Diciembre", "$39.050", "Hay disponibilidad"));
destinos.push (new destinosargentina ("Isla Martín García", "Septiembre", "$5.400", "Hay disponibilidad"));
destinos.push (new destinosargentina ("Tigre", "Noviembre", "$9.600", "Hay disponibilidad"));
destinos.push (new destinosargentina ("Tandil", "Noviembre", "$18.300", "Hay disponibilidad"));
destinos.push (new destinosargentina ("Bariloche", "Septiembre a Diciembre", "$55.240", "Hay disponibilidad"));

for(const destinosargentina of destinos){
    console.log(destinos.destino);
}

const promocionesUshuaia = [{id:1, nombre:"Ushuaia Clásico",precio: 12790},
                            {id:2, nombre:"Escapa Ushuaia", precio: 14560},
                            {id:3, nombre:"Ushuaia", precio: 16680}];

for (const promociones of promocionesUshuaia){
    let Ushuaia = document.createElement ("div");
    Ushuaia.innerHTML = `<h2> ID: ${promociones.id}</h2>
                        <p>  Ushuaia: ${promociones.nombre}</p>
                        <p class "precio"> $ ${promociones.precio}</p>`;
    document.body.appendChild(Ushuaia);
}


/*
let pregunta = prompt ("¿De cual promoción queres cotización? ");

while (pregunta != ESC){
        switch(pregunta){
            case "maceio":
            alert ("U$S806 o $79000");
            break;
            case "navidad":
                alert ("U$S 390 o $38199 ");
                break;
            case "salta":
                alert("U$S115 o $11350");
                break;
            default:
                alert ("Solo tenemos las promociones en pantalla");
                break;
        }
}

let cotizaciondolar = parseInt(prompt ("Dolar a pesos"));

function cotizador (dolar, pesos, cotizar){
    switch(cotizar){
        case "disney":
            return (dolar * pesos);
            break;
        default:
            alert("no hay nada que cotizar")
            break;
    }
}

alert (cotizador (103, 10, "*"));

let texto = prompt("Resultados de los principales equipos de Europa");

while (texto != "ESC"){
    switch (texto){
        case "juventus":
            alert("Perdió 1 a 0 contra Empoli");
            break;
        case "milan": 
            alert("Ganó 4 a 1 al Cagliari");
            break;
        case "inter":
            alert("Ganó 3 a 1 al Hellas Verona");
            break;
        case "real madrid":
            alert("Ganó 1 a 0 al Real Betis");
            break;
        case "barcelona":
            alert ("Ganó 2 a 1 al Getafe");
            break;
        case "atletico madrid":
            alert("Empato 2 a 2 contra el Villarreal");
            break;
        case "manchester united":
            alert ("Ganó 1 a 0 al Wolves");
            break;
        case "liverpool":
            alert ("Empato 1 a 1 contra Chelsea");
            break;
        case "tottenham":
            alert ("Ganó 1 a 0 al Watford");
            break;
        case "manchester city":
            alert ("Ganó 5 a 0 al Arsenal");
            break;
        default:
            alert ("¿Qué estas buscando?")
            break;
    }
    texto = prompt("Resultados de los principales equipos de Europa");
}

*/