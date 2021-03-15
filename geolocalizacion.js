const d = document,
     n = navigator,
     w = window;

export default function geoleo(id,idGeoMaps,mq,mapDesktop) {
    const $geoId = d.getElementById(id),
         succes=(position)=>{
            let coords = position.coords,
                 mQ = w.matchMedia(mq);

            const responsive=(e)=>{
                if(e.matches)d.getElementById(idGeoMaps).innerHTML= `${mapDesktop}`
            }
            mQ.addListener(responsive)
            responsive(mQ)
            $geoId.innerHTML = 
            `<ul>
                <li>latitude:<b>${coords.latitude}</b></li>
                <li>longitude:<b>${coords.longitude}</b></li>
                <li>precisión:<b>${coords.accuracy}</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},
            10z" target="_blank" reel="noopener">Ver en google Maps</a>
            `;
            
         },
         error=(err)=>{
             $geoId.innerHTML = `Error ${err.code}: ${err.message}`
             console.log(`Error:${err.code},${err.message}`);
         },
         options = {
            enableHighAccuraciy:true,//<==== Aumenta la precision de la ubicacion
            timeout:5000,//<== tiempo que puede esperar por una respuesta
            maximumAge:0//<== cuando tome de nuevo la lectura no hara referencia a la anterior lectura
         }

    n.geolocation.getCurrentPosition(succes,error,options)
}