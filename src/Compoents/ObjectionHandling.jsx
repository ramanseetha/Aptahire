/**
 * ObjectionHandling Component
 * Addresses common concerns and objections about AI hiring
 */

export default function ObjectionHandling() {
  const objections = [
    {
      worry: 'Will AI send low-quality candidates to clients?',
      answer: 'No. Every shortlist is backed by structured interviews, transcripts, and recruiter-defined pass criteria.',
      number: 1
    },
    {
      worry: 'Will we lose control over who gets shortlisted?',
      answer: 'Never. Recruiters control questions, thresholds, scoring logic, and final approval.',
      number: 2
    },
    {
      worry: 'Will candidates hate the experience?',
      answer: 'Aptahire uses natural, human-sounding conversations in 20+ languages-no robotic scripts or confusing bots.',
      number: 3
    },
    {
      worry: 'Will this hurt our fees or positioning?',
      answer: 'Agencies use Aptahire to defend margins, not discount-by submitting stronger candidates faster with proof.',
      number: 4
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-16 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            This Will Not Break Your Hiring
            <span className="block mt-2 text-purple-400">(Or Your Brand)</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            AI hiring fails when it's rigid, robotic, or fully hands-off. That's not how Aptahire is built.
          </p>
        </div>

        {/* Subheading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-300">
            What Teams Worry About And How Aptahire Solves It
          </h3>
        </div>

        {/* Objections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {objections.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-300 text-2xl font-bold">
                    {item.number}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg text-white mb-3">
                    {item.worry}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    <span className="text-green-400 font-semibold mr-1 text-lg sm:text-xl">→</span>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10">
          <p className="text-xl sm:text-2xl font-bold text-white">
            Bottom line:
          </p>
          <p className="text-lg sm:text-xl text-slate-200 mt-3">
            You stay accountable. Aptahire just removes the grunt work.
          </p>
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
 See How Aptahire Fits Your Exact Hiring Flow

 <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
</button>
          <p className="text-slate-300 mt-4 text-sm sm:text-xl">
            Go live in weeks; don't wait while top talent disappears.
          </p>
        </div>
      </div>
    </section>
  );
}
