function Skills() {
    const skillCategories = [
        {
            title: 'Languages & Frameworks',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: ['JavaScript', 'Node.js', 'Python', 'React', 'React Native', 'FastAPI', 'Express'],
            color: 'emerald',
        },
        {
            title: 'Cloud & Infrastructure',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            skills: ['AWS Lambda', 'DynamoDB', 'S3', 'Cognito', 'Firebase', 'Railway', 'GCP', 'Cloudflare Workers', 'Cloudflare Pages'],
            color: 'cyan',
        },
        {
            title: 'Databases',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: ['PostgreSQL', 'Firestore', 'DynamoDB', 'Supabase'],
            color: 'blue',
        },
        {
            title: 'APIs & Integrations',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            skills: ['Stripe', 'Claude AI API', 'Azure Cognitive Services', 'Resend', 'GitHub API', 'Cloudflare API', 'WebRTC', 'Google Sheets API'],
            color: 'violet',
        },
        {
            title: 'Mobile & DevOps',
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            skills: ['iOS/Xcode', 'Android Studio', 'WebSockets', 'CI/CD', 'Docker', 'PM2', 'Playwright'],
            color: 'orange',
        },
    ]

    const colorClasses = {
        emerald: {
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20',
            text: 'text-emerald-400',
            tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        },
        cyan: {
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20',
            text: 'text-cyan-400',
            tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
        },
        blue: {
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            text: 'text-blue-400',
            tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
        },
        violet: {
            bg: 'bg-violet-500/10',
            border: 'border-violet-500/20',
            text: 'text-violet-400',
            tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        },
        orange: {
            bg: 'bg-orange-500/10',
            border: 'border-orange-500/20',
            text: 'text-orange-400',
            tag: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
        },
    }

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                        Technical Expertise
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technologies</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Building scalable systems with modern technologies across the full stack
                    </p>
                </div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const colors = colorClasses[category.color]
                        return (
                            <div
                                key={category.title}
                                className={`group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${colors.bg} ${colors.text} mb-4`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-2.5 py-1 text-xs rounded-md border ${colors.tag} transition-all duration-300 hover:scale-105`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills