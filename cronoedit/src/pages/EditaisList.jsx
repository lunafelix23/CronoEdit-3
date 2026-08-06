import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getEditais } from "../api/editais";
import EditalCard from "../components/editais/EditalCard";

export default function EditaisList() {
  const [busca, setBusca] = useState("");
  const [editais, setEditais] = useState([]);

  useEffect(() => {
    async function carregarEditais() {
      const dados = await getEditais();
      setEditais(dados);
    }

    carregarEditais();
  }, []);

  const editaisFiltrados = editais.filter((edital) =>
    edital.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1>Editais</h1>
          <p>Gerencie seus editais e acompanhe todos os cronogramas.</p>
        </div>

        <Link
          to="/editais/novo"
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          + Novo edital
        </Link>
      </div>

      <input
        type="text"
        placeholder="Buscar edital..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "25px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

            <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {editaisFiltrados.map((edital) => (
          <EditalCard
            key={edital.id}
            edital={edital}
          />
        ))}
      </div>
    </div>
  );
}