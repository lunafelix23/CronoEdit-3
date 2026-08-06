import { useEffect, useState } from "react";
import { getEventos } from "../api/agenda";

export default function Agenda() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function carregarEventos() {
      const dados = await getEventos();
      setEventos(dados);
    }

    carregarEventos();
  }, []);

  return (
    <div>
      <h1>Agenda</h1>

      <p>
        Acompanhe os principais prazos dos seus editais.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {eventos.map((evento) => (
          <div
            key={evento.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>{evento.titulo}</h2>

              <p>
                <strong>Edital:</strong> {evento.edital}
              </p>

              <p>
                <strong>Tipo:</strong> {evento.tipo}
              </p>
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {evento.data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}