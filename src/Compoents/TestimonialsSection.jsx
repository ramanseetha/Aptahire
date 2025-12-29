/**
 * TestimonialsSection Component
 * Displays customer testimonials with ratings and company info
 */
import React from 'react';
import image1 from '../assets/5.png';
import image2 from '../assets/3.png';
import image3 from '../assets/8.png';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marcus Reynolds',
      role: 'Agency Owner',
      company: 'Sterling Talent Solutions',
      rating: 5,
      date: '14th Nov, 2025',
      profilePic: image1, // Corrected profile picture reference
      quote: '100% recommend Aptahire for any agency trying to protect margins without slashing quality. We went from spending 12 hours per role on screening and scheduling to under 2 hours. The AI handles the grunt work, and my team focuses on closing. Our speed-to-submission dropped from 5 days to under 24 hours, and clients are noticing.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Talent Acquisition',
      company: 'TechVentures Asia',
      rating: 5,
      date: '22nd Oct, 2025',
      profilePic: image2, // Corrected profile picture reference
      quote: 'Brilliant tool! Being someone who was skeptical about AI interviews, Aptahire\'s cheat detection and candidate ranking changed my mind completely. The detailed reports give us confidence we\'re not missing great people buried in 500+ applications. Support is phenomenal; they walked us through integration in under a week. Absolute must-have if you\'re hiring at scale!'
    },
    {
      name: 'David Harding',
      role: 'Senior Recruiter',
      company: 'GlobalHire Partners',
      rating: 5,
      date: '8th Dec, 2025',
      profilePic: image3, // Corrected profile picture reference
      quote: 'The setup is straightforward and takes a lot of hassle out of trying to juggle 15 open roles at once. Before Aptahire, I was drowning in admin reformatting CVs, chasing no-shows, manually scheduling. Now the AI does the heavy lifting and I spend time on relationship building and offer negotiations. I would recommend this to any recruiter or agency juggling volume and speed!'
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-3">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why 500+ Recruitment Agencies, HR Teams
            <span className="block mt-2 text-blue-600">& Talent Leaders Trust Aptahire</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold text-slate-700">5/5 stars based on 120+ reviews</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.profilePic}
                  alt={`${testimonial.name}'s profile`}
                  className="w-12 h-12 rounded-full border border-slate-200 shadow-sm"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <p className="text-xs lg:text-base text-slate-500 mt-2">{testimonial.date}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          
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
 Join 500+ Teams Already Hiring Smarter With AI
</button>
          <p className="text-slate-600 mt-4 text-sm sm:text-xl">
            Don't let lean teams outpace you on enterprise volume.
          </p>
        </div>
      </div>
    </section>
  );
}
