let colors = ["green", "blue", "brown","purple"]

let changerBtn = document.querySelector("#colorchanger")
changerBtn.style.border = "2px solid red"


changerBtn.addEventListener("click", ()=>{
    console.log("btn clicked!!");

    document.body.style.color = colors[Math.floor(Math.random()*3)]

})

