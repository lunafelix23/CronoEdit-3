import { Link } from "react-router-dom";
export default function EditalCard({ edital }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <h2>{edital.titulo}</h2>

      <p>
        <strong>Órgão:</strong> {edital.orgao}
      </p>

      <p>
        <strong>Status:</strong> {edital.status}
      </p>

      <p>
        <strong>Próximo prazo:</strong>{" "}
        {edital.cronograma?.[0]?.data || "Sem data"}
      </p>

      <Link
  to={`/editais/${edital.id}`}
  style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    textDecoration: "none",
    color: "#000",
  }}
>
  Ver detalhes
</Link>
    </div>
  );
}