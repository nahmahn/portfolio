import AnimatedContent from './ui/AnimatedContent';
import BlurText from './ui/BlurText';
import StarBorder from './ui/StarBorder';

import { portfolioData } from '../portfolioData';
import { ArrowUpRight, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleProject = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="projects" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <span className="text-sm font-light font-mono text-gray-500 mb-2 block tracking-wider">02 — PROJECTS</span>
                    <BlurText
                        text="Selected Work"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl md:text-5xl font-light text-white mb-24 tracking-tight"
                    />
                </AnimatedContent>

                <div className="flex flex-col gap-32">
                    {portfolioData.projects.map((project, index) => (
                        <AnimatedContent
                            key={index}
                            distance={20}
                            direction="vertical"
                            delay={index * 0.1}
                        >
                            <div className="group">
                                {/* Project Header: Image & Title Area */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                    <StarBorder as="div" className="w-full h-full p-1" color="cyan" speed="4s">
                                        <div
                                            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900/50 cursor-pointer w-full h-full"
                                            onClick={() => toggleProject(index)}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                            />

                                            {project.badge && (
                                                <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-medium px-2 py-1 rounded flex items-center tracking-wide uppercase z-10 pointer-events-none">
                                                    {project.badge}
                                                </div>
                                            )}
                                        </div>
                                    </StarBorder>

                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs px-2 py-1 border border-white/10 text-gray-500 rounded font-mono uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => toggleProject(index)}
                                            className="text-sm text-gray-500 flex items-center gap-2 hover:text-white transition-colors self-start"
                                        >
                                            {expandedIndex === index ? 'Close Case Study' : 'View Case Study'}
                                            {expandedIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Detail View - Matching Reference Layout */}
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Bezier for smooth open
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 border-t border-white/10">

                                                {/* Column 1: Overview */}
                                                <div className="lg:col-span-2 space-y-12">
                                                    <div>
                                                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                                            Overview
                                                        </h4>
                                                        <p className="text-lg text-gray-300 font-light leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                                            Architecture & Key Decisions
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {project.points.map((point, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-gray-400 font-light text-base">
                                                                    <span className="text-white/20 mt-1.5 text-xs">▪</span>
                                                                    {point}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="flex gap-4 pt-4">
                                                        {project.github && (
                                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-transparent border border-white/20 text-white font-normal hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-sm rounded-sm">
                                                                <Github size={16} /> View Code
                                                            </a>
                                                        )}
                                                        {project.link && project.link !== "#" && (
                                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-transparent border border-white/20 text-white font-normal hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-sm rounded-sm">
                                                                <ArrowUpRight size={16} /> Live Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Column 2: Metrics (Right Side) */}
                                                <div className="lg:border-l border-white/10 lg:pl-12">
                                                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
                                                        Metrics & Results
                                                    </h4>

                                                    <div className="space-y-8">
                                                        {project.metrics && project.metrics.map((metric, i) => (
                                                            <div key={i}>
                                                                <div className="text-3xl font-light text-white mb-1 tracking-tight">
                                                                    {metric.value}
                                                                </div>
                                                                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                                                    {metric.label}
                                                                </div>
                                                            </div>
                                                        ))}

                                                        {!project.metrics && (
                                                            <div className="text-gray-500 font-light italic">
                                                                Metrics gathering in progress...
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
