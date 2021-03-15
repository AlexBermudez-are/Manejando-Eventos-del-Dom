const d = document,
    w = window,
    n = navigator;

export default function filtro(cardF,card){
    d.addEventListener("keyup",e=>{
        if(e.target.matches(cardF)){
            if(e.key.value === "escape") e.target.value="";
            d.querySelectorAll(card).forEach((el)=>{
                el.textContent.toLowerCase().includes(e.target.value)//<=== el valor almacenado de cardF
                 ? el.classList.remove("filter")
                 : el.classList.add("filter")
            })
        }
    })
        
}   