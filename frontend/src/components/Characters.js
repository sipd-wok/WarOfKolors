import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Characters() {
  const features = [
    { img: "/deathgod.png", title: "Class : Death Gods", tier: "Color : Red", bgColor: "bg-red-900", buttonColor: "bg-red-500 hover:bg-red-600" },
    { img: "/knight.png", title: "Class : Knights", tier: "Color : Yellow", bgColor: "bg-yellow-900", buttonColor: "bg-yellow-500 hover:bg-yellow-600" },
    { img: "/spearwarrior.png", title: "Class : Spear Warrior", tier: "Color : Blue", bgColor: "bg-blue-900", buttonColor: "bg-blue-500 hover:bg-blue-600" },
    { img: "/monk.png", title: "Class : Monks", tier: "Color : Green", bgColor: "bg-green-900", buttonColor: "bg-green-500 hover:bg-green-600" },
    { img: "/vanguard.png", title: "Class: Vanguard", tier: "Color : White", bgColor: "bg-gray-800", buttonColor: "bg-gray-600 hover:bg-gray-400" },
    { img: "/beastrider.png", title: "Class: Beast Rider", tier: "Color: Pink", bgColor: "bg-pink-900", buttonColor: "bg-pink-500 hover:bg-pink-600" },
    { img: "/warriorprincess.png", title: "Class: Warrior Princesses", tier: "Color: Yellow", bgColor: "bg-yellow-900", buttonColor: "bg-yellow-500 hover:bg-yellow-600" },
    { img: "/ninja.png", title: "Class : Ninjas", tier: "Color : Green", bgColor: "bg-green-900", buttonColor: "bg-green-500 hover:bg-green-600" },
    { img: "/tribalchiefs.png", title: "Class : Tribal Chiefs", tier: "Color : Blue", bgColor: "bg-blue-900", buttonColor: "bg-blue-500 hover:bg-blue-600" },
    { img: "/greatelder.png", title: "Class: Great Elders", tier: "Color : White", bgColor: "bg-gray-800", buttonColor: "bg-gray-600 hover:bg-gray-400" },
    { img: "/sumowrestler.png", title: "Class: Sumo Wrestlers", tier: "Color: Pink", bgColor: "bg-pink-900", buttonColor: "bg-pink-500 hover:bg-pink-600" },
    { img: "/zombie.png", title: "Class : Zombies", tier: "Color : Blue", bgColor: "bg-blue-900", buttonColor: "bg-blue-500 hover:bg-blue-600" },
    { img: "/viking.png", title: "Class : Vinkings", tier: "Color : Green", bgColor: "bg-green-900", buttonColor: "bg-green-500 hover:bg-green-600" },
    { img: "/valkyrie.png", title: "Class : Valkyries", tier: "Color : Red", bgColor: "bg-red-900", buttonColor: "bg-red-500 hover:bg-red-600" },
    { img: "/mech.png", title: "Class: Mech Warriors", tier: "Color : White", bgColor: "bg-gray-800", buttonColor: "bg-gray-600 hover:bg-gray-400" },
  ];

  return (
    <section id="characters" className="relative bg-[#001933] text-white text-center py-20 overflow-hidden">
      <h2 className="text-4xl font-bold -mt-2 text-yellow-300">WoK Characters</h2>
      <p className="mt-4 text-white">Get more strong heroes to earn more!</p>
      <img 
        src="/bronzedoor.png" 
        alt="Left" 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[420px] h-[420px] -ml-40 hidden md:block z-[60]" 
      />
        <img 
        src="/golddoor.png" 
        alt="Right" 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[420px] h-[420px] -mr-40 hidden md:block z-[60]" 
      />

      <div className="hidden md:block mt-8 relative z-50">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          className="w-full"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className={`p-6 rounded-xl text-center min-w-[150px] transition ${feature.bgColor}`}> 
                <img src={feature.img} alt={feature.title} className="mx-auto mb-4 h-16" />
                <p className="font-bold text-lg">{feature.title}</p>
                <p className="text-sm text-gray-300">{feature.tier}</p>
                <button href="https://war-of-kolors.vercel.app/" className={`mt-4 ${feature.buttonColor} text-white px-4 py-2 rounded-sm transition`}>
                  Play Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          className="w-full max-w-sm"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className={`p-6 rounded-sm text-center shadow-lg min-w-[50px] ${feature.bgColor}`}> 
                <img src={feature.img} alt={feature.title} className="mx-auto mb-4 h-32 w-32" />
                <p className="font-bold text-lg">{feature.title}</p>
                <p className="text-sm text-gray-300">{feature.tier}</p>
                <button className={`mt-4 ${feature.buttonColor} text-white px-4 py-2 rounded-sm transition`}>
                  Play Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
}