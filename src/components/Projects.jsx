import { useState } from 'react'

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null)

    const projects = [
        {
            id: 'alimi',
            title: 'Alimi.ai',
            subtitle: 'AI-Powered Website Generation Platform',
            url: 'https://alimi.ai',
            role: 'Application Architect & Founder',
            description: 'End-to-end SaaS platform that generates complete, production-ready websites for small businesses using AI. Customers select a package, provide business details, and receive a fully deployed website with custom domain, SSL, and working contact forms—all automated.',
            highlights: [
                'Integrated Claude AI API to dynamically generate React + Vite codebases tailored to three distinct package tiers',
                'Built automated deployment pipeline: Stripe payment → AI code generation → GitHub repo creation → GitHub Pages deployment → Cloudflare domain registration',
                'Developed custom Playwright-based browser automation with AI self-healing for domain registrar operations',
                'Implemented real-time contact form system with CORS-enabled API endpoints, Firestore storage, and Resend email notifications',
                'Created customer dashboard for website modifications, analytics, and contact form submissions',
            ],
            techStack: ['Node.js', 'Express', 'React', 'Firebase', 'GitHub API', 'Cloudflare API', 'Stripe', 'Resend', 'Claude AI API', 'PM2', 'GCP'],
            gradient: 'from-emerald-500 to-cyan-500',
            glowColor: 'emerald',
            icon: '🚀',
            pattern: 'radial-gradient(circle at 20% 80%, rgba(52, 211, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)',
        },
        {
            id: 'mamnoon',
            title: 'Mamnoon.ai',
            subtitle: 'Cross-Platform Mobile Video Calling with Real-Time Translation',
            url: 'https://mamnoon.ai',
            role: 'Application Architect & Founder',
            description: 'Cross-platform mobile video calling application with real-time speech translation, serving users across iOS, Android, and web.',
            highlights: [
                'Built production React Native application from scratch, deploying to iOS App Store and Google Play Store',
                'Implemented WebRTC video calling with custom P2P signaling, handling mobile-specific challenges including background state management and network transitions',
                'Designed scalable FastAPI/Python REST API handling authentication, video session orchestration, and payment processing',
                'Architected PostgreSQL database using Supabase with row-level security',
                'Integrated Azure Cognitive Services for speech-to-text, real-time translation, and text-to-speech across 50+ languages',
                'Implemented Stripe payment integration with webhook handlers for subscription lifecycle management',
            ],
            techStack: ['React Native', 'iOS/Xcode', 'Android Studio', 'Python', 'FastAPI', 'WebRTC', 'PostgreSQL', 'Supabase', 'Stripe', 'Azure Speech APIs', 'Railway'],
            gradient: 'from-violet-500 to-purple-500',
            glowColor: 'violet',
            icon: '🌍',
            pattern: 'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
        },
        {
            id: 'csvleaner',
            title: 'CSV Cleaner',
            subtitle: 'Privacy-First Email List Cleaning SaaS',
            url: 'https://csvcleaner.online',
            role: 'Founder & Developer',
            description: 'Pay-per-use SaaS product that helps marketers clean and deduplicate email lists with a privacy-first architecture.',
            highlights: [
                'Built privacy-first architecture where user data never touches the server, ensuring GDPR compliance',
                'Implemented secure payment processing with Stripe, achieving seamless checkout-to-download experience',
                'Developed serverless backend using Cloudflare Workers for scalable, cost-effective global edge deployment',
                'Integrated automated notifications via Resend API and Google Sheets for lead tracking',
            ],
            techStack: ['React', 'Tailwind CSS', 'Cloudflare Workers', 'Firebase Auth', 'Stripe', 'Resend API', 'Google Sheets API'],
            gradient: 'from-cyan-500 to-blue-500',
            glowColor: 'cyan',
            icon: '🧹',
            pattern: 'radial-gradient(circle at 50% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        },
        {
            id: 'centrix',
            title: 'Centrix.Email',
            subtitle: 'SaaS Email Marketing Platform',
            url: 'https://centrix.email',
            role: 'Application Architect & Founder',
            description: 'Production-ready email marketing SaaS application with a pay-per-send business model, eliminating traditional monthly subscription fees.',
            highlights: [
                'Built serverless architecture using AWS Lambda (Node.js), API Gateway, and DynamoDB',
                'Developed responsive React.js frontend with template selection, drag-and-drop campaign builder, and real-time analytics',
                'Implemented comprehensive security: CSV validation, formula injection prevention, rate limiting, input sanitization',
                'Integrated Stripe payment system with checkout sessions, webhook handling, and tiered pricing',
                'Built campaign composer with professional templates, CSV upload validation, and open/click tracking',
                'Configured AWS Cognito authentication with email verification and secure session management',
            ],
            techStack: ['React', 'Node.js', 'AWS Lambda', 'DynamoDB', 'S3', 'Cognito', 'API Gateway', 'Stripe', 'Resend', 'Cloudflare'],
            gradient: 'from-orange-500 to-red-500',
            glowColor: 'orange',
            icon: '📧',
            pattern: 'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
        },
    ]

    const glowStyles = {
        emerald: 'shadow-[0_0_80px_-20px_rgba(52,211,153,0.5)]',
        violet: 'shadow-[0_0_80px_-20px_rgba(139,92,246,0.5)]',
        cyan: 'shadow-[0_0_80px_-20px_rgba(34,211,238,0.5)]',
        orange: 'shadow-[0_0_80px_-20px_rgba(249,115,22,0.5)]',
    }

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Production-ready SaaS platforms built from concept to deployment — click to explore
                    </p>
                </div>

                {/* Projects list */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block cursor-pointer"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Card */}
                            <div className={`relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 ease-out
                ${hoveredProject === project.id ? `border-white/20 ${glowStyles[project.glowColor]} scale-[1.02]` : 'hover:border-white/10'}
              `}>

                                {/* Animated background pattern on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{ background: project.pattern }}
                                />

                                {/* Gradient accent line - animates on hover */}
                                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-out ${hoveredProject === project.id ? 'w-full' : 'w-0'}`} />

                                {/* Floating particles effect on hover */}
                                <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} animate-float`}
                                            style={{
                                                left: `${15 + i * 15}%`,
                                                top: `${20 + (i % 3) * 25}%`,
                                                animationDelay: `${i * 0.2}s`,
                                                animationDuration: `${2 + i * 0.3}s`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                            {project.icon}
                                            {/* Pulse ring on hover */}
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 group-hover:animate-ping`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                                <span className="px-2 py-0.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400 group-hover:border-white/20 transition-colors">
                                                    {project.role}
                                                </span>

                                                {/* Live badge - appears on hover */}
                                                <span className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                                    style={{ background: `linear-gradient(135deg, ${project.glowColor === 'emerald' ? 'rgba(52,211,153,0.2)' : project.glowColor === 'violet' ? 'rgba(139,92,246,0.2)' : project.glowColor === 'cyan' ? 'rgba(34,211,238,0.2)' : 'rgba(249,115,22,0.2)'}, transparent)` }}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                    <span className="text-green-400">Live</span>
                                                </span>
                                            </div>
                                            <p className={`text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        {/* Visit arrow - prominent on hover */}
                                        <div className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100 translate-x-0 bg-white/10' : 'opacity-0 translate-x-8'}`}>
                                            <span className="text-sm font-medium text-white">Visit Project</span>
                                            <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {project.description}
                                    </p>

                                    {/* Highlights - with staggered reveal on hover */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Key Achievements</h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-gray-300 text-sm transition-all duration-300 group-hover:text-gray-200"
                                                    style={{
                                                        transitionDelay: hoveredProject === project.id ? `${i * 50}ms` : '0ms',
                                                    }}
                                                >
                                                    <svg
                                                        className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-all duration-300`}
                                                        style={{
                                                            color: project.glowColor === 'emerald' ? '#34d399' : project.glowColor === 'violet' ? '#a78bfa' : project.glowColor === 'cyan' ? '#22d3ee' : '#fb923c',
                                                            transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)',
                                                            transitionDelay: `${i * 50}ms`,
                                                        }}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack with hover effects */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={tech}
                                                    className={`px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white`}
                                                    style={{
                                                        transitionDelay: hoveredProject === project.id ? `${i * 30}ms` : '0ms',
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile CTA */}
                                    <div className={`sm:hidden mt-6 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-[#0a0a0f] font-semibold transition-all duration-300`}>
                                        <span>Visit Project</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Corner accent */}
                                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-full`} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects