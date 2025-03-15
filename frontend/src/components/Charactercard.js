import React from "react";
import characters from "./Characterlist";

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-md flex flex-col items-center text-center">
      <img src={character.image} alt={character.name} className="w-24 h-24 rounded-md" />
      <h2 className="text-lg font-bold mt-2">{character.name ? character.name : "Unknown"}</h2>
      <p className="text-sm opacity-80">{character.category}</p>
    </div>
  );
};

console.log(characters)
export default CharacterCard;
