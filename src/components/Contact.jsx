function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm currently open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </div>

        {/* Contact card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />

          <div className="relative grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:milani.babak@gmail.com"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">milani.babak@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+14156917085"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">(415) 691-7085</p>
              </div>
            </a>

            {/* GitHub — TODO: replace href with your actual GitHub URL */}
            <a
              href="https://github.com/holysmokas"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">GitHub</p>
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">View My Code</p>
              </div>
            </a>

            {/* LinkedIn — TODO: replace href with your actual LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/babakmilani"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Connect with Me</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-white font-medium">NYC / San Francisco</p>
              </div>
            </div>

            {/* Resume Download */}
            <a
              href="/Babak_Milani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Download</p>
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">Full Resume (PDF)</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact