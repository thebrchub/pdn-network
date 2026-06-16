// src/components/sections/SocialProof.tsx
export default function SocialProof() {
  return (
    <section className="relative bg-white pt-20 pb-24 lg:pb-32 overflow-hidden">
      {/* 
        Curved SVG Divider 
        Transitions from the dark Navy background of the Freelancers section into white.
      */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full z-10">
        <svg 
          viewBox="0 0 1440 120" 
          className="relative block w-full h-[60px] md:h-[120px] text-white" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-dark mb-6 tracking-tight">
            Proven by Indian Businesses.
          </h2>
          <p className="text-xl text-slate-600 font-sans leading-relaxed">
            See how founders and agencies are using ProSpec to eliminate delivery anxiety and scale their operations.
          </p>
        </div>

        {/* Featured Video Testimonial */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-lg flex flex-col md:flex-row">
            
            {/* Left: Video Thumbnail Area */}
            <div className="md:w-1/2 relative bg-slate-200 min-h-[300px] md:min-h-[400px] group cursor-pointer">
              {/* Placeholder for actual founder video/image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-80"></div>
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-brand-accent ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="bg-brand-dark/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md tracking-wide uppercase">
                  D2C Skincare Brand
                </span>
                <span className="bg-white/90 backdrop-blur-md text-brand-dark text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Delivered in 14 Days
                </span>
              </div>
            </div>

            {/* Right: Quote and Metrics */}
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
              <svg className="w-10 h-10 text-brand-accent/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <blockquote className="text-xl lg:text-2xl text-brand-dark font-heading font-medium leading-relaxed mb-8">
                "I used to have four freelancers on WhatsApp. Two ghosted, and one completely missed the brief. Since moving to ProSpec, I just post the scope, fund the escrow, and the work gets done. It's that simple."
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-bold text-brand-dark font-sans text-lg">Rohit S.</p>
                <p className="text-sm text-slate-500 font-sans">Founder, Bengaluru[cite: 1]</p>
              </div>

              {/* Trust Metric Reinforcement */}
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Project Match</p>
                  <p className="text-sm font-semibold text-brand-dark flex items-center gap-1">
                    <svg className="w-4 h-4 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    E-Commerce Website
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Professional Score</p>
                  <p className="text-sm font-semibold text-brand-dark flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.9 Elite
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}