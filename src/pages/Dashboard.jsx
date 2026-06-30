function Dashboard() {
  return (
    <main className="dashboard">

      <h2 style={{ marginBottom: "20px" }}>
        👋 Welcome, Francis
      </h2>

      <div className="card">
        <h2>🌾 Farm</h2>
        <p>Sweet Valley Farm</p>
      </div>

      <div className="card">
        <h2>💰 Income</h2>
        <h3>KES 0.00</h3>
      </div>

      <div className="card">
        <h2>💸 Expenses</h2>
        <h3>KES 0.00</h3>
      </div>

      <div className="card">
        <h2>🥬 Harvest</h2>
        <h3>0 kg</h3>
      </div>

    </main>
  );
}

export default Dashboard;