const d = document,
     w = window;

export default function media(id,mq,mobile,desktop) {
    let mQ = w.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktop;
        }else{
            d.getElementById(id).innerHTML = mobile
        }
    }
    
    mQ.addListener(responsive)
    responsive(mQ)
}