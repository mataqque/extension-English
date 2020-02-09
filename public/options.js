var contenido;
document.getElementById("llamada").addEventListener("click",function llamada(){
    $.ajax({
        url:"/public/oracioningles.json",
        method:"GET",
        success:function(data){
            contenido = data;
            mostrar();
        }
    })
});

var random = function(){
    let numeral = Math.floor((Math.random()*contenido.length));
    return numeral; 
}

function mostrar(){
    let num = contenido[random()];
    document.getElementById("contenido_esp").textContent = num["español"];
}
document.getElementsByClassName("mostrar_eye")[0].addEventListener("click",function(){
    document.getElementsByClassName("oracion_ingles")[0].style.setProperty("--none","block")
    document.getElementsByClassName("mostrar_eye")[0].style.setProperty("--block","none");
})