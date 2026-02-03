import AnimatedContent from './ui/AnimatedContent';
import BlurText from './ui/BlurText';
import { portfolioData } from '../portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <span className="text-sm font-mono text-gray-500 mb-2 block tracking-wider">04 — EXPERIENCE</span>
                    <BlurText
                        text="Work & Achievements"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-5xl font-light text-white mb-16 tracking-tight"
                    />
                </AnimatedContent>

                <div className="space-y-16">
                    {portfolioData.experience.map((exp, index) => (
                        <AnimatedContent
                            key={index}
                            distance={20}
                            direction="vertical"
                            delay={index * 0.1}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="md:col-span-1">
                                    <span className="text-sm font-mono text-gray-500 block">{exp.period}</span>
                                    <span className="text-sm text-gray-600 block mt-1">{exp.location}</span>
                                </div>
                                <div className="md:col-span-3">
                                    <h3 className="text-2xl font-normal text-white mb-2">{exp.role}</h3>
                                    <div className="text-lg text-white/80 mb-6 font-medium">{exp.company}</div>

                                    <ul className="space-y-4 text-gray-400 font-light leading-relaxed list-disc list-outside ml-4 marker:text-gray-600">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
