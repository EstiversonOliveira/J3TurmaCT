const url= "https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/transporte/transporte-dados-globais.json"

async function visualizarInformacoesGlobais(){
    const resposta = await fetch (url);
    let dados = await resposta.json;
    console.log(dados);
}
visualizarInformacoesGlobais();