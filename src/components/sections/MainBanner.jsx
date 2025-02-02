import Image from "next/image";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const MainBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5">
      <div className="grid md:grid-cols-2 w-full max-w-7xl gap-5 py-10 md:min-h-[35rem]">
        <div className="flex flex-col w-full h-full gap-5 justify-center">
          <span className="text-primary md:text-xl font-bold">
            Home appliance repair services
          </span>
          <h1 className="md:text-5xl text-3xl font-bold">
            We've Got You Covered, <br />
            Plus <span className="text-primary">So Much More</span>
          </h1>
          <h2 className="md:text-lg text-black/60">
            Reliable Home Appliances Repairs Because You Deserve <br />
            <span className="text-black font-bold">Peace Of Mind</span>
          </h2>
          <CallAndWhatsappButton />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-end gap-3">
            <div className="md:w-36 md:h-28 h-16 w-20 bg-red-200">
              <Image
                src="/static/main-banner.jpg"
                width={200}
                height={200}
                className="object-cover h-full w-full"
                alt="image"
              />
            </div>
            <div className="md:w-32 md:h-44 h-24 w-16 bg-red-200">
              <Image
                src="/static/fridge.jpg"
                width={200}
                height={200}
                className="object-cover h-full w-full"
                alt="image"
              />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="md:w-36 md:h-36 h-20 w-20 bg-red-200">
              <Image
                src="/static/dryer.jpeg"
                width={200}
                height={200}
                className="object-cover h-full w-full"
                alt="image"
              />
            </div>
            <div className="md:w-32 w-16 h-24 md:h-44 bg-red-200">
              <Image
                src="/static/oven.jpg"
                width={200}
                height={200}
                className="object-cover h-full w-full"
                alt="image"
              />
            </div>
            <div className="md:w-32 md:h-28 h-20 w-14 bg-red-200">
              <Image
                src="/static/tv.jpeg"
                width={200}
                height={200}
                className="object-cover h-full w-full"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
