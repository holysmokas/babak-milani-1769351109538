function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="block text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            Babak Milani
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Full-Stack Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
          Building production-ready SaaS platforms from concept to deployment. Specialized in AI integration, cloud infrastructure, payment processing, and end-to-end automation.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap gap-4 mb-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <a href="mailto:milani.babak@gmail.com" className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">milani.babak@gmail.com</span>
          </a>
          <a href="tel:+16464109559" className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">(646) 410-9559</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-gray-300">NYC / SF</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0a0a0f] font-semibold rounded-xl hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero