const d = document,
     n = navigator

export default function deviceVideo(id) {
    const $cam = d.getElementById(id)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
         .getUserMedia({video:true,audio:true})
         .then((stream=>{
             $cam.srcObject=stream;
             $cam.play();
            })
         )
         .catch((err)=>{
             $cam.insertAdjacentHTML("afterend",`La camara fallo debido a <h3><b>${err}</b></h3>`)
             $cam.style.marginLeft = "5000px"
            })
    }
}