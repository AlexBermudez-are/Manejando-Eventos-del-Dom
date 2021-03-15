const d = document,
     ls = localStorage;

export default function darkmode (btn_Dark, dark_theme){
    const $btnD = d.querySelector(btn_Dark),
         $dataD = d.querySelectorAll("[data-dark]"),
         moon = "🌙",
         sun = "☀️";

    const darkMode = () => {
            $dataD.forEach(el => el.classList.add(dark_theme))
            $btnD.textContent = sun; 
            ls.setItem("theme","dark")
        }

    const lightMode = () => {
            $dataD.forEach(el => el.classList.remove(dark_theme))
            $btnD.textContent = moon;
            ls.setItem("theme","light")
        }

    d.addEventListener("click", e =>{
        if(e.target.matches(btn_Dark)){
            if($btnD.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    })
    d.addEventListener("DOMContentLoaded", e =>{
        if(ls.getItem("theme") === null) ls.setItem("theme","light");
        
        if(ls.getItem("theme") === "light") lightMode();

        if(ls.getItem("theme") === "dark") darkMode();
    })
}