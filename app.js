var clutter = ""
for(i=1; i<= 100; i++){
    let randomNum = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${randomNum}</div>`
}

document.querySelector(".game-bottom").innerHTML = clutter;

