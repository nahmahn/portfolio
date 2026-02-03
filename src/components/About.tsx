import AnimatedContent from './ui/AnimatedContent';
import BlurText from './ui/BlurText';
import { portfolioData } from '../portfolioData';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <span className="text-sm font-mono text-gray-500 mb-2 block">01 — ABOUT</span>
                    <BlurText
                        text="Background & Focus"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-5xl font-bold text-white mb-16"
                    />
                </AnimatedContent>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <AnimatedContent distance={20} direction="vertical" delay={0.1}>
                        <div className="space-y-8 text-lg text-gray-400 leading-relaxed font-light">
                            <p className="text-white font-normal">
                                {portfolioData.about.intro}
                            </p>
                            <p>
                                {portfolioData.about.journey}
                            </p>
                            <p>
                                {portfolioData.about.philosophy}
                            </p>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent distance={20} direction="vertical" delay={0.2}>
                        <div className="space-y-10">
                            {/* Stats / Highlights */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Electrical Engineering</h3>
                                        <p className="text-sm text-gray-500">B.Tech at Delhi Technological University (2024–2028)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                                            <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                                            <path d="M12 2a10 10 0 0 1 10 10" />
                                            <path d="M12 12 2.1 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">AI & Computer Vision</h3>
                                        <p className="text-sm text-gray-500">Specialized in multimodal systems and deep learning</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Full-Stack ML</h3>
                                        <p className="text-sm text-gray-500">End-to-end systems from research to deployment</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                            <path d="M4 22h16" />
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                            <path d="M18 2h-6c-2 0-3 1-3 3v7a3 3 0 0 0 6 0V5c0-2 1-3 3-3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Hackathons</h3>
                                        <p className="text-sm text-gray-500">Top 30 at Hack4Delhi, DTTE funding recipient</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default About;
