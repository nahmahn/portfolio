import AnimatedContent from './ui/AnimatedContent';
import { portfolioData } from '../portfolioData';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" className="py-24 px-6 bg-black border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <AnimatedContent distance={20} direction="vertical">
                    <span className="text-sm font-mono text-gray-500 mb-2 block tracking-wider">05 — RESUME</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Curriculum Vitae</h2>
                </AnimatedContent>

                <div className="bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Naman_Resume.pdf</h3>
                                <p className="text-xs text-gray-500">Latest updated: February 2025</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={portfolioData.personal.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm font-medium text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <ExternalLink size={16} /> View
                            </a>
                            <a
                                href={portfolioData.personal.resume}
                                download
                                className="px-5 py-2 text-sm font-medium bg-white text-black hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Download size={16} /> Download
                            </a>
                        </div>
                    </div>

                    <div className="w-full h-[800px] bg-neutral-900 relative">
                        <iframe
                            src={`${portfolioData.personal.resume}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full h-full"
                            title="Resume PDF"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden bg-neutral-900 border-t border-white/10">
                            <p className="text-gray-500 text-sm">Preview not available on mobile</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
