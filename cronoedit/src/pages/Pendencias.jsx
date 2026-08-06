import { useEffect, useState } from "react";
import { getPendencias } from "../api/pendencias";

export default function Pendencias() {
  const [pendencias, setPendencias] = useState([]);

  useEffect(() => {
    async function carregarPendencias() {
      const dados = await getPendencias();
      setPendencias(dados);
    }

    carregarPendencias();
  }, []);

  return (
    <div>
      <h1>Pendências</h1>

      <p>
        Acompanhe tarefas e informações que precisam de atenção.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {pendencias.map((pendencia) => (
          <div
            key={pendencia.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <h2>{pendencia.titulo}</h2>

            <p>{pendencia.descricao}</p>

            <strong>
              Prioridade: {pendencia.prioridade}
            </strong>

            <br />

            <button
              style={{
                marginTop: "15px",
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              Resolver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}