import AnimatedContent from './ui/AnimatedContent';
import BlurText from './ui/BlurText';
import Magnet from './ui/Magnet';
import { portfolioData } from '../portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <span className="text-sm font-mono text-gray-500 mb-2 block tracking-wider">06 — CONTACT</span>
                    <BlurText
                        text="Get in Touch"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
                    />
                    <p className="text-lg text-gray-400 font-light mb-16 max-w-2xl">
                        Open to research internships, collaborations, and opportunities in AI/ML.
                        Reach out directly via email or connect on social platforms.
                    </p>
                </AnimatedContent>

                <div className="space-y-6">
                    {/* Email Card - Full Width */}
                    <AnimatedContent distance={20} direction="vertical" delay={0.1}>
                        <a
                            href={`mailto:${portfolioData.personal.email}`}
                            className="block p-8 bg-neutral-900/30 border border-white/10 rounded-xl hover:border-white/30 transition-all group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                                        <Mail size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono text-gray-500 block mb-1 uppercase tracking-wider">Email</span>
                                        <span className="text-xl md:text-2xl text-white font-light tracking-tight">{portfolioData.personal.email}</span>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                    </AnimatedContent>

                    {/* Socials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* GitHub */}
                        <AnimatedContent distance={20} direction="vertical" delay={0.2}>
                            <Magnet padding={50} magnetStrength={10} className="w-full">
                                <a
                                    href={portfolioData.personal.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-8 bg-neutral-900/30 border border-white/10 rounded-xl hover:border-white/30 transition-all group w-full"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                                                <Github size={24} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <span className="text-white font-normal block text-lg">GitHub</span>
                                                <span className="text-sm text-gray-500 font-light">View my projects</span>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                                    </div>
                                </a>
                            </Magnet>
                        </AnimatedContent>

                        {/* LinkedIn */}
                        <AnimatedContent distance={20} direction="vertical" delay={0.3}>
                            <Magnet padding={50} magnetStrength={10} className="w-full">
                                <a
                                    href={portfolioData.personal.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-8 bg-neutral-900/30 border border-white/10 rounded-xl hover:border-white/30 transition-all group w-full"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                                                <Linkedin size={24} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <span className="text-white font-normal block text-lg">LinkedIn</span>
                                                <span className="text-sm text-gray-500 font-light">Connect professionally</span>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                                    </div>
                                </a>
                            </Magnet>
                        </AnimatedContent>
                    </div>
                </div>

                {/* Location */}
                <AnimatedContent distance={20} direction="vertical" delay={0.4}>
                    <div className="mt-12 flex items-center gap-2 text-gray-500 font-mono text-sm">
                        <MapPin size={16} />
                        <span>{portfolioData.personal.location}</span>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default Contact;
