import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const companyLogos = [
  {
    name: "ThreeFold",
    img: "/sponsors/black_threefold.png",
  },
  {
    name: "Huly",
    img: "/sponsors/Huly.svg",
  },
  {
    name: "MX",
    img: "/sponsors/mx-logo.svg",
  },
  {
    name: "Amazon",
    img: "/sponsors/octoberswimmer.png",
  },
  {
    name: "Facebook",
    img: "/sponsors/syndica-white.png",
  },
];

const LogoCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-48 h-48 p-2 border-none bg-transparent"
      )}
    >
      <img src={img} alt={name} className="object-contain w-24 h-24" />
    </div>
  );
};

export function Sponsors() {
  return (
    <>
      <div className="py-20 flex justify-center items-center mx-4 md:mx-8 lg:mx-16 xl:mx-20">
        <div className="text-white w-full px-8">
          <h2 className="text-2xl font-bold text-center px-14 py-3 sm:text-5xl  text-transparent bg-clip-text bg-gradient-to-l from-neutral-50 to-neutral-400 bg-opacity-50">
            Partners & Sponsors
          </h2>
          <div className="relative flex w-full items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {companyLogos.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black"></div>
          </div>
        </div>
      </div>
    </>
  );
}
