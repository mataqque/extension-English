document.getElementById("llamada").addEventListener("click",function llamada(){
    $.ajax({
        url:"/public/oracioningles.json",
        method:"GET",
        success:function(data){
            console.log(data)
            document.getElementById("contenedor-traduccion").textContent = data
        }
    })
}) 
