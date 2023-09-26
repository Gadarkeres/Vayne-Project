const btn_expand = document.querySelector("#expand-text")
const text = document.querySelector("#text_hidden")
const change_button = document.querySelector("#change-page")
const initial_container = document.querySelector("#initial-container")
const reset_button = document.querySelector("#reset_button")
// main page

const main_container = document.querySelector("#container")



// expandir texto
btn_expand.addEventListener('click',  () => {
    btn_expand.style.display = "none"
    text.style.display ="inline"
})

//mudar de pagina
change_button.addEventListener('click', () => {
    if (initial_container.classList.contains('reset_page')) {
        initial_container.classList.remove('reset_page');
    }
    initial_container.classList.add('trocar_pagina');
    setTimeout(() => {
        main_container.style.display = 'flex';
    }, 850);
});
// voltar pagina
const resetInitialContainer = () => {
    initial_container.classList.remove("trocar_pagina");
    initial_container.classList.add("reset_page");
    main_container.style.display = "none";
}


    
reset_button.addEventListener('click', resetInitialContainer)

