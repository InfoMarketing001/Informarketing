let btnCad = document.querySelector("#btn-cadastrar");

let validar = false;

function validarInput(e){
    if(e != null)
    validar = true;
}
btnCad.addEventListener("click", function (){
        if(validar){
            alert("Obrigado por se cadastrar!");
            window.location.href = "../../../../index.html";
        }
    }
)








