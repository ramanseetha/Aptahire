/**
 * DifferentiationSection Component
 * Explains the AI hiring partner value proposition and differentiation
 */

export default function DifferentiationSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 sm:py-20 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The AI Hiring Partner Agencies Rely On
            <span className="block mt-2 text-blue-400">When Speed and Quality Matter</span>
          </h2>
        </div>

        {/* Problem Statement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20 mb-8">
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6">
            High-volume hiring overwhelms lean HR teams and agencies, so they end up taking whoever is "on the market" instead of the best fits. The strongest talent stays buried in CV stacks while time-to-submit and cost-per-hire spiral.
          </p>
          
          {/* Solution */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              <span className="font-bold text-blue-400">Aptahire now mimics a real recruiter's journey</span> from the moment a candidate applies. The AI makes a natural-sounding phone call, verifies basics, runs a conversational screen, and sends next-step instructions plus a clear recommendation to HR. Your team focuses only on final interviews and offers while Aptahire quietly handles every earlier stage 24/7.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          
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
  Let An Always-On AI Recruiter Work For You
  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
</button>
          <p className="text-slate-300 mt-4 text-sm sm:text-xl">
            Don't let faster competitors steal your best candidates
          </p>
        </div>
      </div>
    </section>
  );
}
