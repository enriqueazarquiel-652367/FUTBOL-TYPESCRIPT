import React from 'react';

interface Team {
  id: string;
  nombre: string;
}

interface DesplegableProps {
  teams: Team[];
  onSelectTeam: (teamId: string) => void;
}

function Desplegable({ teams, onSelectTeam }: DesplegableProps) {
  return (
    <div className="desplegable">
      <select onChange={(e) => onSelectTeam(e.target.value)}>
        <option value="">Selecciona un equipo</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Desplegable;
