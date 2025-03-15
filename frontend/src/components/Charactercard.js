import React from "react";
import characters from "./Characterlist";

const colorBorders = {
  Red: "border-red-500",
  Blue: "border-blue-500",
  Yellow: "border-yellow-500",
  Green: "border-green-500",
  Pink: "border-pink-500",
  White: "border-gray-300",
  Rainbow: "border-gradient-to-r from-red-500 via-yellow-500 to-blue-500",
};

const CharacterCard = ({ character }) => {
  const borderClass = colorBorders[character.category]
  return (
    <div className="p-[2px] rounded-lg" style={{ background: character.category === "Rainbow" ? "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)" : "transparent" }}>
      <div className={`bg-gray-800 text-white rounded-lg p-4 shadow-md flex flex-col items-center text-center border-4 ${colorBorders[character.category]}`}>
        <img src={character.image} alt={character.name} className="w-24 h-24 rounded-md" />
        <h2 className="text-lg font-bold mt-2">{character.name ? character.name : "Unknown"}</h2>
        <p className="text-sm opacity-80">{character.category}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
