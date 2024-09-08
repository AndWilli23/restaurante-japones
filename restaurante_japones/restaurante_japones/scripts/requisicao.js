// arquivo para a requisiçoes *-*

const pegaPratos = async () => {

    const pratos = await fetch("https://tech4japa.fly.dev/produtos"); //GET de todos

    const verificaPratos = await pratos.json();

    return verificaPratos;
}


export { pegaPratos }

