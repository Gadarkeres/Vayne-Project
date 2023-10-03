// pagina inicial
const btn_expand = document.querySelector("#expand-text");
const text = document.querySelector("#text_hidden");
const change_button = document.querySelector("#change-page");
const initial_container = document.querySelector("#initial-container");
const reset_button = document.querySelector("#reset_button");
const background = document.querySelector("#background")

// pagina incial /

// pagina principal

//habilidades
const habilityQ = document.querySelector("#habilityQ");
const habilityW = document.querySelector("#habilityW");
const habilityE = document.querySelector("#habilityE");
const habilityR = document.querySelector("#habilityR");

const svg = document.querySelector("#svg");
const svg2 = document.querySelector("#svg2");
const svg3 = document.querySelector("#svg3");
const svg4 = document.querySelector("#svg4");

const main_container = document.querySelector("#container");

const text_hability1 = document.querySelector("#text-hability1");
const text_hability2 = document.querySelector("#text-hability2");
const text_hability3 = document.querySelector("#text-hability3");
const text_hability4 = document.querySelector("#text-hability4");


// mudar tema

const red_theme = document.querySelector("#red_theme");
const blue_theme = document.querySelector("#blue_theme");
const container_display = document.querySelector("#panel_theme");
const title = document.querySelector("#title");


// abrir e fechar menu
const close_menu = document.querySelector('#close_menu')
const open_menu = document.querySelector('#hamburguer_menu')
const menu = document.querySelector('#menu')
const menu_text = document.querySelectorAll(".menu_text")
const btn_scroll = document.querySelector("#btn_scroll")


// macthups
const hard = document.querySelector('#hard')
const medium = document.querySelector('#medium')
const easy = document.querySelector('#easy')

const svgm1 = document.querySelector('#svgm1')
const svgm2 = document.querySelector('#svgm2')
const svgm3 = document.querySelector('#svgm3')












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
  setTimeout (() => {
    initial_container.style.display = 'none'
  },800)
  setTimeout(() => {
    main_container.style.display = "flex";
    body.style.min_height = "100vh";
  }, 800);
});
// voltar pagina
const resetInitialContainer = () => {
  initial_container.classList.add("reset_page");
  main_container.style.display = "none";

  setTimeout(() => {
    initial_container.classList.remove("trocar_pagina");
  }, 850);
    initial_container.style.display = 'flex'

};

reset_button.addEventListener("click", resetInitialContainer);

// Função para expandir/contrair habilidades
const toggleHability = (hability, svg, text_hability) => {
  const isExpanded = hability.classList.contains("hability_expand");

  if (isExpanded) {
    setTimeout(() => {
      text_hability.style.display = "none";
    }, 350);

    hability.scrolltop = 0;
    hability.classList.remove("hability_expand");
    svg.classList.remove("svg_transform");
    svg.classList.add("svg_back");
    svg.style.top = "35px";
    svg.style.right = "30px";
  } else {
    text_hability.style.display = "block";
    hability.classList.add("hability_expand");
    svg.classList.remove("svg_back");
    svg.classList.add("svg_transform");
  }
};

// Event listeners para cada habilidade
habilityQ.addEventListener("click", () => {
  toggleHability(habilityQ, svg, text_hability1);
});

habilityW.addEventListener("click", () => {
  toggleHability(habilityW, svg2, text_hability2);
});

habilityE.addEventListener("click", () => {
  toggleHability(habilityE, svg3, text_hability3);
});

habilityR.addEventListener("click", () => {
  toggleHability(habilityR, svg4, text_hability4);
});



// theme
red_theme.addEventListener("click", () => {
  changeTheme("red_theme");
});
blue_theme.addEventListener("click", () => {
  changeTheme("blue_theme");
});

const changeTheme = (theme) => {
  if (theme === "red_theme") {
    blue_theme.style.backgroundColor = 'transparent'
    red_theme.style.backgroundColor = '#92111d'
    container_display.classList.add("red_panel");
    background.classList.add(theme);
    const habilityElements = document.querySelectorAll(".hability");
    habilityElements.forEach((element) => {
      element.style.border = "2px solid #92111d";

      setTimeout(() => {
        const title = document.querySelectorAll(".color_title");
        title.forEach((element) => {
          element.style.color = "#92111d";
        });
      }, 300);
    });
  } else {
    blue_theme.style.backgroundColor = '#2a91cc'
    red_theme.style.backgroundColor = 'transparent'
    container_display.classList.remove("red_panel");
    background.classList.remove("red_theme");
    const habilityElements = document.querySelectorAll(".hability");
    habilityElements.forEach((element) => {
      element.style.border = "2px solid #2a91cc";

      setTimeout(() => {
        const title = document.querySelectorAll(".color_title");
        title.forEach((element) => {
          element.style.color = "#2a91cc";
        }, 300);
      });
    });
  }
};

// menu



open_menu.addEventListener('click', () => {
  openMenu()
  })

  const openMenu = () => {
    menu.style.display = 'block'
  }

  const closeMenu = () => {
    menu.style.display = 'none'
  }


close_menu.addEventListener('click', () => {
closeMenu()
})

menu_text.forEach((item) => {
  const isMobile = window.innerWidth <= 1030;
  if(isMobile){
 
      item.addEventListener('click', () => {
     
    closeMenu();
  });
  }

});

// scroll
const checkVisibility = () => {
  const screenWidth = window.innerWidth
  const scrollY = window.scrollY

  if(screenWidth > 1030 && scrollY > 350){
    btn_scroll.style.opacity = '1'
    btn_scroll.disabled = false;
  }else {
    btn_scroll.style.opacity = '0'
    btn_scroll.disabled = true;
  }
}

window.addEventListener('load', checkVisibility);


window.addEventListener('scroll', checkVisibility);

btn_scroll.addEventListener('click', () => {
  if (!btn_scroll.disabled) { 
    btn_scroll.disabled = true; 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
  
    setTimeout(() => {
      btn_scroll.disabled = false;
    }, 1000); 
  }
});


// expandir macthups

const expand_Matchups = (macthup, svgm) => {
  isExpanded = macthup.classList.contains('macthup_expand')
  const subcontainer = macthup.querySelector('.subcontainer')
  if (isExpanded){
    macthup.classList.remove('macthup_expand')
    svgm.style.transform = 'rotate(0deg)'
    macthup.style.height = '3.3rem'
    macthup.style.overflow = 'hidden'
    subcontainer.style.display = 'none'
  } else{
    macthup.classList.add('macthup_expand')
    macthup.style.height = '17rem'
    svgm.style.transform = 'rotate(180deg)'
    macthup.style.overflow = 'auto'
    subcontainer.style.display = 'flex'
    
  }
}

hard.addEventListener('click', () => {
  macthup = hard
  svgm = svgm1

  expand_Matchups(macthup, svgm)
})
medium.addEventListener('click', () => {
  macthup = medium
  svgm = svgm2

  expand_Matchups(macthup, svgm)
})

easy.addEventListener('click', () => {
  macthup = easy
  svgm = svgm3

  expand_Matchups(macthup, svgm)
})




