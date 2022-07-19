
const playList= document.querySelector(".playlist");
const audio = document.querySelector(".url");
const nameArtist = document.querySelector("h1");
const nameSong = document.querySelector("h4");
const image = document.querySelector(".image");
const btListDesplegable= document.querySelector(".list-desplegable");
const play = document.querySelector("#play");
const prev= document.getElementById("prev");
const next= document.getElementById("next");
const progreso = document.querySelector(".progress");
const progressContainer=  document.querySelector(".progress-container");

progressContainer.addEventListener("click",setProgrest);
//muevo la barra de progreso
audio.addEventListener("timeupdate",updateProgrest);
let songs=null;
let  indexActual=null;
//cargo todas las canciones
const loadSongs= async()=>{
    try {
        let musicList = await fetch("canciones.txt");
        songs= await musicList.json();//objeto con la todos los atributos
        songs.forEach((song,index)=>{
            //creo el contenedor del link
            let li = document.createElement("li");
            //creo la etiqueta link
            let link= document.createElement("a");
            //refresco a
            link.innerHTML=`${index+1}. ${song.artist}-${song.title}`;
            //agrego una clase
            link.classList.add("music");
            link.href="#";
            //escucha de evento
            link.addEventListener("click",()=>loadSong(songs,index));

            li.appendChild(link);
            playList.appendChild(li);
        });

    } catch (error) {
        console.log(error);
    }
}

//cargo la musica al link
function loadSong(songs,index){
    data=songs;
    indexActual=index;
    audio.src=songs[indexActual].url;
    playSong();
    loadNameSong(songs,indexActual);
    loadImage(songs,indexActual);
  
}



function loadNameSong(songs,index){
    nameSong.textContent=songs[index].title;
    nameArtist.textContent=songs[index].artist;
}

function loadImage(songs,index){
    image.src=songs[index].image;
}

//reproducir cancion
function playSong(){
    audio.play();
}

// Actualiar controles
function updateControls() {
    if (!audio.paused) {//esta que se reproduce la canción
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
        console.log("Puasa");
        audio.pause();
    } else {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
        audio.play();
       
    }
}

//boton reproducir
play.addEventListener("click",()=>{
    updateControls();
});

prev.addEventListener("click",()=>{
    prevSong(data,indexActual);
    console.log(indexActual);
    console.log(data.length);
});

next.addEventListener("click",()=>{
    nextSong();
});

//fundtion prevSong
function prevSong(objet,index){
    if(index-1!=-1){
       loadSong(objet,index-1);
    }else{
       loadSong(objet,objet.length-1);
    }
}

//fucntion nextSong
function nextSong(){
    indexActual++;
    if(indexActual<songs.length){
        loadSong(songs,indexActual);
     }else{
        loadSong(songs,0);
        indexActual=0;
     }
}

loadSongs();
//   pasa a la siguente cancion
audio.addEventListener("ended",nextSong);


//funcion para adelatar o retroceder cancion

function setProgrest(event){
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

//boton mostrar lista de canciones
let visible=true;
btListDesplegable.addEventListener("click",()=>{
    if (visible==true) {
        playList.style="display: flex";
        visible=false;
    }        
    else {
        playList.style="display: none";
        visible=true;
    }
});

//actualizar barra de progreso
function updateProgrest(event){
    const {duration, currentTime} = event.srcElement;
   //  console.log(event);
   //  console.log(duration);
   const percent = (currentTime / duration) * 100;
   progreso.style.width = percent + "%" ;
}












const renderList= async()=>{
    try {
        let musicList = await fetch("canciones.txt");
        let o= await musicList.json();
        for(let i=0;i<o.length;i++){
            let div = document.createElement("div");
            div.classList.add("music"); 
            div.innerHTML=`${i+1}. ${o[i].artist}-${o[i].title}`;
            playList.appendChild(div);
        }
        const music = document.querySelectorAll(".music");
        for(let i=0;i< music.length;i++){
            
            music[i].addEventListener("click", () => {
    
                musicPlay(i, o);
            });
        }
    } catch (error) {
        console.log(error);
    }
   
}

// function musicPlay(index,obj){
//     let singing = new Audio(obj[index].url)
//     canciones.unshift(singing);
//     canciones.forEach(element => {
//          if(element.paused==true){//no se esta reproduciendo 
//             url.src=obj[index].url;
//             loadNameSong(obj[index]);
//             loadImage(obj[index]);
//             element.preload="auto";
//             element.currentTime =0;
//             element.load(); 
//             element.play();
//             console.log(element);       
//          }else{
//             //  element.paused=false;
//              element.pause();
//              canciones.pop();
//          }
//     });
    
//    console.log(canciones.length);

// }







// renderList();
const dato = async () => {
    let addres = await fetch("canciones.txt");
    let d = await addres.json();
    let audio= new Audio(d[0].url); 
    audio.play();
    audio.pause();
    // console.log(d[0].url);
    // const audio = document.createElement("audio");
    // audio.preload = "auto";
    // audio.src = d[0].url;
    // audio.play();
    // document.body.appendChild(audio);
}


// dato();

