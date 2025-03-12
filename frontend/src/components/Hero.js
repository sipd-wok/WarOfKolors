import { useCallback } from "react";
import { FaCopy } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {

  const colors = ["text-red-500", "text-blue-500", "text-yellow-500", "text-green-500", 
                  "text-purple-500", "text-pink-500", "text-orange-500", "text-cyan-500"];

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative bg-[#001933] min-h-min flex items-center justify-center py-20 font-poppins overflow-hidden">

      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            shape: { type: "circle" },
            size: { value: 6, random: true },
            move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" },
            opacity: { value: 0.7, random: true },
            color: { value: ["#ffcc00", "#ff6699", "#33ccff", "#66ff66", "#ff6666"] },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              onClick: { enable: true, mode: "repulse" }
            },
            modes: {
              bubble: { size: 10, distance: 100, duration: 1 },
              repulse: { distance: 150, duration: 0.4 }
            }
          }
        }}
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="max-w-6xl w-full mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h1 className="text-5xl font-bold leading-tight text-black">
            {["P", "l", "a", "y", " ", "&", " ", "E", "a", "r", "n", " ", "w", "i", "t", "h", " "].map((char, index) => (
              <span key={index} className={`${colors[index % colors.length]}`}>
                {char}
              </span>
            ))}
            <br />
            {["W", "a", "r", "O", "f", "K", "o", "l", "o", "r", "s", "!"].map((char, index) => (
              <span key={index} className={`${colors[index % colors.length]}`}>
                {char}
              </span>
            ))}
          </h1>
          <p className="mt-5"></p>
          <span className="font-bold text-xl text-white">War of Kolors (WOK)</span><p className="text-white text-lg">brings the Pinoy color game to blockchain, blending strategy, luck, and true ownership. Battle with NFT Champions, earn rewards, and dominate the War Arena in this thrilling play-to-earn experience!</p>

          <div className="mt-6">
            <p className="text-md text-white font-semibold">NFT Contract Address:</p>
            <div className="flex items-center bg-gray-500 text-white p-2 rounded-lg w-full max-w-lg">
              <input type="text" className="bg-transparent w-full" 
                value="0xdda26c76f22219489e25fdf3861a3031c457892d" readOnly />
              <FaCopy className="ml-2 cursor-pointer" />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-md text-white font-semibold">Token Contract Address:</p>
            <div className="flex items-center bg-gray-500 text-white p-2 rounded-lg w-full max-w-lg">
              <input type="text" className="bg-transparent w-full" 
                value="0x6EE3DdE20B0982f12232616B7EB84c11e353DBaA" readOnly />
              <FaCopy className="ml-2 cursor-pointer" />
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap space-x-4">
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-bold 
              hover:bg-indigo-500 transition-all duration-300 shadow-lg">
              Buy WOK COINS
            </button>
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold 
              hover:bg-gray-600 transition-all duration-300 shadow-lg ">
              Documentation
            </button>
          </div>

          <button className="mt-6 bg-yellow-600 px-6 py-3 rounded-lg font-bold text-white 
            hover:bg-yellow-500 transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>

        <div className="flex justify-center ml-40">
          <img src="/elemental.png" alt="WarOfKolors Illustration" className="max-w-md w-full"/>
        </div>
      </div>
      
    </section>
  );
}