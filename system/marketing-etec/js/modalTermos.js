const btnOpen = document.querySelector(".termos-link");
const modalTermos = document.querySelector(".modal-termos");
const btnClose = document.querySelector(".btn-close");


btnOpen.onclick = function () {
    modalTermos.showModal();
}

btnClose.onclick = function () {
    modalTermos.close();
}


// //modal cadastrar
// const btnOpenCad= document.querySelector(".btn-modal_cadastrado");
// const modalCad = document.querySelector(".modal-cadastrado");
// const btnCloseCad = document.querySelector(".btn-close-cadastro");


// btnOpenCad.onclick = function(){
//     modalCad.showModal();
// }

// btnCloseCad.onclick = function(){
//     modalCad.close();
// }


