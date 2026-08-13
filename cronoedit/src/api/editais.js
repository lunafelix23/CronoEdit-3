const STORAGE_KEY = "cronoedit_editais";

const editaisIniciais = [
  {
    id: 1,
    titulo: "Edital de exemplo",
    orgao: "Instituição exemplo",
    status: "Em andamento",
    descricao: "Processo seletivo para preenchimento de vagas.",
    link: "https://exemplo.com/edital",
    cronograma: [
      {
        id: 1,
        tipo: "Inscrição",
        data: "10/08/2026",
      },
      {
        id: 2,
        tipo: "Resultado preliminar",
        data: "25/08/2026",
      },
      {
        id: 3,
        tipo: "Recurso",
        data: "30/08/2026",
      },
    ],
  },
];

function carregarEditais() {
  const dados = localStorage.getItem(STORAGE_KEY);

  if (!dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editaisIniciais));
    return editaisIniciais;
  }

  return JSON.parse(dados);
}

function salvarEditais(editais) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(editais));
}

export async function getEditais() {
  return carregarEditais();
}

export async function addEdital(novoEdital) {
  const editais = carregarEditais();

  const edital = {
    ...novoEdital,
    id: Date.now(),
    cronograma: novoEdital.cronograma || [],
  };

  editais.push(edital);

  salvarEditais(editais);

  return edital;
}

export async function updateEdital(id, dadosAtualizados) {
  const editais = carregarEditais();

  const editaisAtualizados = editais.map((edital) =>
    edital.id === Number(id)
      ? {
          ...edital,
          ...dadosAtualizados,
        }
      : edital
  );

  salvarEditais(editaisAtualizados);

    return editaisAtualizados.find(
    (edital) => edital.id === Number(id)
  );
}