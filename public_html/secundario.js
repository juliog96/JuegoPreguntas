/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var contador = 0;
var respuestas = 0;
var Correctas = 0;
var Fallos = 0;
//Examen
var anchuraWeb = window.innerWidth;
var alturaWeb = window.innerHeight;
var X = screenX;
var Y = screenY;

window.setTimeout(info, 1000);

function info() {
    aumentarContador();
    document.getElementById("navbar").innerHTML = 'Tienes 10 segundos por cada pregunta';
    window.setTimeout(preguntas, 1);
    //Examen
    window.setTimeout(mostrarDatos, 1);
}
function aumentarContador() {
    document.getElementById("contador").innerHTML = '<br> CONTADOR: ' + contador + ' <hr>';
    contador++;
    if (contador > 10) {
        contador = 0;
        window.setTimeout(preguntas, 1);
        contador++;
    }
}
//Examen
function mostrarDatos() {
    var divLista = document.getElementById("infoPantalla");
    divLista.innerHTML = "<h4><ul>" +
            "<li>" + '---------------------------' + "</li>" +
            "<li>" + "Altura Web: " + alturaWeb + "</li>" +
            "<li>" + "Anchura Web: " + anchuraWeb + "</li>" +
            "<li>" + '---------------------------' + "</li>" +
            "<li>" + "Posicion Top: " + Y + "</li>" +
            "<li>" + "Posicion Left: " + X + "</li></h4>";
}
function iniciarCont() {
    contador = 0;
}

function iniciar() {
    window.setInterval(aumentarContador, 1000);
}

function preguntas() {
    var random = Math.floor((Math.random() * 5) + 1);
    var preguntas = document.getElementById("juego");
    console.log(random);
    switch (random) {
        case 1:
            preguntas.innerHTML = "<h4>(POLITICA) - Quien es el actual presidente de USA?</h4>\n\
            <ul>\n\
            <li onclick='correctoResp()'>Donald Trump</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Barack Obama</li>\n\
            </br>\n\
            <li onclick='falloResp()'>M. Rajoy</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Carles Puigdemont</li>\n\
            </br>\n\
            <div id='correcto'></div>\n\
            <div id='fallo'></div>\n\
            </ul>";
            break;
        case 2:
            preguntas.innerHTML = "<h4>(GEOGRAFIA) - Donde esta la estatua de la libertidad?</h4>\n\
            <ul>\n\
            <li onclick='falloResp()'>Barcelona</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Chicago</li>\n\
            </br>\n\
            <li onclick='correctoResp()'>New York</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Alaska</li>\n\
            </br>\n\
            <div id='correcto'></div>\n\
            <div id='fallo'></div>\n\
            </ul>";
            break;
        case 3:
            preguntas.innerHTML = "<h4>(DEPORTE) - En que equipo juega Javier Mascherano?</h4>\n\
            <ul>\n\
            <li onclick='falloResp()'>FC Barcelona</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Liverpool FC</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Boca Juniors</li>\n\
            </br>\n\
            <li onclick='correctoResp()'>Hebei Fortune</li>\n\
            </br>\n\
            <div id='correcto'></div>\n\
            <div id='fallo'></div>\n\
            </ul>";
            break;
        case 4:
            preguntas.innerHTML = "<h4>(CINE) - Pelicula mas galadonada(13) en los Premis Gaudi?</h4>\n\
            <ul>\n\
            <li onclick='falloResp()'>Un monstre em ve a veure</li>\n\
            </br>\n\
            <li onclick='correctoResp()'>Pa Negre</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Eva</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Estiu 1993</li>\n\
            </br>\n\
            <div id='correcto'></div>\n\
            <div id='fallo'></div>\n\
            </ul>";
            break;
        case 5:
            preguntas.innerHTML = "<h4>(DEPORTE) - De que pais es Leo Messi?</h4>\n\
            <ul>\n\
            <li onclick='falloResp()'>Brasil</li>\n\
            </br>\n\
            <li onclick='falloResp()'>España</li>\n\
            </br>\n\
            <li onclick='correctoResp()'>Argentina</li>\n\
            </br>\n\
            <li onclick='falloResp()'>Holanda</li>\n\
            </br>\n\
            <div id='correcto'></div>\n\
            <div id='fallo'></div>\n\
            </ul>";
            break;
    }
}
function correctoResp() {
    respuestas++;
    Correctas++;
    console.log(respuestas, Correctas);
    if (respuestas === 5) {
        window.opener.document.getElementById("respuestasTotal")
                .innerHTML = `-----Resultado Final-----<br>
         Preguntas acertadas: ${Correctas}</br>
         Preguntas falladas: ${Fallos}`;
        window.opener.document.getElementById("boton").style.display = "inline-block";
        window.close();
    }
    var bien = document.getElementById("correcto");
    bien.innerHTML = "Respuesta Acertada";
    window.setTimeout(preguntas, 1000);
    window.setTimeout(iniciarCont, 1);
}

function falloResp() {
    respuestas++;
    Fallos++;
    console.log(respuestas, Fallos);
    if (respuestas === 5) {
        window.opener.document.getElementById("respuestasTotal")
                .innerHTML = `-----Resultado Final-----<br>
         Preguntas acertadas: ${Correctas}</br>
         Preguntas falladas: ${Fallos}`;
        window.opener.document.getElementById("boton").style.display = "inline-block";
        window.close();
    }
    var mal = document.getElementById("fallo");
    mal.innerHTML = "Respuesta Fallada";
    window.setTimeout(preguntas, 1000);
    window.setTimeout(iniciarCont, 1);
}

//Examen 
function pasuarCont() {
    window.opener.document.getElementById("preguntActual")
            .innerHTML = `-----Actualmente has Contestado-----<br>
         Numero de la Pregunta: ${respuestas}`;
}

function pasuarJuego() {
    window.opener.document.getElementById("reanudar").style.display = "inline-block";
    window.close();
}
