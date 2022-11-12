// selecting elements 
const btnBox = document.querySelector('.button-box');

// array 
const kits = ["crash","kick","snare","tom"];

kits.forEach((kit) =>{
    const btnEle = document.createElement('button');
    btnBox.appendChild(btnEle);
    btnEle.style.backgroundImage = "url(img/" +kit +".jpeg)"
    btnEle.textContent = kit;
    btnEle.classList.add("btnEle")
    const audioEle = document.createElement("audio");
    audioEle.src = "audio/" + kit + ".mp3"
    btnBox.appendChild(audioEle);
    btnEle.addEventListener('click', () =>{
        audioEle.play();
    });
    window.addEventListener('keydown', (e) =>{
        if(e.key === kit.slice(0,1)){
            audioEle.play();
            btnEle.style.transform = "scale(.9)";
            btnEle.style.transition = "all ease .5s";
            setTimeout(() =>{
                btnEle.style.transform = "scale(1)";
            },500)
        };
    })
});
