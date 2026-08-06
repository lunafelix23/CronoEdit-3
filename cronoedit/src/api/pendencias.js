export async function getPendencias() {
  return [
    {
      id: 1,
      titulo: "Adicionar cronograma",
      descricao:
        "O edital ainda não possui datas cadastradas.",
      prioridade: "Alta",
    },
    {
      id: 2,
      titulo: "Verificar prazo",
      descricao:
        "Existe um prazo próximo para acompanhamento.",
      prioridade: "Média",
    },
  ];
}