import AnimatedContent from './ui/AnimatedContent';
import { portfolioData } from '../portfolioData';

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Education</h2>
                </AnimatedContent>

                <div className="space-y-12">
                    {portfolioData.education.map((edu, index) => (
                        <AnimatedContent key={index} distance={20} direction="vertical" delay={index * 0.1}>
                            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between group">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">{edu.institution}</h3>
                                    <p className="text-lg text-gray-400 mt-1">{edu.degree}</p>
                                    <p className="text-sm text-gray-500 mt-2 font-mono">{edu.location}</p>
                                </div>
                                <div className="text-right md:text-right text-left">
                                    <span className="text-xl font-mono text-white block">{edu.grade}</span>
                                    <span className="text-sm text-gray-500 font-mono mt-1 block">{edu.period}</span>
                                    {edu.extra && <span className="text-sm text-gray-600 font-mono mt-1 block">{edu.extra}</span>}
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Achievements Subsection if desired here or separate */}
                <AnimatedContent distance={20} direction="vertical" delay={0.3}>
                    <div className="mt-20">
                        <h3 className="text-xl font-bold text-white mb-8 border-l-2 border-white pl-4">Achievements</h3>
                        <ul className="space-y-4">
                            {portfolioData.achievements.map((item: string, i: number) => (
                                <li key={i} className="text-gray-400 flex gap-3 text-lg font-light">
                                    <span className="text-white/50 transform translate-y-2 text-xs">◆</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default Education;
