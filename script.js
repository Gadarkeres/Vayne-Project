const btn_expand = document.querySelector("#expand-text");
const text = document.querySelector("#text_hidden");
const change_button = document.querySelector("#change-page");
const initial_container = document.querySelector("#initial-container");
const reset_button = document.querySelector("#reset_button");
const body = document.querySelector("#body")
// main page
const habilityQ = document.querySelector("#habilityQ")
const habilityW = document.querySelector("#habilityW")
const habilityE = document.querySelector("#habilityE")
const habilityR = document.querySelector("#habilityR")

const svg = document.querySelector("#svg")
const svg2 = document.querySelector("#svg2")
const svg3 = document.querySelector("#svg3")
const svg4 = document.querySelector("#svg4")

const main_container = document.querySelector("#container");

// expandir texto
btn_expand.addEventListener("click", () => {
  btn_expand.style.display = "none";
  text.style.display = "inline";
});

//mudar de pagina
change_button.addEventListener("click", () => {
  if (initial_container.classList.contains("reset_page")) {
    initial_container.classList.remove("reset_page");
  }
  initial_container.classList.add("trocar_pagina");
  setTimeout(() => {
    main_container.style.display = "flex";
    body.style.min_height = "100vh"
  }, 800);
});
// voltar pagina
const resetInitialContainer = () => {
  initial_container.classList.remove("trocar_pagina");
  initial_container.classList.add("reset_page");
  main_container.style.display = "none";
  
  setTimeout(() => {
    
    body.style.height = "0vw"
  }, 800);  

};

reset_button.addEventListener("click", resetInitialContainer);


// habilidades

habilityQ.addEventListener('click', () => {
  if(habilityQ.classList.contains ('hability_expand') && (svg.classList.contains('svg_transform'))){
    svg.classList.remove('svg_transform')
    svg.classList.add('svg_back')
    habilityQ.classList.remove('hability_expand')
  }else {
    habilityQ.classList.add('hability_expand')
    svg.classList.add("svg_transform")
  }
 
})
habilityW.addEventListener('click', () => {
    if(habilityW.classList.contains ('hability_expand') && (svg2.classList.contains('svg_transform'))){
      svg2.classList.remove('svg_transform')
      svg2.classList.add('svg_back')
      habilityW.classList.remove('hability_expand')
    }else {
      habilityW.classList.add('hability_expand')
      svg2.classList.add("svg_transform")
    }
   
  })
  habilityE.addEventListener('click', () => {
    if(habilityE.classList.contains ('hability_expand') && (svg3.classList.contains('svg_transform'))){
      svg3.classList.remove('svg_transform')
      svg3.classList.add('svg_back')
      habilityE.classList.remove('hability_expand')
    }else {
      habilityE.classList.add('hability_expand')
      svg3.classList.add("svg_transform")
    }
   
  })
  habilityR.addEventListener('click', () => {
    if(habilityR.classList.contains ('hability_expand') && (svg4.classList.contains('svg_transform'))){
      svg4.classList.remove('svg_transform')
      svg4.classList.add('svg_back')
      habilityR.classList.remove('hability_expand')
    }else {
      habilityR.classList.add('hability_expand')
      svg4.classList.add("svg_transform")
    }
   
  })
  

// habilidades /

