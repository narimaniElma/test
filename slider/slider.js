let images = ["beach1", "beach3", "beach4", "jungle1", "jungle2", "jungle3", "jungle4"];
let myImg = document.getElementById('slide');
document.getElementById('next').addEventListener('click', nextImg)
document.getElementById('pre').addEventListener('click', preImg)
let i = 0;

function nextImg() {
    if (i < images.length - 1) {
        myImg.src = `images/${images[i + 1]}.jpg`;
        console.log(images[i + 1]);
        i++;
    }
    // else {
    //     i = 0
    //     myImg.src = "images/" + images[i] + ".jpg";
    //     console.log(images[i]);
    // }
}

function preImg() {
    if (i < images.length && i > -1) {
        myImg.src = "images/" + images[i] + ".jpg";
        console.log(images[i]);
        i--;
    }
    // else {
    //     i = 0
    //     myImg.src = "images/" + images[i] + ".jpg";
    //     console.log(images[i]);
    // }
}

// change img with arows key
document.addEventListener('keyup', (event) => {
    if (event.key === "ArrowUp") {
        return nextImg();
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowDown") {
        return preImg();
    }
})

// change img with scroll
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    if (delta == -1) {
        return nextImg();
    } else {
        return preImg();
    }
});

