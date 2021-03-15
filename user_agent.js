const d = document,
     n = navigator,
     ua = n.userAgent;

export default function us(id) {
    const $usA = d.getElementById(id),
         isMobile = {
             android:() => {ua.match(/android/i)},
             ios:() => ua.match(/iphone|ipad|ipod/i),
             window:() => ua.match(/windows phone/i),
             any:function(){
                return this.android() || this.ios() || this.window()
             },
         },
         isDesktop = {
             linux:()=> ua.match(/linux/i),
             mac:()=> ua.match(/mac os/i),
             window:()=> ua.match(/windows nt/i),
             any:function(){
                 return this.linux() || this.mac() || this.window();
             }
         },
         isBrowser={
            chrome:()=>ua.match(/chrome/i),
            safari:()=>ua.match(/safari/i),
            firefox:()=>ua.match(/firefox/i),
            opera:()=>ua.match(/opera|opera mini/i),
            ie:()=>ua.match(/msie|iemobile/i),
            edge:()=> ua.matches(/edge/i),
            any:function(){
                return this.chrome() || this.safari()||this.firefox()||this.opera()||this.ie()||this.edge()
            }
         }
         
         $usA.innerHTML = `
         <ul>
            <li>User Agent:<b>${ua}</b></li>
            <br>
            <br>
            <li>Plataforma:<b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
            <li>Navegador:<b>${isBrowser.any()}</b></li>
         </ul>
         `
         $usA.style.textAlign = "center"
         $usA.style.listStyle = "none"
         /*Contenido Exclusivo*/

         if(isBrowser.chrome){
             $usA.innerHTML += `<p> <mark> Este texto solo se ve en los navegadores de chrome </mark> </p>`
         }
}