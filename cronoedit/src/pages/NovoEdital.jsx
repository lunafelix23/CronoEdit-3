import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addEdital } from "../api/editais";

import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

export default function NovoEdital() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    orgao: "",
    link: "",
    descricao: "",
    status: "Em andamento",
  });

  const [novoEvento, setNovoEvento] = useState({
    tipo: "",
    data: "",
  });

  const [cronograma, setCronograma] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEventoChange(e) {
    const { name, value } = e.target;

    setNovoEvento((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function adicionarEvento() {
    if (!novoEvento.tipo || !novoEvento.data) {
      alert("Preencha o tipo de evento e a data.");
      return;
    }

    setCronograma((prev) => [
      ...prev,
      {
        id: Date.now(),
        tipo: novoEvento.tipo,
        data: novoEvento.data,
      },
    ]);

    setNovoEvento({
      tipo: "",
      data: "",
    });
  }

  function removerEvento(id) {
    setCronograma((prev) =>
      prev.filter((evento) => evento.id !== id)
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.titulo.trim()) {
      alert("Informe o título do edital.");
      return;
    }

    const edital = {
      ...form,
      cronograma,
    };

    await addEdital(edital);

    navigate("/editais");
  }

  return (
    <div>
      <h1>Novo Edital</h1>

      <p>
        Cadastre um novo edital para acompanhar seus prazos.
      </p>

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
        <Input
          label="Título"
          name="titulo"
          placeholder="Título do edital"
          value={form.titulo}
          onChange={handleChange}
        />

        <Input
          label="Órgão responsável"
          name="orgao"
          placeholder="Órgão responsável"
          value={form.orgao}
          onChange={handleChange}
        />

        <Input
          label="Link"
          name="link"
          placeholder="https://..."
          value={form.link}
          onChange={handleChange}
        />

        <TextArea
          label="Descrição"
          name="descricao"
          rows={5}
          value={form.descricao}
          onChange={handleChange}
        />

        <Select
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Em andamento">Em andamento</option>
          <option value="Inscrições abertas">
            Inscrições abertas
          </option>
          <option value="Encerrado">Encerrado</option>
          <option value="Arquivado">Arquivado</option>
        </Select>

        {/* CRONOGRAMA */}
        <div
          style={{
            marginTop: "16px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Cronograma
          </h2>

          <p>
            Adicione as datas importantes deste edital.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 180px auto",
              gap: "12px",
              alignItems: "end",
            }}
          >
            <Input
              label="Evento"
              name="tipo"
              placeholder="Ex.: Inscrições"
              value={novoEvento.tipo}
              onChange={handleEventoChange}
            />

            <Input
              label="Data"
              name="data"
              type="date"
              value={novoEvento.data}
              onChange={handleEventoChange}
            />

            <Button
              type="button"
              onClick={adicionarEvento}
            >
              + Adicionar
            </Button>
          </div>

          {cronograma.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <h3>Datas adicionadas</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {cronograma.map((evento) => (
                  <div
                    key={evento.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px",
                      background: "#f5f5f5",
                      borderRadius: "8px",
                    }}
                  >
                    <div>
                      <strong>{evento.tipo}</strong>

                      <div
                        style={{
                          fontSize: "14px",
                          marginTop: "4px",
                        }}
                      >
                        {new Date(
                          `${evento.data}T00:00:00`
                        ).toLocaleDateString("pt-BR")}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removerEvento(evento.id)
                      }
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#d32f2f",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cronograma.length === 0 && (
            <p
              style={{
                marginTop: "16px",
                color: "#777",
              }}
            >
              Nenhuma data adicionada ao cronograma.
            </p>
          )}
        </div>

        <Button type="submit">
          Salvar edital
        </Button>
      </form>
    </div>
  );
}