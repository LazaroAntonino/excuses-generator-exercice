const imagenes = {
    "Mi perro": ["https://media.istockphoto.com/id/147694372/es/foto/servicio-badger-perro.jpg?s=612x612&w=0&k=20&c=ESr7mH0DJR29hQ-EXlYixjsZRKFIFg61TUviINtwabY=","https://pbs.twimg.com/profile_images/993148468318343173/eUEvdN4x_400x400.jpg","https://ih1.redbubble.net/image.714377953.1796/st,small,507x507-pad,600x600,f8f8f8.u4.jpg","https://ih1.redbubble.net/image.1795178441.4697/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"],
    "El fontanero": ["https://www.diariodealcala.es/wp-content/uploads/2018/11/fontanero.png","https://static8.depositphotos.com/1192060/838/i/450/depositphotos_8386494-stock-photo-head-and-shoulders-portrait-of.jpg","https://mallorcarepara.com/wp-content/uploads/2023/02/la-responsabilidad-civil-de-un-fontanero-1.jpg","https://www.campustraining.es/wp-content/uploads/2021/09/FONTANERO-SUELDO.jpg"],
    "Mi vecino": ["https://www.sopitas.com/wp-content/uploads/2024/02/pesadilla-vecino-incomodo-ruido-que-hacer-vecinal-administracion-denuncia.jpeg","https://www.solucionesespeciales.net/wp-content/uploads/Padecer-las-reformas-del-vecino.webp","https://images.squarespace-cdn.com/content/v1/5148b380e4b0106646129f8e/1614020679633-0MZI383LTLO9F5OFGWYS/un-verdadero-vecino+2045.jpg","https://e7.pngegg.com/pngimages/175/403/png-clipart-hello-neighbor-video-game-stealth-game-thief-the-dark-project-assassin-s-creed-origins-others-miscellaneous-game.png"],
    "Un extraterrestre": ["https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450","https://ih1.redbubble.net/image.1221766718.2238/flat,750x,075,f-pad,750x1000,f8f8f8.jpg","https://www.atlanticohoy.com/uploads/s1/33/38/06/1/diseno-sin-titulo-2025-01-22t121912-725.webp","https://media.istockphoto.com/id/1397345519/es/foto/friendly-alien-haciendo-un-gesto-con-la-mano-del-coraz%C3%B3n.jpg?s=612x612&w=0&k=20&c=Lir2ekS8i4k1lbOq7ooTbdYzowz5-yTeR8PtGWskcD8="]
};
function generarExcusa(){
    const sujetos = ["Mi perro", "El fontanero", "Mi vecino", "Un extraterrestre"];
    const acciones = ["se comió los deberes", "inundó la casa", "robó mi coche", "se llevó mis llaves", "se meo en mi felpudo", "me obligó a hacerle la comida"];
    const momentos = ["ayer por la noche", "esta mañana", "hace un rato", "cuando iba a salir","hace 10 segundos"];

    const sujeto = sujetos[Math.floor(Math.random()*sujetos.length)];
    const accion = acciones[Math.floor(Math.random()*acciones.length)];
    const momento = momentos[Math.floor(Math.random()*momentos.length)];

    const excusa = `${sujeto} ${accion} ${momento}.`;
    document.getElementById("excuse").innerText = excusa;

    if (imagenes[sujeto]){
        const imagenseleccionada = imagenes[sujeto][Math.floor(Math.random()*imagenes[sujeto].length)];
        document.body.style.backgroundImage=`url('${imagenseleccionada}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
}

document.getElementById("generate-btn").addEventListener("click",generarExcusa);
document.addEventListener("DOMContentLoaded", generarExcusa);