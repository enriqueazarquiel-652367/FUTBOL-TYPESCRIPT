import React from 'react';

interface Player {
  id: string;
  nombre: string;
  demarcacion: string;
  imagen: string;
}

interface EquipoItemProps {
  player: Player;
}

function EquipoItem({ player }: EquipoItemProps) {
  return (
    <div className="equipo-item">
      <img src={player.imagen} alt={player.nombre} />
      <h3>{player.nombre}</h3>
      <p>{player.demarcacion}</p>
    </div>
  );
}

export default EquipoItem;
