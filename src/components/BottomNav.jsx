function BottomNav() {
  return (
    <nav className="bottom-nav">

      <button className="active">
        <span>🏠</span>
        <small>Home</small>
      </button>

      <button>
        <span>🌱</span>
        <small>Crops</small>
      </button>

      <button>
        <span>💰</span>
        <small>Finance</small>
      </button>

      <button>
        <span>📊</span>
        <small>Reports</small>
      </button>

      <button>
        <span>⚙️</span>
        <small>Settings</small>
      </button>

    </nav>
  );
}

export default BottomNav;