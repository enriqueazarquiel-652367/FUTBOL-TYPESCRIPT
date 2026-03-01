import React from 'react';
import EquipoItem from "./EquipoItem";

interface Player {
  id: string;
  nombre: string;
  demarcacion: string;
  imagen: string;
}

interface EquipoListProps {
  players: Player[];
}

function EquipoList({ players }: EquipoListProps) {
  return (
    <div className="equipo-list">
      {players.map((player) => (
        <EquipoItem key={player.id} player={player} />
      ))}
    </div>
  );
}

export default EquipoList;
