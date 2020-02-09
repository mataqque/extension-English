var contenido;
$(document).ready(()=>{
    $.ajax({
        url:"/public/oracioningles.json",
        method:"GET",
        success:function(data){
            contenido = data;
            start_again();
        }
    })
});
document.getElementById("llamada").addEventListener("click",start_again);

var random = function(){
    let numeral = Math.floor((Math.random()*contenido.length));
    return numeral; 
}

function start_again(){
    if(document.getElementsByClassName("mostrar_eye")[0].id=="active"){
        let num = contenido[random()];
        document.getElementById("contenido_esp").textContent = num["español"];
        document.getElementsByClassName("oracion_ingles")[0].textContent = num["ingles"];
        document.getElementsByClassName("mostrar_eye")[0].id="inactive"
    }
    if(document.getElementsByClassName("mostrar_eye")[0].id=="inactive"){
        document.getElementsByClassName("mostrar_eye")[0].style.display="block";
        document.getElementsByClassName("oracion_ingles")[0].style.display="none";
    }

}
document.getElementsByClassName("mostrar_eye")[0].addEventListener("click",function(){
    document.getElementsByClassName("oracion_ingles")[0].style.display="block";
    document.getElementsByClassName("mostrar_eye")[0].style.display="none";
    document.getElementsByClassName("mostrar_eye")[0].id="active";
});

