document.getElementById ("maceiocomprar").addEventListener ("click", maceio);
document.getElementById ("disneycomprar").addEventListener ("click", disney);
document.getElementById ("saltacomprar").addEventListener ("click", salta);

function maceio (){
    sessionStorage.setItem ("comprar", "maceio");
    alert ("compraste" + " " +(sessionStorage.getItem("comprar")));
}

function disney (){
    sessionStorage.setItem ("comprar", "disney");
    alert ("compraste" + " " +(sessionStorage.getItem("comprar")));
}

function salta (){
    sessionStorage.setItem("comprar", "salta");
    alert("compraste" + " " +(sessionStorage.getItem("comprar")));
}

let asistencia = {titulo: "Asistencia al viajero", parrafo:"Contamos con las mejores empresas que se adecuan a tu viaje", consultanos: "Consultanos por whatsapp"};

let contenedor = document.createElement("aside");


//contenedor.innerHTML = "<h4> titulo: ${asistencia.titulo}</h4>
//                        <p> parrafo: ${asistencia.parrafo}</p>
//                        <button>consultanos: ${asistencia.consultanos} </button>";

contenedor.innerHTML =  "<h4>TITULO: ${asistencia.titulo} </h4>"
                        "<p>parrafo: ${asistencia.parrafo} </p> "
                        "<button>consultanos: ${asistancia.consultanos} </button> "
                        

