/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var alturaPantalla = screen.height;
var alturaMaxima = screen.availHeight;
var anchuraMaxima = screen.availWidth;
var colorProfundidad = screen.colorDepth;
var anchuraPantalla = screen.width;
var pixelProfundidad = screen.pixelDepth;

var anchuraWeb = window.innerWidth;
var alturaWeb = window.innerHeight;
var nombreNav = navigator.appName;
var versionNav = navigator.appVersion;
var codigoNav = navigator.appCodeName;
var lenguajeNav = navigator.language;
var productoNav = navigator.product;

var urlPagina = window.location.href;
var url = location.href;
var indexBarra = url.lastIndexOf("/");
var nombre = url.substr(indexBarra + 1);

document.getElementById("reanudar").style.display = "none";

var divLista = document.getElementById("listaValores");
divLista.innerHTML = "<h4><ul>" +
        "<li>" + "Altura Pantalla: " + alturaPantalla + "</li>" +
        "<li>" + "Anchura Pantalla: " + anchuraPantalla + "</li>" +
        "<li>" + "Altura Maxima: " + alturaMaxima + "</li>" +
        "<li>" + "Anchura Maxima: " + anchuraMaxima + "</li>" +
        "<li>" + "Profundidad Color: " + colorProfundidad + "</li>" +
        "<li>" + "Profundidad Pixel: " + pixelProfundidad + "</li>" +
        "</ul></h4>";


var divLista2 = document.getElementById("listaValores2");
divLista2.innerHTML = "<h4><ul>" +
        "<li>" + "Altura Web: " + alturaWeb + "</li>" +
        "<li>" + "Anchura Web: " + anchuraWeb + "</li>" +
        "<li>" + "Nombre Navegador: " + nombreNav + "</li>" +
        "<li>" + "Version Navegador: " + versionNav + "</li>" +
        "<li>" + "Codigo Navegador: " + codigoNav + "</li>" +
        "<li>" + "Lenguaje Navegador: " + lenguajeNav + "</li>" +
        "<li>" + "Producto Navegador: " + productoNav + "</li>" +
        "</ul></h4>";

var divLista3 = document.getElementById("listaValores3");
divLista3.innerHTML = "<h4>La pagina actual es: " + nombre + "</h4>";

document.getElementById("boton").addEventListener("click", function () {
    window.open('ventanaSecundaria.html', null, `height=${alturaMaxima / 2}, width=${anchuraMaxima / 2}, left=450%, top=150%`);
    document.getElementById("boton").style.display = "none";
});

document.getElementById("reanudar").addEventListener("click", function () {
    window.open('ventanaSecundaria.html', null, `height=${alturaMaxima / 2}, width=${anchuraMaxima / 2}, left=450%, top=150%`);
    document.getElementById("reanudar").style.display = "none";
});

function randomURl() {
    var url = location.href;
    var numRand = Math.floor((Math.random() * 10) + 1);
    var numRandFinal = Math.floor((Math.random() * 50) + 1);
    var nombreRand = url.substr(numRand + numRandFinal);
    var divList = document.getElementById("listaRandom");
    divList.innerHTML = "<h4>" + nombreRand + "</h4>";
    console.log(nombreRand);

}

//var numero = 10;
//console.log(isNaN(numero));
//
//var key = setInterval(function () {
//    console.log("hola");
//}, 1000);
//
//window.setTimeout(nombreFunction, 6000);
//function nombreFunction() {
//    window.clearInterval(key);
//}
//
//function checkNombreUser() {
//    if (document.cookie === "") {
//        var nombre = window.prompt("Introduce un nombre");
//        document.cookie = "nombre_usuario=pepe";
//        console.log(document.cookie);
//    }
//    document.getElementById("valorCookie").innerHTML = document.cookie;
//
//}
////
////function pideValores() {
////    var valores = window.prompt("Introduce 2 valores");
////    valores = valores.split(",");
////    var error = false;
////    if (valores.length !== 2) {
////        error = true;
////    }
////    if (valores[0] > 200 || valores[0] > 800 || valores[1] < 200 || valores[1] > 800
////            || isNaN(valores[0] || isNaN(valores[1]))) {
////        errror = true;
////    }
////    while (error)
////        ;
////}
//window.setTimeout(function () {
//    opened.document.getElementById("pop").innerHTML = "PepeLu";
//    opened.saludoVentanNueva();
//}, 1000);

