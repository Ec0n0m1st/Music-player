let musica = document.getElementById("musica");
let icon = document.getElementById("playpause");
let progressed = document.getElementById("progressed");
let progress_bar = document.getElementById("progress_bar")
let album = document.getElementById("album");
let artist_name = document.getElementById("artist_name");
let song_name = document.getElementById("song_name");
let song_play = false;

var songlist = [
    {
        album: "./images/Vitão.jpg",
        title: "Café",
        artist_name: "Vitão",
        file: "./musicas/Café - Vitão.mp4",
    },
    {
        album: "./images/mtk.jpg",
        title: "Lá em Casa",
        artist_name: "Agatha, Crod (Prod. Meucci)",
        file: "./musicas/Lá em Casa - Agatha, Crod (Prod. Meucci).mp4",
    },
    {
        album: "./images/Melim.jpg",
        title: "Velha Infância",
        artist_name: "Melim",
        file: "./musicas/Melim - Velha Infância (Tribalistas).mp4"
    },
    {
        album: "./images/Giulia Be.jpg",
        title: "Menina Solta",
        artist_name: "Giulia Be",
        file: "./musicas/Giulia Be - Menina Solta (Lyrics).mp3",
    }
]

let index = 0;

function audioPlayer(index) {

    album.src = songlist[index].album;
    song_name.innerText = songlist[index].title;
    artist_name.innerText = songlist[index].artist_name;
    musica.src = songlist[index].file;

    musica.load();

}

audioPlayer(index);

function back() {
    if (index == 0) {
        index = songlist.length;
        audioPlayer(index);
        song_play = false;
        play();
    } else {
        index--;
        audioPlayer(index);
        song_play = false;
        play();
    }
}

function next() {
    if (index == songlist.length) {
        index = 0;
        audioPlayer(index);
        song_play = false;
        play();
    } else {
        index++;
        audioPlayer(index);
        song_play = false;
        play();
    }
}

function play() {
    if (song_play == false) {
        musica.play();
        icon.setAttribute("src", "./icones/pause.png");
        return song_play = true;
    }
    else {
        musica.pause();
        icon.setAttribute("src", "./icones/play-button.png");
        return song_play = false;
    }
}

function avancar() {
    musica.currentTime += 15;
}

function retroceder() {
    musica.currentTime -= 15;
}

function mudarMusica(){

    let totalTime = musica.duration;
    let currentTime = musica.currentTime;

    if (currentTime == totalTime){
        next();
    }
}

progress_bar.addEventListener("input", time);

function time(){
    musica.currentTime = progress_bar.value;
}

function timing(){
    
    progress_bar.max = musica.duration;
    progress_bar.value = musica.currentTime;

    let minutos = Math.floor(musica.currentTime/60);
    let segundos = Math.round(musica.currentTime % 60);
    let minutosTotal = Math.floor(musica.duration / 60);
    let segundosTotal = Math.round(musica.duration % 60);

    if (minutos < 10){
        minutos = "0" + minutos;
    }
    if (segundos < 10){
        segundos = "0" + segundos;
    }
    if (minutosTotal < 10){
        minutosTotal = "0" + minutosTotal;
    }
    if (segundosTotal < 10){
        segundosTotal = "0" + segundosTotal;
    }

    timeStart.innerText = minutos + ":" + segundos;
    timeEnd.innerText = minutosTotal + ":" + segundosTotal;


    mudarMusica(); 
}

setInterval(timing, 1000);



// function barra_mexe() {
//     progressed.style.width = Math.floor(musica.currentTime * 100 / musica.duration) + "%";
// }

// progress_bar.onclick = function (e){
//     musica.currentTime = ((e.offsetX / progress_bar.offsetWidth) * musica.duration)}


// essa função faz o botão play reaparecer caso troque uma música durante o progresso
// function change2() {
//     if (icon.src.match("./icones/play-button.png")) {
//         icon.src = "./icones/pause.png"
//     }
// }
    // function altera(){
    //     musica.currentTime = ((offsetX/progress_bar.offsetWidth) * musica.duration);
    // }

    // musica.ontimeupdate = function(e){
    //     progressed.style.width = Math.floor(musica.currentTime*100 / musica.duration)+"%"; 
    // }//




