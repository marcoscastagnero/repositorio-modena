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



/*
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