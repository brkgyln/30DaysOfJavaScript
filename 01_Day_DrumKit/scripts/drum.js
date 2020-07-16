function playmusic(event) {
    console.log(event.key, " tusuna basildi."); // 
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    console.log(audio);

    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    document.getElementById("basilantusbilgisi").innerHTML = "Basılan Tus : " + event.key.toUpperCase();
    key.classList.add('playing');
    setTimeout(function() {
        key.classList.remove("playing");
    }, 150);


}


const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playmusic);