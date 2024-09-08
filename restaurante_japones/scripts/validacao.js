const validaEntrada = async () => {

    let entrada = document.getElementById("email").value

    const alerta =  Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });

    if(entrada === "") {
        
        const { value: text } = await Swal.fire({
            title: "Digite seu email",
            input: "text",
            inputLabel: "Seu conta email",
            inputPlaceholder: "Insira seu email:"
          });

          if (text) {
            entrada = document.getElementById("email").value = text;
        } else {
            alert("O email precisa ser cadastrado para recebimento das promoções");
            return;
        }     
    } 
    
    if (entrada.length < 10) {
        alerta.fire({
            icon: "error",
            title: "Não pode possuir menos de 10 caracteres"
          });
          return;
    } 
    const ocorrencia = entrada.indexOf("@")
    if(ocorrencia === -1 || entrada.indexOf("@", ocorrencia + 1) !== -1) {
        alerta.fire({
            icon: "error",
            title: "Para cadastrar o Email é necessário possuir exatamente um @"
          });
          return;
    }
    
    if(entrada.lastIndexOf(".") < entrada.indexOf("@") || entrada.lastIndexOf(".") === entrada.length - 1) {
        alerta.fire({
            icon: "error",
            title: "É necessário possuir pelo menos '.' depois do @"
          });
          return;   
    } 


    validaCheck(entrada)
    validaNome(entrada)
}

const validaCheck = (entrada) => {

    const check = document.getElementById("check")
    const aviso = document.getElementById("aviso")
    const mensagemAviso = document.getElementById("mensagemAviso")


    if (!check.checked) {
        aviso.style = "background-color: rgb(255, 55, 55); padding: .2rem .4rem; border-radius: 8px; color: white"
        mensagemAviso.innerHTML = "Você precisa aceitar os termos de uso"
        mensagemAviso.style.color = "red"
    } else{
        aviso.style = ""
         mensagemAviso.innerHTML = ""
    }

    if (entrada && check.checked) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `O email foi cadastrado com sucesso`,
            showConfirmButton: false,
            timer: 1500
          });
    }
}

const validaNome = () => {

    const nome = document.getElementById("nome")
    
    if (nome.value.trim() === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `O nome deve ser preenchido!`,
            showConfirmButton: false,
            timer: 1500
          });
    }
}
addEventListener