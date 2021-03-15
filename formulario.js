const d = document;

export default function formulario(){
    const $nombre = d.querySelector(".contact"),
         $inputs = d.querySelectorAll(".contact [required]")
         
         $inputs.forEach((input)=>{
             const $span = d.createElement("span")
                 $span.id = input.name;
                 $span.textContent = input.title;
                 $span.classList.add("contact-error","none");
                 input.insertAdjacentElement("afterend",$span);
         })
         d.addEventListener("keyup",e=>{
             if(e.target.matches(".contact [required]")){
                 let $input = e.target,
                 pattern = $input.pattern||$input.dataset.pattern//<=== hace referencia al data-attribute de pattern en el text area
                
                 if(pattern && $input!==""){
                    let expReg = new RegExp(pattern);
                    return !expReg.exec($input.value)//<=== valida si no hay coincidencias de la expReg en el valor de los inputs
                     ? d.getElementById($input.name).classList.add("is-active")
                     : d.getElementById($input.name).classList.remove("is-active")
                 }
             }
         })
         d.addEventListener("submit",e=>{
             const $loaded = d.querySelector(".contact-form-loader"),
                 $success = d.querySelector(".contact-from-response")

                 $loaded.classList.remove("none")

                 setTimeout(() => {
                     $loaded.classList.add("none")
                     $success.classList.remove("none")
                     $nombre.reset();
                     setTimeout(() => {
                         $success.classList.add("none")
                     }, 2000);
                 }, 2000);
         })
}