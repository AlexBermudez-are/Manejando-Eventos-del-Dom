const d = document;

export default function scrollSPY(){
    const $allSection = d.querySelectorAll("section[data-scroll-spy]"),
         cb=(entries)=>{ //<=== callback de observer
             entries.forEach((entrada)=>{
                 const id = entrada.target.getAttribute("id")
                 if(entrada.isIntersecting){
                     d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("scrollSpy")
                 }else{
                    d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("scrollSpy")
                 }
             })
         }
    const observer = new IntersectionObserver(cb,{
        //root es un atributo que maneja el tamaño que se va a evaluar de section X a section Y
        // rootMargin: "-300px" Achica el tamaño hacia los 4 lados
        threshold: [0.5]//se pueden especificar limites del .5 = 50% al .75 = 75% 
    });
    $allSection.forEach((el)=>{observer.observe(el)})
}