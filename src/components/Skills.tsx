import AnimatedContent from './ui/AnimatedContent';
import BlurText from './ui/BlurText';
import { portfolioData } from '../portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <span className="text-sm font-mono text-gray-500 mb-2 block tracking-wider">03 — SKILLS</span>
                    <BlurText
                        text="Technologies"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-5xl font-light text-white mb-20 tracking-tight"
                    />
                </AnimatedContent>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                    {/* Languages */}
                    <AnimatedContent distance={20} direction="vertical" delay={0.1}>
                        <div>
                            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Languages</h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {portfolioData.skills.languages.map((skill) => (
                                    <span key={skill} className="text-gray-400 text-lg hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* ML / AI */}
                    <AnimatedContent distance={20} direction="vertical" delay={0.2}>
                        <div>
                            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">ML / AI</h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {portfolioData.skills.ml_ai.map((skill) => (
                                    <span key={skill} className="text-gray-400 text-lg hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* Backend */}
                    <AnimatedContent distance={20} direction="vertical" delay={0.3}>
                        <div>
                            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Backend & Databases</h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {portfolioData.skills.backend_db.map((skill) => (
                                    <span key={skill} className="text-gray-400 text-lg hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* DevOps */}
                    <AnimatedContent distance={20} direction="vertical" delay={0.4}>
                        <div>
                            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">DevOps & Tools</h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {portfolioData.skills.devops_tools.map((skill) => (
                                    <span key={skill} className="text-gray-400 text-lg hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default Skills;
