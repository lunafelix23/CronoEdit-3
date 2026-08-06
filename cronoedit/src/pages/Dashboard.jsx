export default function Dashboard() {
  return (
    <div>
      <h1>CronoEdit</h1>

      <p>
        Gerencie seus editais, cronogramas e prazos em um único lugar.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h2>Editais</h2>
          <p>0 cadastrados</p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h2>Próximos prazos</h2>
          <p>Nenhum prazo próximo</p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <h2>Pendências</h2>
          <p>Nenhuma pendência</p>
        </div>
      </div>

      <section style={{ marginTop: "40px" }}>
        <h2>Ações rápidas</h2>

        <ul>
          <li>Cadastrar novo edital</li>
          <li>Visualizar agenda</li>
          <li>Ver pendências</li>
        </ul>
      </section>
    </div>
  );
}