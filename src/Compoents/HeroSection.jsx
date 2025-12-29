import HyperSpeed from "./HyperSpeed";


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900 text-white">

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <HyperSpeed />
      </div>

      {/* Overlay (keep as is) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-8xl mx-auto">

        {/* Attention Badge */}
        <span className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full
          text-sm font-medium
          bg-white/10 border border-purple-400 backdrop-blur-md text-xl">
          🚨 ATTENTION: Agencies and Lean HR Teams Drowning in Applications
        </span>

        {/* Headline Line 1 (White) */}
        <h1 className="font-extrabold text-white max-w-9xl
               text-4xl xl:text-8xl
               leading-none">
  CLOSE MORE ROLES, FASTER <br className="hidden sm:block"/>

  {/* Headline Line 2 (Pink Center) */}
  <span className="mt-3 block font-extrabold 
                   text-3xl lg:text-7xl
                   bg-gradient-to-r from-pink-400 to-purple-500 
                   bg-clip-text text-transparent
                   leading-none">
    WITHOUT BURNING OUT YOUR <br className="hidden sm:block"/>
  </span>

  {/* Headline Line 3 (White) */}
  <span className="mt-2 block font-extrabold text-white
                   text-3xl lg:text-6xl
                   leading-none">
    RECRUITERS OR CUTTING YOUR FEES
  </span>
</h1>


        {/* Description */}
        <p className="mt-8 max-w-4xl
          text-base sm:text-lg lg:text-xl
          text-slate-200 leading-relaxed">
          Aptahire runs your complete AI hiring pipeline, including JD creation,
          resume deep screening, multi-round interviews, cheat detection, and
          detailed candidate reports - helping agencies handle{" "}
          <strong>10X volume</strong>, close roles in{" "}
          <strong>days (not weeks)</strong>, and maintain{" "}
          <strong>75% margins</strong> without recruiter burnout or fee pressure.
        </p>

        {/* CTA */}
        <button
  className="mt-10 inline-flex items-center justify-center
             px-10 py-4 rounded-xl
             text-base sm:text-2xl font-semibold
             bg-gradient-to-r from-purple-600 to-indigo-600
             text-white
             shadow-xl
             transform transition-all duration-300 ease-in-out
             hover:scale-105
             hover:shadow-2xl
             hover:from-pink-500 hover:to-purple-600
             active:scale-95">
  Fill Your Pipeline With Client-Ready Candidates Fast
</button>


        {/* Supporting text */}
        <p className="mt-4 text-sm lg:text-base text-slate-300">
          Join AI-powered agencies recommending top talent at scale.
        </p>

      </div>
    </section>
  );
}
