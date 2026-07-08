/*
==========================================================

Farm Manager Pro

Component : DashboardCard

Version : 2.2.0

Developer : Francis Junior

==========================================================
*/

function DashboardCard({
  icon,
  title,
  value,
  subtitle = "",
  color = "#2e7d32",
  onClick,
}) {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        borderLeft: `6px solid ${color}`,
        borderRadius: "14px",
        padding: "18px",
        transition: "0.25s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
          }}
        >
          {icon}
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            color: "#888",
            fontWeight: "bold",
          }}
        >
          {subtitle}
        </div>
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: "1rem",
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: 0,
          fontSize: "1.8rem",
          fontWeight: "700",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default DashboardCard;