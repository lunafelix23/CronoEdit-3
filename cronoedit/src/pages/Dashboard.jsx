import "../styles/dashboard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getEditais } from "../api/editais";
import { getEventos } from "../api/agenda";
import { getPendencias } from "../api/pendencias";

export default function Dashboard() {
  const [editais, setEditais] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [pendencias, setPendencias] = useState([]);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    const listaEditais = await getEditais();
    const listaEventos = await getEventos();
    const listaPendencias = await getPendencias();

    setEditais(listaEditais);
    setEventos(listaEventos);
    setPendencias(listaPendencias);
  }

  const proximoEvento =
    eventos.length > 0
      ? [...eventos].sort(
          (a, b) => new Date(a.data) - new Date(b.data)
        )[0]
      : null;

  return (
    <div>
      <h1>CronoEdit</h1>

      <p>
        Gerencie seus editais, cronogramas e prazos em um único lugar.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>📄 Editais</h2>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {editais.length}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>📅 Eventos</h2>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {eventos.length}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>⚠ Pendências</h2>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {pendencias.filter((p) => !p.concluida).length}
          </p>
        </div>
      </div>

      <section style={{ marginTop: "40px" }}>
        <h2>Próximo prazo</h2>

        {proximoEvento ? (
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <h3>{proximoEvento.titulo}</h3>

            <p>
              <strong>Edital:</strong> {proximoEvento.edital}
            </p>

            <p>
              <strong>Data:</strong>{" "}
              {new Date(proximoEvento.data).toLocaleDateString("pt-BR")}
            </p>
          </div>
        ) : (
          <p>Nenhum evento cadastrado.</p>
        )}
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Ações rápidas</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/editais/novo"
            style={{
              padding: "12px 18px",
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Novo edital
          </Link>

          <Link
            to="/agenda"
            style={{
              padding: "12px 18px",
              border: "1px solid #ccc",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Ver agenda
          </Link>

          <Link
            to="/pendencias"
            style={{
              padding: "12px 18px",
              border: "1px solid #ccc",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Ver pendências
          </Link>
        </div>
      </section>
    </div>
  );
}