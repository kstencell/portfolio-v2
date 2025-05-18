const Hero: React.FC = () => {
  return (
    <div className="flex items-center min-h-[calc(100vh-6rem)] w-full max-w-[1000px] mx-auto">
      <div className="flex flex-col justify-start items-start transform -translate-y-12">
        <h1 className="text-lg mb-4 text-green-accent font-mono">
          Hi, my name is
        </h1>
        <h2
          className="text-off-white font-bold"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
        >
          Karl Stencell.
        </h2>
        <h2
          className="text-gray-accent font-bold mb-4"
          style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}
        >
          I build things for the web.
        </h2>
        <p className="text-lg text-gray-accent max-w-[700px]">
          I develop reliable, scalable software systems by day and improve my
          home lab to support my software ambitions by night. My current focus
          is enhancing the global device upgrade and testing pipeline alongside
          my team at <span className="text-green-accent">Arctic Wolf</span>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
