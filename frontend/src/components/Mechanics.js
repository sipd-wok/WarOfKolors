export default function Mechanics() {
    return (
        <section id="mechanics" className="relative bg-gradient-to-b bg-[#001933] py-20 flex justify-center">
            <div className="relative max-w-7xl max-h-dvh p-10 rounded-3xl text-center">
                <h2 className="text-5xl font-extrabold text-yellow-300 drop-shadow-lg">Game Mechanics</h2>
                <p className="mt-6 text-white text-lg font-medium">Learn the rules and strategies to master WarOfKolors.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12 mx-auto max-w-5xl">
                    <div className="bg-blue-800 p-8 rounded-2xl shadow-lg  hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-extrabold text-yellow-300">Champion Acquisition</h3>
                        <p className="mt-4 text-lg text-white text-left">⦁ Players purchase mystery boxes that contain a randomly generated Champion NFT.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Each Champion has randomized attack and defense stats based on the purchased tier.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Champions belong to one of six colors: Red, White, Green, Yellow, Blue, and White.</p>
                    </div>
                    <div className="bg-blue-800 p-8 rounded-2xl shadow-lg  hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-extrabold text-yellow-300">Battle System</h3>
                        <p className="mt-4 text-lg text-white text-left">⦁ Battles take place in the War Arena in a free-for-all (FFA) format.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Each battle consists of six Champions, one from each color.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Each champion will start with 10 points.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Results are determined by three randomly drawn color dice, ensuring a mix of strategy and chance.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ If Champion points is 0, they will be booted out from the game.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ The first Champion to reach 15 points will be deemed the winner and will take all $WoK betted.</p>
                    </div>
                    <div className="bg-blue-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-extrabold text-yellow-300">Marketplace</h3>
                        <p className="mt-4 text-lg text-white text-left">⦁ A decentralized marketplace allows players to buy, sell, and trade Champions, skins, and upgrades.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Prices are set in $WOK tokens, creating an in-game economy.</p>
                    </div>
                    <div className="bg-blue-800 p-8 rounded-2xl shadow-lg  hover:scale-105 transition-transform duration-300">
                        <h3 className="text-3xl font-extrabold text-yellow-300">Staking Rewards</h3>
                        <p className="mt-4 text-lg text-white text-left">⦁ Players can stake $WOK tokens for passive income.</p>
                        <p className="mt-2 text-lg text-white text-left">⦁ Winning battles grants $WOK rewards, NFT skins, and power-ups.</p>
                    </div>
                </div>
                
                <div className="absolute top-9 left-5 w-24 h-24 animate-bounce">
                    <img src="/ninja3d.png" alt="Decor" className="w-full h-full" />
                </div>
                <div className="absolute -bottom-52 right-10 w-24 h-24 animate-bounce">
                    <img src="/mage3d.png" alt="Decor" className="w-full h-full" />
                </div>
                
                <div className="absolute top-8 right-5 w-28 h-28 animate-float">
                    <img src="/warrior3d.png" alt="Floating 1" className="w-full h-full" />
                </div>
                <div className="absolute -bottom-48 left-10 w-24 h-24 animate-float-slow">
                    <img src="/mecha3d.png" alt="Floating 2" className="w-full h-full" />
                </div>
            </div>
        </section>
    );
}
