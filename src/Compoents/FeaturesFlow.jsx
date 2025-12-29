/**
 * FeaturesFlow Component
 * 4-step feature flow: Search, Select, Analyze, Connect
 */

export default function FeaturesFlow() {
  const features = [
    {
      number: '01',
      title: 'Search',
      description: 'Instantly search your built-in ATS, legacy resume graveyard, and new applicants, then deep-screen them against the role using configurable criteria, not just keywords.'
    },
    {
      number: '02',
      title: 'Select',
      description: 'Auto-prioritise candidates across multiple interview rounds, with AI scoring skills, intent, and culture fit so hiring managers see the strongest options first.'
    },
    {
      number: '03',
      title: 'Analyze',
      description: 'Review conversational interview transcripts, structured answers, cheat-detection signals, and AI-generated reports in one dashboard-filtered by role, round, and language.'
    },
    {
      number: '04',
      title: 'Connect',
      description: 'Automatically schedule next-round interviews, send multilingual candidate instructions, and share hiring recommendations with HR and line managers in a few clicks.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl  lg:text-5xl font-bold text-slate-900 mb-4 leading-snug">
            Building Shortlists Your Clients Actually Approve
            <span className="block mt-2 text-blue-600">Now Effortless</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mt-4 font-bold">
            One intelligent platform to:
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 mouse-hover">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl font-bold shadow-lg">
                    {feature.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
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
   Turn Messy Talent Pools Into Client-Ready Shortlists
</button>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            Convert multi-round, multilingual interviews into confident hiring decisions faster.
          </p>
        </div>
      </div>
    </section>
  );
}
