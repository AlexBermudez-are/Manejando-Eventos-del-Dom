const d = document,
     w = window,
     n = navigator;

    
export default function sorteo(id,players){
    const winner=()=>{
        const $btnS = d.querySelector(id),
            $players = d.querySelectorAll(players)
        let mathR = Math.floor(Math.random()*$players.length),
            ganador = $players[mathR]
            return `Ganador: ${ganador.textContent}`
    }
    d.addEventListener("click",e=>{
        if(e.target.matches(id)){
            let result = winner();
            alert(result)
        }
    })
}