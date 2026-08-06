import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEdital } from "../api/editais";

export default function NovoEdital() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    orgao: "",
    link: "",
    descricao: "",
    status: "Em andamento",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await addEdital(form);

    navigate("/editais");
  }

  return (
    <div>
      <h1>Novo Edital</h1>

      <p>Cadastre um novo edital para acompanhar seus prazos.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "700px",
          marginTop: "24px",
        }}
      >
        <input
          name="titulo"
          placeholder="Título do edital"
          value={form.titulo}
          onChange={handleChange}
        />

        <input
          name="orgao"
          placeholder="Órgão responsável"
          value={form.orgao}
          onChange={handleChange}
        />

        <input
          name="link"
          placeholder="Link do edital"
          value={form.link}
          onChange={handleChange}
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          rows={5}
          value={form.descricao}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Em andamento</option>
          <option>Inscrições abertas</option>
          <option>Encerrado</option>
          <option>Arquivado</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Salvar edital
        </button>
      </form>
    </div>
  );
}