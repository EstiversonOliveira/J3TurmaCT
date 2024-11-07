const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais(){
    const resposta = await fetch (url);
    let dados = await resposta.json();

const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas) * 60)


    console.log(dados);

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas?`
    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
}
visualizarInformacoesGlobais();