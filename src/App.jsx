import "./App.css";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />

      <Dashboard />

      <BottomNav />
    </div>
  );
}

export default App;