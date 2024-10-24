const url= "https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json"

async function visualizarInformacoesGlobais(){
    const resposta = await fetch (url);
    let dados = await resposta.json();
    console.log(dados);

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} pessoas?`
    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
}
visualizarInformacoesGlobais();