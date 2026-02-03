import AnimatedContent from './ui/AnimatedContent';
import { portfolioData } from '../portfolioData';
import { FileText, FolderOpen } from 'lucide-react';

import GridMotion from './ui/GridMotion';
import DecryptedText from './ui/DecryptedText';
import ShinyText from './ui/ShinyText';
import Magnet from './ui/Magnet';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black px-6 pt-20 border-b border-white/5 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <GridMotion items={['E', 'N', 'G', 'I', 'N', 'E', 'E', 'R', 'A', 'I', 'C', 'O', 'D', 'E', 'D', 'E', 'V']} />
            </div>
            <div className="relative z-10 max-w-4xl w-full text-center">
                <AnimatedContent distance={30} direction="vertical" delay={0.1}>
                    <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full mb-8 bg-black/40 backdrop-blur-sm">
                        <ShinyText text="Electrical Engineering & AI" disabled={false} speed={3} className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase" />
                    </div>
                </AnimatedContent>

                <AnimatedContent distance={30} direction="vertical" delay={0.2}>
                    <div className="h-24 md:h-32 mb-8 flex items-center justify-center">
                        <DecryptedText
                            text={portfolioData.personal.name}
                            animateOn="view"
                            revealDirection="center"
                            className="text-6xl md:text-8xl font-light text-white tracking-tighter leading-none"
                            encryptedClassName="text-6xl md:text-8xl font-light text-gray-600 tracking-tighter leading-none"
                        />
                    </div>
                </AnimatedContent>

                <AnimatedContent distance={20} direction="vertical" delay={0.3}>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                        {portfolioData.personal.tagline}
                    </p>
                </AnimatedContent>

                <AnimatedContent distance={20} direction="vertical" delay={0.4}>
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-20">
                        <Magnet padding={50} magnetStrength={20}>
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-white text-black font-normal hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 rounded-lg text-sm"
                            >
                                <FolderOpen size={18} />
                                View Projects
                            </button>
                        </Magnet>
                        <Magnet padding={50} magnetStrength={20}>
                            <a
                                href={portfolioData.personal.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-transparent border border-white/20 text-white font-normal hover:bg-white/5 transition-colors flex items-center justify-center gap-2 rounded-lg text-sm"
                            >
                                <FileText size={18} />
                                Download Resume
                            </a>
                        </Magnet>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default Hero;
