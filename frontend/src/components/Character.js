import React from "react";
import CharacterCard from "./Charactercard";
import characters from "./Characterlist";

const Characters = () => {
  return (
    <div className="p-6  bg-[#001933] text-white text-center py-20 overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-white mb-6">WoK Characters</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
