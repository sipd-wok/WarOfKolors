export default function Roadmaps() {
  return (
    <section id="roadmap" className="bg-[#001933] text-black py-48">
      <div className="container mx-auto px-4">
        <h2 className="text-yellow-300 text-4xl font-bold text-center">Roadmap</h2>
        <p className="text-white mt-4 text-center">Understand the journey and future plans of WarOfKolors.</p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
  
          <div className="bg-blue-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Phase 1: Game Concept & Development</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Game mechanics design.</li>
              <li>Smart contract development.</li>
            </ul>
          </div>
  
          <div className="bg-blue-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Phase 2: Alpha & Beta Testing</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Closed alpha release.</li>
              <li>Community beta testing.</li>
            </ul>
          </div>
  
          <div className="bg-blue-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Phase 3: Public Launch & Marketplace</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Official launch.</li>
              <li>NFT marketplace activation.</li>
            </ul>
          </div>
  
          <div className="bg-blue-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Phase 4: Staking & Future Upgrades</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Staking system implementation.</li>
              <li>Expansion of game features.</li>
            </ul>
          </div>
  
          <div className="bg-blue-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Phase 5: Security & Fairness</h3>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Smart contracts are audited to ensure transparency and fairness.</li>
              <li>Anti-cheating mechanisms are implemented.</li>
              <li>Provably fair mechanics through blockchain randomization.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
