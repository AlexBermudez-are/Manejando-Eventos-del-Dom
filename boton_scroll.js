const d = document,
     w = window;


export default function scroll(btn) {
    const $button = d.querySelector(btn)

    w.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            w.scrollTo({ //<==== mover la pagina a top : 0
                behavior: "smooth",
                top: 0 //<==
            })
        }
    })

    w.addEventListener("scroll", e =>{
        let page = w.pageYOffset //<==== es para medir la altura de la pagina por scroll
        if(page > 1300){ //<=== el scroll se mide de top a bottom
            $button.classList.remove("hidden")
        }else{
            $button.classList.add("hidden")
        }
    })
}