import { useParams } from "react-router-dom";
import { getEditais, updateEdital } from "../api/editais";
import { useEffect, useState } from "react";

export default function EditalDetalhe() {
  const { id } = useParams();
  const [edital, setEdital] = useState(null);

const [novoEvento, setNovoEvento] = useState({
  tipo: "",
  data: "",
});

  useEffect(() => {
    async function carregar() {
      const editais = await getEditais();

      const encontrado = editais.find(
        (e) => e.id.toString() === id
      );

      setEdital(encontrado);
    }

    carregar();
  }, [id]);

  if (!edital) {
    return <h2>Edital não encontrado.</h2>;
  }

  async function adicionarEvento() {h
    
  const evento = {
    id: Date.now(),
    tipo: novoEvento.tipo,
    data: novoEvento.data,
  };

  const editalAtualizado = {
  ...edital,
  cronograma: [
    ...(edital.cronograma || []),
    evento,
  ],
};

setEdital(editalAtualizado);

await updateEdital(editalAtualizado);

  setNovoEvento({
    tipo: "",
    data: "",
  });
}
return (
    <div>
      <h1>{edital.titulo}</h1>

      <p>
        <strong>Órgão:</strong> {edital.orgao}
      </p>

      <p>
        <strong>Status:</strong> {edital.status}
      </p>

      <h2>Cronograma</h2>

<div
  style={{
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  }}
>
  <input
    placeholder="Tipo do evento"
    value={novoEvento.tipo}
    onChange={(e) =>
      setNovoEvento({
        ...novoEvento,
        tipo: e.target.value,
      })
    }
  />

  <input
    placeholder="Data"
    value={novoEvento.data}
    onChange={(e) =>
      setNovoEvento({
        ...novoEvento,
        data: e.target.value,
      })
    }
  />

  <button onClick={adicionarEvento}>
  + Adicionar evento
</button>
</div>

      {edital.cronograma?.map((evento) => (
        <div
          key={evento.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "10px",
          }}
        >
          <strong>{evento.tipo}</strong>

          <p>{evento.data}</p>
        </div>
      ))}
    </div>
  );
}