const d = document;
export default function cont (selectorR,fecha,messageF) {
    const $select = d.querySelector(selectorR)

    const count = setInterval(() => {
        let date = new Date(fecha).getTime(),
             date2 = new Date().getTime(),
             rest = (date - date2),
             days = Math.floor(rest/(1000 * 60 * 60 * 24)),
             hours = Math.floor(rest % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)),
             minutes = Math.round(rest % (1000 * 60 * 60)/(1000 * 60)),
             seconds = Math.floor(rest % (1000 * 60)/(1000))
        $select.innerHTML = `<h1> Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para navidad </h1>`

        if(rest < 0){
            clearInterval(count)
            $select.innerHTML(messageF)
        }
    }, 1000);
}