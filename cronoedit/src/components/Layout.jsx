import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 15px",
    marginBottom: "8px",
    borderRadius: "8px",
    textDecoration: "none",
    color: isActive ? "#ffffff" : "#333",
    background: isActive ? "#2563eb" : "transparent",
  });

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <aside
        style={{
          width: "240px",
          padding: "25px 15px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            fontSize: "24px",
          }}
        >
          CronoEdit
        </h1>

        <nav>
          <NavLink to="/" style={linkStyle}>
            📊 Dashboard
          </NavLink>

          <NavLink to="/editais" style={linkStyle}>
            📄 Editais
          </NavLink>

          <NavLink to="/agenda" style={linkStyle}>
            📅 Agenda
          </NavLink>

          <NavLink to="/pendencias" style={linkStyle}>
            ⚠️ Pendências
          </NavLink>
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}