import { FaDiscord, FaXTwitter, FaYoutube, FaTiktok, FaFacebook, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-5xl">
   
        <h2 className="text-3xl font-bold">WarOfKolors</h2>

  
        <div className="flex flex-wrap justify-center gap-10 text-sm text-center">
          <div>
            <h3 className="text-gray-400 uppercase mb-2">Ecosystem</h3>
            <ul className="space-y-1">
              <li><a href="https://dorahacks.io/buidl/23614/" className="hover:text-yellow-500">Marketplace</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 uppercase mb-2">About</h3>
            <ul className="space-y-1">
              <li><a href="https://dorahacks.io/buidl/23614/team" className="hover:text-yellow-500">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 uppercase mb-2">Other</h3>
            <ul className="space-y-1">
              <li><a href="https://dorahacks.io/buidl/23614/" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="https://dorahacks.io/buidl/23614/" className="hover:text-yellow-500">Terms of Use</a></li>
              <li><a href="https://dorahacks.io/buidl/23614/" className="hover:text-yellow-500">Code of Conduct</a></li>
            </ul>
          </div>
        </div>

   
        <div className="flex space-x-4 text-xl">
          <a href="https://www.facebook.com/profile.php?id=61573963493249" className="hover:text-yellow-500"><FaFacebook /></a>
          <a href="#" className="hover:text-yellow-500"><FaGithub /></a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; 2025 WarOfKolors. All Rights Reserved.
      </div>
    </footer>
  );
}
