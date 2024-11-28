
const url = "https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/Aula01/transporte/transporte-dados-globais.json"


async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    //console.log(dados)

    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(1);
    const trabalhadoresMundo = dados.total_trabalhadores_mundo / 1e9;
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho);
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) *60);
    const porcentagem = ((trabalhadoresMundo/pessoasNoMundo)*100).toFixed(1);

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = 
    `
    Cerca de <span>${porcentagem} </span> % das mais de <span>${pessoasNoMundo}</span> bilhões de pessoas do mundo estão no
          mercado de trabalho, ou seja, aproximadamente <span>${trabalhadoresMundo}</span> de
          trabalhadores. Do total de trabalhadores, <span>${dados.total_pessoas_que_necessitam_transporte_para_trabalho} </span> precisam de
          transporte para o trabalho. Dessa forma, ainda grande quantidade está em teletrabalho ou mora perto do
          trabalho, de forma a não precisar de deslocamento. Entre os que
          precisam de transporte, o tempo necessário para isso é de cerca de <span> ${horas} horas </span> e <span>${minutos}</span>
          minutos. Esse tempo pode ser utilizado para ouvir PodCasts ou
          videoaulas, caso o transporte seja público ou por aplicativo. Um
          serviço que pode ser oferecido é o de Podcasts com duração compatível
          com esse tempo de deslocamento.
    `
    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais()