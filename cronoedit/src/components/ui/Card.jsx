export default function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,.05)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}