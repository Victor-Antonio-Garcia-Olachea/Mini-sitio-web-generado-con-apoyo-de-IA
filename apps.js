let nombreUsuario = prompt("¿Cómo te llamas?");
let youtuberFavorito = prompt("¿Cuál prefieres: Vegetta777, ElRichMC o Farfadox?");

let edad = Number(prompt("¿Cuántos años tienes?"));
let cantidadYoutubers = 3;

let respuesta = prompt("¿Quieres recibir una recomendación? escribe si o no");
let quiereRecomendacion = respuesta == "si";


if (edad >= 12 && cantidadYoutubers == 3) {
    alert("Hola " + nombreUsuario + ", puedes revisar nuestras 3 recomendaciones.");
} else {
    alert("Hola " + nombreUsuario + ", tenemos varias recomendaciones para ti.");
}


if (youtuberFavorito == "Vegetta777" || youtuberFavorito == "ElRichMC") {
    alert(youtuberFavorito + " es una buena opción.");
} else {
    alert("También te recomiendo a Farfadox.");
}


if (!quiereRecomendacion) {
    alert("No quieres recibir recomendaciones.");
} else {
    alert("Te recomiendo visitar los canales de la página.");
}