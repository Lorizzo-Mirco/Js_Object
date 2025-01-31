const animale1 = {specie:"Mucca", razza:"Chianina", zampe:4}
const animale2 = {specie:"Cane", razza:"Bassotto", zampe:4}
const animale3 = {specie:"Gallina", razza:"Andalusa", zampe:2}
var audio;

function Visualizza_Animale(animale) {
    if (animale == 0) {
        document.getElementById("animale-specie").innerHTML = "LA SPECIE E': " + animale1.specie;
        document.getElementById("animale-razza").innerHTML = "LA RAZZA E': " + animale1.razza;
        document.getElementById("animale-zampe").innerHTML = "HA " + animale1.zampe + " ZAMPE";
        audio = new Audio('audios/Mucca.mp3');
    } else if (animale == 1) {
        document.getElementById("animale-specie").innerHTML = "LA SPECIE E': " + animale2.specie;
        document.getElementById("animale-razza").innerHTML = "LA RAZZA E': " + animale2.razza;
        document.getElementById("animale-zampe").innerHTML = "HA " + animale2.zampe + " ZAMPE";
        audio = new Audio('audios/Cane.mp3');
    } else if (animale == 2) {
        document.getElementById("animale-specie").innerHTML = "LA SPECIE E': " + animale3["specie"];
        document.getElementById("animale-razza").innerHTML = "LA RAZZA E': " + animale3["razza"];
        document.getElementById("animale-zampe").innerHTML = "HA " + animale3["zampe"] + " ZAMPE";
        audio = new Audio('audios/Gallina.mp3');
    }
}

function play_audio() {
    console.log("play_audio");
    audio.play();
}