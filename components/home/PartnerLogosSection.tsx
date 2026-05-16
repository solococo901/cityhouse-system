"use client";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
];

export default function PartnerLogosSection() {
  return (
    <section className="w-full overflow-hidden luxury-section-white py-[40px]">
    
      <div className="cityhouse-marquee-wrapper relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div className="cityhouse-marquee flex w-max items-center gap-8 md:gap-14">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="cityhouse-logo-item flex h-[70px] w-[150px] items-center justify-center rounded-2xl bg-white px-4 md:h-[92px] md:w-[210px]"
            >
              <img
                src={logo}
                alt="CityHouse partner logo"
                className="max-h-full max-w-full object-contain opacity-65 grayscale transition-all duration-500 hover:scale-125 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cityhouse-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }

        .cityhouse-marquee {
          animation: cityhouse-marquee 28s linear infinite;
          will-change: transform;
        }

        .cityhouse-marquee-wrapper:hover .cityhouse-marquee {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .cityhouse-marquee {
            animation-duration: 38s;
          }
        }
      `}</style>
    </section>
  );
}