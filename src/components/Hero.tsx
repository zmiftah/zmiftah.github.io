import TypingAnimation from "@/components/TypingAnimation";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C] bg-opacity-90 text-white">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide">
          <span className="text-white">Zein</span>{' '}
          <span className="text-[#1EAEDB]">Miftah</span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl tracking-wide">
          <span className="mr-3 font-light">I am</span>
          <span className="text-[#1EAEDB] border-b border-[#1EAEDB] px-4 py-2">
            <TypingAnimation />
          </span>
          <span className="inline-block w-0.5 h-7 bg-blue-600 ml-1 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
