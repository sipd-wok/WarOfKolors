const colors = ["Red", "Blue", "Yellow", "Green", "Pink", "White", "Rainbow"];
const totalCharacters = 203;
const columns = 7;

const spriteOptions = {};
colors.forEach((color, index) => {
  spriteOptions[color] = Array.from({ length: 29 }, (_, i) => index + 1 + i * 7);
});

const characterNames = [
    // Death Gods
    "Red Death God",
    "Blue Death God",
    "Yellow Death God",
    "Green Death God",
    "Pink Death God",
    "White Death God",
    "Rainbow Death God",
    
    // Knights
    "Red Knight",
    "Blue Knight",
    "Yellow Knight",
    "Green Knight",
    "Pink Knight",
    "White Knight",
    "Rainbow Knight",
    
    // Spear Warriors
    "Red Spear Warrior",
    "Blue Spear Warrior",
    "Yellow Spear Warrior",
    "Green Spear Warrior",
    "Pink Spear Warrior",
    "White Spear Warrior",
    "Rainbow Spear Warrior",
    
    // Monks
    "Red Monk",
    "Blue Monk",
    "Yellow Monk",
    "Green Monk",
    "Pink Monk",
    "White Monk",
    "Rainbow Monk",
    
    // Vanguard
    "Red Vanguard",
    "Blue Vanguard",
    "Yellow Vanguard",
    "Green Vanguard",
    "Pink Vanguard",
    "White Vanguard",
    "Rainbow Vanguard",
    
    // Beast Riders
    "Red Beast Rider",
    "Blue Beast Rider",
    "Yellow Beast Rider",
    "Green Beast Rider",
    "Pink Beast Rider",
    "White Beast Rider",
    "Rainbow Beast Rider",
    
    // Mages
    "Red Mage",
    "Blue Mage",
    "Yellow Mage",
    "Green Mage",
    "Pink Mage",
    "White Mage",
    "Rainbow Mage",
    
    // Warrior Princesses
    "Red Warrior Princess",
    "Blue Warrior Princess",
    "Yellow Warrior Princess",
    "Green Warrior Princess",
    "Pink Warrior Princess",
    "White Warrior Princess",
    "Rainbow Warrior Princess",
    
    // Ninjas
    "Red Ninja",
    "Blue Ninja",
    "Yellow Ninja",
    "Green Ninja",
    "Pink Ninja",
    "White Ninja",
    "Rainbow Ninja",
    
    // Tribal Chiefs
    "Red Tribal Chief",
    "Blue Tribal Chief",
    "Yellow Tribal Chief",
    "Green Tribal Chief",
    "Pink Tribal Chief",
    "White Tribal Chief",
    "Rainbow Tribal Chief",
    
    // Great Elders
    "Red Great Elder",
    "Blue Great Elder",
    "Yellow Great Elder",
    "Green Great Elder",
    "Pink Great Elder",
    "White Great Elder",
    "Rainbow Great Elder",
    
    // Sumo Wrestlers
    "Red Sumo Wrestler",
    "Blue Sumo Wrestler",
    "Yellow Sumo Wrestler",
    "Green Sumo Wrestler",
    "Pink Sumo Wrestler",
    "White Sumo Wrestler",
    "Rainbow Sumo Wrestler",
    
    // Zombies
    "Red Zombie",
    "Blue Zombie",
    "Yellow Zombie",
    "Green Zombie",
    "Pink Zombie",
    "White Zombie",
    "Rainbow Zombie",
    
    // Vikings
    "Red Viking",
    "Blue Viking",
    "Yellow Viking",
    "Green Viking",
    "Pink Viking",
    "White Viking",
    "Rainbow Viking",
    
    // Valkyries
    "Red Valkyrie",
    "Blue Valkyrie",
    "Yellow Valkyrie",
    "Green Valkyrie",
    "Pink Valkyrie",
    "White Valkyrie",
    "Rainbow Valkyrie",
    
    // Mecha Warriors
    "Red Mecha Warrior",
    "Blue Mecha Warrior",
    "Yellow Mecha Warrior",
    "Green Mecha Warrior",
    "Pink Mecha Warrior",
    "White Mecha Warrior",
    "Rainbow Mecha Warrior",
    
    // Elementalists
    "Red Elementalist",
    "Blue Elementalist",
    "Yellow Elementalist",
    "Green Elementalist",
    "Pink Elementalist",
    "White Elementalist",
    "Rainbow Elementalist",
    
    // Dragon Tamers
    "Red Dragon Tamer",
    "Blue Dragon Tamer",
    "Yellow Dragon Tamer",
    "Green Dragon Tamer",
    "Pink Dragon Tamer",
    "White Dragon Tamer",
    "Rainbow Dragon Tamer",
    
    // Medusas
    "Red Medusa",
    "Blue Medusa",
    "Yellow Medusa",
    "Green Medusa",
    "Pink Medusa",
    "White Medusa",
    "Rainbow Medusa",
    
    // Snipers
    "Red Sniper",
    "Blue Sniper",
    "Yellow Sniper",
    "Green Sniper",
    "Pink Sniper",
    "White Sniper",
    "Rainbow Sniper",
    
    // Wrestlers
    "Red Wrestler",
    "Blue Wrestler",
    "Yellow Wrestler",
    "Green Wrestler",
    "Pink Wrestler",
    "White Wrestler",
    "Rainbow Wrestler",
    
    // Master Chefs
    "Red Master Chef",
    "Blue Master Chef",
    "Yellow Master Chef",
    "Green Master Chef",
    "Pink Master Chef",
    "White Master Chef",
    "Rainbow Master Chef",
    
    // Mafia Bosses
    "Red Mafia Boss",
    "Blue Mafia Boss",
    "Yellow Mafia Boss",
    "Green Mafia Boss",
    "Pink Mafia Boss",
    "White Mafia Boss",
    "Rainbow Mafia Boss",
    
    // Farmers
    "Red Farmer",
    "Blue Farmer",
    "Yellow Farmer",
    "Green Farmer",
    "Pink Farmer",
    "White Farmer",
    "Rainbow Farmer",
    
    // Capt Dobers
    "Red Capt Dober",
    "Blue Capt Dober",
    "Yellow Capt Dober",
    "Green Capt Dober",
    "Pink Capt Dober",
    "White Capt Dober",
    "Rainbow Capt Dober",
    
    // Spider Queens
    "Red Spider Queen",
    "Blue Spider Queen",
    "Yellow Spider Queen",
    "Green Spider Queen",
    "Pink Spider Queen",
    "White Spider Queen",
    "Rainbow Spider Queen",
    
    // Dark Archers
    "Dark Red Archer",
    "Dark Blue Archer",
    "Dark Yellow Archer",
    "Dark Green Archer",
    "Dark Pink Archer",
    "Dark White Archer",
    "Dark Rainbow Archer",
    
    // Drag Queens
    "Red Drag Queen",
    "Blue Drag Queen",
    "Yellow Drag Queen",
    "Green Drag Queen",
    "Pink Drag Queen",
    "White Drag Queen",
    "Rainbow Drag Queen",
    //Boomer
    "Red Boomer",
    "Blue Boomer",
    "Yellow Boomer",
    "Green Boomer",
    "Pink Boomer",
    "White Boomer",
    "Rainbow Boomer",
];

const characters = Array.from({ length: totalCharacters }, (_, index) => {
  const columnIndex = index % columns; 
  const rowIndex = Math.floor(index / columns) + 1;

  return {
    id: index + 1,
    name: characterNames[index], 
    image: `/char_${index + 1}.png`,
    category: colors[columnIndex],
  };
});

export default characters;