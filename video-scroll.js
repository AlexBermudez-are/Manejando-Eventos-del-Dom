const d = document,
    w = window;
export default function videos() {
    const $videos = d.querySelector("[data-videos]"),
         cb=(entrada)=>{
             for (const dataV of entrada) {
                w.addEventListener("visibilitychange",e=>{
                    (d.visibilityState===`visible`)?dataV.target.play():dataV.target.pause()
                })
                 if(dataV.isIntersecting){
                     dataV.target.play();
                 }else{
                     dataV.target.pause();
                }
             }
         }
    
    const $observer = new IntersectionObserver(cb,{
        threshold: 0.5
    })
    $observer.observe($videos)
}