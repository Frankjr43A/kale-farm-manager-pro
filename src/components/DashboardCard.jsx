function DashboardCard({ title, value, icon }) {
  return (
    <div className="card">
      <h2>
        {icon} {title}
      </h2>

      <h3>{value}</h3>
    </div>
  );
}

export default DashboardCard;