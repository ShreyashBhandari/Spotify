let songIndex = 0;
let audioElem = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Tu Yaheen Hai - Shehnaaz Gill" , filePath: "songs/1.mp3" , coverPath : "coverpages/1.jpg"},
    {songName: "Champagne Problems - Taylor Swift" , filePath: "songs/2.mp3" , coverPath : "coverpages/2.jpg"},
    {songName: "Aankho Se Batana - Dikshant" , filePath: "songs/3.mp3" , coverPath : "coverpages/3.jpg"},
    {songName: "If we Have Each Other - Alec Benjamin" , filePath: "songs/4.mp3" , coverPath : "coverpages/4.jpg"},
    {songName: "Pehchan Na Paoge - Hardil Pandaya" , filePath: "songs/5.mp3" , coverPath : "coverpages/5.jpg"},
    {songName: "If The World Was Ending - JP Saxe and Julia Michaels" , filePath: "songs/6.mp3" , coverPath : "coverpages/6.jpg"},
    {songName: "Maiyya Mainu -  Sachet Parampara" , filePath: "songs/7.mp3" , coverPath : "coverpages/7.jpg"},
    {songName: "Heat Waves - Glass Animals" , filePath: "songs/8.mp3" , coverPath : "coverpages/8.jpg"},
    {songName: "Sajna - Ishpreet  " , filePath: "songs/9.mp3" , coverPath : "coverpages/9.jpg"},
    {songName: "I Think I Wanna Text You - Vaultboy" , filePath: "songs/10.mp3" , coverPath : "coverpages/10.jpg"},
    
]

songitem.forEach((element , i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

});

masterPlay.addEventListener('click' , ()=>{
    if(audioElem.paused || audioElem.currentTime<= 0){
        audioElem.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElem.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElem.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElem.currentTime/audioElem.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , () =>{
    audioElem.currentTime = myProgressBar.value * audioElem.duration / 100;
})

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElem.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioElem.currentTime = 0;
        audioElem.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click' , () =>{
    if (songIndex >= 9) {
        songitem = 0;
    }
    else{
        songIndex += 1;
    }
        audioElem.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioElem.currentTime = 0;
        audioElem.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click' , () =>{
    if (songIndex <= 0) {
        songitem = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElem.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioElem.currentTime = 0;
        audioElem.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})