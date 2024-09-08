const paragrafo = document.createElement("p")

paragrafo.id = "horas"

document.body.appendChild(paragrafo);

const horasNaTela = () => {
    const pegaHorario = new Date()

    const horas = pegaHorario.getHours()

    const minutos = pegaHorario.getMinutes()

    const segundos = pegaHorario.getSeconds()

    const horasFaltantes24h = 23 - horas 

    const minutosFaltantes24h = 59 - minutos

    const segundosFaltantes24h = 59 - segundos

    const listaHorario = [horasFaltantes24h, minutosFaltantes24h, segundosFaltantes24h]

    return listaHorario;
}

let contagem = horasNaTela()
setInterval(() => {

   contagem[2]--;

    if (contagem[2] < 0) {
        contagem[1]--;
        contagem[2] = 59
    } 

    if (contagem[1] < 0) {
        contagem[0]--
        contagem[1] = 59;
    } 

    if (contagem[0] < 0) {
        contagem[0] = 23    
    }
        
    const exbicaoHora = document.getElementById("horas")

    exbicaoHora.style = "color: red; padding: 1rem 0rem 1.5rem 0rem; text-align: center; font-size:20px"
    
    exbicaoHora.innerHTML = (`As ofertas exclusivas terminam em: ${String(contagem[0]).padStart(2, "0")} : ${String(contagem[1]).padStart(2, "0")} : ${String(contagem[2]).padStart(2, "0")}`);

    
    
}, 1000);

