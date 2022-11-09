function logar() {

    let login = document.getElementById('icon_prefix');
    let senha = document.getElementById('icon_telephone');

    setTimeout(() => {
        if (login.value == 'market@etec.com' && senha.value == 'mark123') {
            window.location.href = "system/system.html";
        }
    }, 1000);
}

function cadastrar() {
    alert('Segmento cadastrado com sucesso!');
    window.close();
}