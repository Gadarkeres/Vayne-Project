// pagina inicial
const btn_expand = document.querySelector("#expand-text");
const text = document.querySelector("#text_hidden");
const change_button = document.querySelector("#change-page");
const initial_container = document.querySelector("#initial-container");
const reset_button = document.querySelector("#reset_button");
const body = document.querySelector("#body")

// pagina principal
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
  
  initial_container.classList.add("reset_page");
  main_container.style.display = "none";
  
  setTimeout(() => {
    
    initial_container.classList.remove("trocar_pagina");
  }, 850);  

};

reset_button.addEventListener("click", resetInitialContainer);



// Função para expandir/contrair habilidades
const toggleHability = (hability, svg) => {
  const isExpanded = hability.classList.contains('hability_expand');
  
  if (isExpanded) {
    hability.scrolltop = 0
    hability.classList.remove('hability_expand');
    svg.classList.remove('svg_transform');
    svg.classList.add('svg_back');
    svg.style.top ='35px'
    svg.style.right ='30px'
   
  } else {
    hability.classList.add('hability_expand');
    svg.classList.remove('svg_back');
    svg.classList.add('svg_transform');
  }
};

// Event listeners para cada habilidade
svg.addEventListener('click', () => {
  toggleHability(habilityQ, svg);
});

svg2.addEventListener('click', () => {
  toggleHability(habilityW, svg2);
});

svg3.addEventListener('click', () => {
  toggleHability(habilityE, svg3);
});

svg4.addEventListener('click', () => {
  toggleHability(habilityR, svg4);
});

