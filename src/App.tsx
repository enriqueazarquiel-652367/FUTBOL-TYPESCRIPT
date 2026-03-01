import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Desplegable from "./Core/Desplegable";
import EquipoList from "./Core/EquipoList";
import "./App.css";

interface Team {
  id: string;
  nombre: string;
}

interface Player {
  id: string;
  nombre: string;
  demarcacion: string;
  imagen: string;
}

function App() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const API_BASE = "http://www.ies-azarquiel.es/paco/apikl";

  useEffect(() => {
    fetch(`${API_BASE}/team`)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  const handleSelectTeam = (teamId: string) => {
    if (!teamId) {
      setPlayers([]);
      return;
    }
    fetch(`${API_BASE}/team/${teamId}/player`)
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Desplegable teams={teams} onSelectTeam={handleSelectTeam} />
        <EquipoList players={players} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
