export default function Navbar() {
  return (
    <nav id="home" className="bg-blue-800 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        <div className="flex items-center">
          <img src="/logo.png" alt="WarOfKolors" className="h-10 w-10 mr-2" />
          <span className="text-white font-bold text-2xl">War Of Kolors</span>
        </div>

        <ul className="flex space-x-6 text-white font-semibold">
          <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#characters" className="hover:text-yellow-400 transition">Characters</a></li>
          <li><a href="#howtoplay" className="hover:text-yellow-400 transition">How To Play</a></li>
          <li><a href="#mechanics" className="hover:text-yellow-400 transition">Mechanics</a></li>
          <li><a href="#roadmap" className="hover:text-yellow-400 transition">Roadmap</a></li>
        </ul>
        
      </div>
    </nav>
  );
}
