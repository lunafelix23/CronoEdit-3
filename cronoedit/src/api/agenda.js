export async function getEventos() {
  return [
    {
      id: 1,
      titulo: "Inscrições - Edital de exemplo",
      edital: "Edital de exemplo",
      data: "10/08/2026",
      tipo: "Inscrição",
    },
    {
      id: 2,
      titulo: "Resultado preliminar",
      edital: "Novo processo seletivo",
      data: "25/08/2026",
      tipo: "Resultado",
    },
  ];
}