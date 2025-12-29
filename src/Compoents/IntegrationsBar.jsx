/**
 * IntegrationsBar Component
 * Premium animated integrations section
 */

import greenhouse from "../assets/green.png";
import lever from "../assets/le.png";
import workday from "../assets/work.png";
import sap from "../assets/download.jpg";
import bamboohr from "../assets/sma.png";
import salesforce from "../assets/sal.png";

const logos = [
  { name: "Greenhouse", src: greenhouse },
  { name: "Lever", src: lever },
  { name: "Workday", src: workday },
  { name: "SAP", src: sap },
  { name: "BambooHR", src: bamboohr },
  { name: "Salesforce", src: salesforce },
];

export default function IntegrationsBar() {
  return (
    <section className=" border-y border-slate-200 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-20">
          Aptahire Integrates & Partners With
        </h2>

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 cursor-pointer">
  {logos.map((logo, i) => (
    <div
      key={i}
      className={`perspective 
                  ${i % 2 === 0 ? "animate-left-right" : "animate-right-left"}`}
      style={{ animationDelay: `${i * 120}ms` }}
    >
      <div
        className="group h-20 w-30 rounded-xl border border-slate-200 flex items-center justify-center 
                   transition-all duration-500 hover:border-purple-400 
                   hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] tilt-card bg-transparent"
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="h-10 object-contain group-hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
