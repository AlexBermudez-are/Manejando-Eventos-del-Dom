const d = document,
    w = window;

export function carruselD(){
    let i = 0,
    temporizador;
    const $carruselA = d.querySelector(".next"),
          $carruselB = d.querySelector(".prev"),
          $carruselImages = d.querySelectorAll(".carrusel-img"),
          timeOutIn=()=>{
            $carruselImages[i].classList.remove("is-active")
            i++;
            $carruselImages[i].classList.add("is-active")
          }
    
    d.addEventListener("DOMContentLoaded",e=>{
        function si(){
            temporizador = setInterval(() => {
                    if(i>=$carruselImages.length-1){
                        $carruselImages[i].classList.add("is-active")
                        i++
                        $carruselImages[3].classList.remove("is-active")
                        i = 0
                        $carruselImages[i].classList.add("is-active")
                    }else{
                        timeOutIn()
                    }
            }, 2000);
        }
        d.addEventListener("click",e=>{
            if(e.target === $carruselA){
                e.preventDefault();
                clearInterval(temporizador)
                if(i>=$carruselImages.length-1){
                    $carruselImages[i].classList.remove("is-active")
                    i=0
                    $carruselImages[i].classList.add("is-active")
                    si()
                }else{
                    $carruselImages[i].classList.remove("is-active")
                    i++;
                    $carruselImages[i].classList.add("is-active")
                    si()
                }
            }
            if (e.target === $carruselB) {
                e.preventDefault()
                clearInterval(temporizador)
                if(i<=0){
                    $carruselImages[i].classList.remove("is-active")
                    i=$carruselImages.length-1
                    $carruselImages[i].classList.add("is-active")
                    si()
                }else{
                    $carruselImages[i].classList.remove("is-active")
                    i--;
                    $carruselImages[i].classList.add("is-active")
                    si()
                }
            }
        })
        return si();
    })
}