import  ball  from "./atajos_Teclado.js";
import hamburger from "./menú-Hamburguesas.js";
import cont from "./cuenta_regresiva.js";
import scroll from "./boton_scroll.js"
import darkmode from "./dark_mode.js";
import media from "./responsive_responsible_desing.js";
import tester from "./prueba_responsive.js";
import us from "./user_agent.js";
import onLineMetod from "./metodo_on-off_line.js";
import deviceVideo from "./webcam_permiso.js";
import geoleo from "./geolocalizacion.js";
import filtro from "./filtro_de_Busqueda.js";
import sorteo from "./sorteo_Digital.js";
import { carruselD } from "./carrusel.js";
import scrollSPY from "./scroll-spy.js";
import videos from "./video-scroll.js";
import formulario from "./formulario.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburger(".panel-btn",".panel",".menu a")
    cont(".cuenta_regresiva","december 24, 2021")
    scroll(".btn_top_scroll")
    media("youtube","(min-width: 1024px)",`<a href ="https://youtu.be/vy2gCrOvy0A" target="_blank"> Ver Video </a>`,`<iframe width="760" height="315" src="https://www.youtube.com/embed/vy2gCrOvy0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    media("google_Maps","(min-width: 1024px)",`<a href ="https://goo.gl/maps/LAeZzJGafrnNyftM8"> Ver Mapa </a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12569.620524145002!2d-57.58360415421576!3d-38.037645469335885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584def6eaf4fc6b%3A0xdc1689acfe5dd3!2sRinc%C3%B3n%20Dulce!5e0!3m2!1ses!2sar!4v1614717837769!5m2!1ses!2sar" width="760" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    tester("windows_close_open")
    us("user_agent")
    deviceVideo("webcam")
    geoleo("geo","geoMaps","(min-width: 1024px)",`<iframe src="https://www.google.com/maps/embed?pb=!4v1615064908258!6m8!1m7!1srFHi1OpHAftzpRutmdhfpA!2m2!1d-37.99793773677948!2d-57.54904095314244!3f165.49830510540647!4f8.33467557021487!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    filtro(".card-filter",".card")
    sorteo(".sorteo_Digital",".jugadores")
    scrollSPY()
    videos()
    formulario()
})
d.addEventListener("keydown", e=>{
    ball(e,".ball",".stage")
})

darkmode(".btn_left_dark_mode", "dark-mode")
onLineMetod(".offlineT",".onlineT");
carruselD()