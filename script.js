const btn_expand = document.querySelector("#expand-text")
const text = document.querySelector("#text_hidden")
const change_button = document.querySelector("#change-page")
const initial_container = document.querySelector("#initial-container")
// main page

const main_container = document.querySelector("#container")



// expandir texto
btn_expand.addEventListener('click',  () => {
    btn_expand.style.display = "none"
    text.style.display ="inline"
})

//mudar de pagina

change_button.addEventListener('click', () => {
    initial_container.classList.add("trocar_pagina")
    setTimeout(() => {
        main_container.style.display = "flex";
    }, 850); 
  
})

