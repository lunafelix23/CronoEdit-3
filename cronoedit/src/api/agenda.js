import { getEditais } from "./editais";

export async function getEventos() {
  const editais = await getEditais();

  const eventos = [];

  editais.forEach((edital) => {
    if (!edital.cronograma || !Array.isArray(edital.cronograma)) {
      return;
    }

    edital.cronograma.forEach((evento) => {
      eventos.push({
        id: `${edital.id}-${evento.id}`,
        titulo: `${evento.tipo} - ${edital.titulo}`,
        edital: edital.titulo,
        data: evento.data,
        tipo: evento.tipo,
      });
    });
  });

  return eventos;
}