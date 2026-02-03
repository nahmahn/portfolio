import { Home, User, Briefcase, Code, Cpu, FileText, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'education', icon: User, label: 'Education' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: Code, label: 'Projects' },
        { id: 'skills', icon: Cpu, label: 'Skills' },
        { id: 'resume', icon: FileText, label: 'Resume' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 300; // Offset

            for (const section of sections) {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Toggle */}
            <div className="fixed top-6 right-6 z-50 md:hidden mix-blend-difference">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-white text-black rounded-full shadow-lg"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center py-8 bg-black border-r border-white/10 z-40">
                <div className="mb-8 p-3 bg-white text-black rounded-xl font-bold font-mono text-xl">
                    NJ
                </div>

                <nav className="flex-1 flex flex-col gap-6 justify-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`p-3 rounded-xl transition-all duration-300 group relative ${activeSection === item.id
                                ? 'bg-white text-black'
                                : 'text-gray-500 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <item.icon size={24} strokeWidth={1.5} />

                            {/* Tooltip */}
                            <span className="absolute left-14 bg-white text-black px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>

                <div className="mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600"></div>
                </div>
            </aside>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-40 md:hidden flex flex-col justify-center items-center gap-8"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-2xl font-medium flex items-center gap-4 ${activeSection === item.id ? 'text-white' : 'text-gray-500'
                                    }`}
                            >
                                <item.icon size={28} />
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
