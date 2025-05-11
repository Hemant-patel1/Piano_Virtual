const body = document.querySelector("body");
const html = body.innerHTML;
const Keys = document.querySelectorAll(".box");
const keyBoard = {
    z: "C",
    x: "D",
    c: "E",
    v: "F",
    b: "G",
    n: "A",
    m: "B",
    s: "Db",
    d: "Eb",
    f: "Gb",
    g: "Ab",
    h: "Bb"
};

Keys.forEach((key) => {
    key.addEventListener("click", function (e) {
        const button = e.target;
        const audio = new Audio(button.getAttribute("src"));
        audio.play();
        button.style.marginTop = "4px";
        button.style.boxShadow = "0px";
        button.style.backgroundColor = "whitesmoke";

        setTimeout(() => {
            button.style.marginTop = "0px";
            button.style.boxShadow = "0px 4px 1px #6c6c6c";
            if (button.classList.contains("white")) {
                button.style.backgroundColor = "#EDEDDD";
            } else {
                button.style.backgroundColor = "#111111";
            }
        }, 500);
    });
});

window.matchMedia("(orientation: landscape)").addEventListener('change', function (e) {
    const landscape = e.matches;
    if (landscape) {
        if (body.style.backgroundColor === "white") {
            body.style.visibility = "visible";
            body.style.backgroundColor = "#4C4A30";
            body.innerHTML=html;
            location.reload();
        }
    }
    else {
        body.innerHTML='';
        body.style.backgroundColor = "white";
        body.textContent=`make it your orientation in landscape to use this`;
    }
})

const show = document.getElementById("s1");
const play = document.getElementById("s2");

document.getElementById("textChanger").addEventListener("click",function(e){
    const p = e.target;
    if(p.id==="s1"){
        show.style.backgroundColor="#EDEDDD";
        play.style.backgroundColor="#4c4a30aa";
    }
    else{
        show.style.backgroundColor="#4c4a30aa";
        play.style.backgroundColor="#EDEDDD";
    }
})

document.addEventListener('keydown', function (e) {
    const key = e.key;
    const audio = new Audio();
    try {
        const button = document.getElementById(keyBoard[key]);
        if (button.getAttribute("id") === 'C') {
            audio.src = 'notes/C.mp3';
            audio.play();
        }
        else if (button.id === 'D') {
            audio.src = 'notes/D.mp3';
            audio.play();
        }
        else if (button.id === 'E') {
            audio.src = 'notes/E.mp3';
            audio.play();
        }
        else if (button.id === 'F') {
            audio.src = 'notes/F.mp3';
            audio.play();
        }
        else if (button.id === 'G') {
            audio.src = 'notes/G.mp3';
            audio.play();
        }
        else if (button.id === 'A') {
            audio.src = 'notes/A.mp3';
            audio.play();
        }
        else if (button.id === 'B') {
            audio.src = 'notes/B.mp3';
            audio.play();
        }
        else if (button.id === 'Db') {
            audio.src = 'notes/Db.mp3';
            audio.play();
        }
        else if (button.id === 'Eb') {
            audio.src = 'notes/Eb.mp3';
            audio.play();
        }
        else if (button.id === 'Gb') {
            audio.src = 'notes/Gb.mp3';
            audio.play();
        }
        else if (button.id === 'Ab') {
            audio.src = 'notes/Ab.mp3';
            audio.play();
        }
        else if (button.id === 'Bb') {
            audio.src = 'notes/Bb.mp3';
            audio.play();
        }
        else {
            console.log("wrong key");
        }
        button.style.marginTop = "4px";
        button.style.boxShadow = "0px";
        button.style.backgroundColor = "whitesmoke";
        setTimeout(() => {
            button.style.marginTop = "0px";
            button.style.boxShadow = "0px 4px 1px #6c6c6c";
            if (button.classList.contains("white")) {
                button.style.backgroundColor = "#EDEDDD";
            } else {
                button.style.backgroundColor = "#111111";
            }
        }, 500);
    } catch (error) {
        console.log(error);
    }
})