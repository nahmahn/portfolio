export interface Metric {
    value: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
    featured?: boolean;
    badge?: string;
    year: string;
    points: string[];
    metrics?: Metric[];
}

export interface ExperienceItem {
    company: string;
    location: string;
    role: string;
    period: string;
    points: string[];
}

export interface EducationItem {
    institution: string;
    location: string;
    degree: string;
    grade: string;
    period: string;
    extra?: string;
}

export interface Skills {
    languages: string[];
    ml_ai: string[];
    backend_db: string[];
    devops_tools: string[];
}

export interface PortfolioData {
    personal: {
        name: string;
        email: string;
        phone: string;
        github: string;
        linkedin: string;
        resume: string;
        role: string;
        location: string;
        tagline: string;
    };
    about: {
        intro: string;
        journey: string;
        philosophy: string;
    };
    education: EducationItem[];
    experience: ExperienceItem[];
    projects: Project[];
    skills: Skills;
    achievements: string[];
}

export const portfolioData: PortfolioData = {
    personal: {
        name: "Naman Jain",
        email: "namjain06@gmail.com",
        phone: "+91 8076161952",
        github: "https://github.com/nahmahn",
        linkedin: "https://www.linkedin.com/in/nahmahn/",
        resume: "/Naman_Resume.pdf",
        role: "Electrical Engineering & AI",
        location: "New Delhi, India",
        tagline: "Electrical Engineering undergraduate building multimodal AI and vision systems. Focused on computer vision, RAG systems, and end-to-end ML deployment."
    },
    about: {
        intro: "I'm an Electrical Engineering undergraduate at Delhi Technological University with a strong academic record (CGPA 8.8). My foundation in electrical systems gives me a unique perspective on hardware-software integration and signal processing applications in AI.",
        journey: "My journey into AI and Computer Vision began with a fascination for how machines can interpret visual information. I've since built expertise in multimodal AI systems, RAG architectures, and computer vision pipelines—focusing on practical applications that solve real problems.",
        philosophy: "I prioritize systems thinking: understanding not just how to train models, but how to evaluate them rigorously, deploy them reliably, and integrate them into production workflows. My experience includes a Generative AI internship at TestingXperts, recognition at Hack4Delhi (Top 30 out of 2500+ teams), and funding from DTTE, Government of Delhi."
    },
    education: [
        {
            institution: "Delhi Technological University",
            location: "New Delhi, India",
            degree: "B.Tech in Electrical Engineering",
            grade: "CGPA: 8.8",
            period: "2024–2028"
        },
        {
            institution: "Amity International School",
            location: "New Delhi, India",
            degree: "Class XII",
            grade: "96.0%",
            period: "2022–2024",
            extra: "Class X: 99.4%"
        }
    ],
    experience: [
        {
            company: "TestingXperts",
            location: "India",
            role: "Generative AI Summer Intern",
            period: "June 2025 – August 2025",
            points: [
                "Built FastAPI + React platform with secure session-based authentication (HttpOnly cookies, CSRF, Google OAuth)",
                "Developed AI-driven question generation using OpenRouter and sentence-transformers, reducing hallucinations by 99%",
                "Engineered automated report generation with weak-area detection and personalized learning paths",
                "Implemented adaptive assessments with real-time scoring and anti-cheating mechanisms"
            ]
        },
        {
            company: "Hack4Delhi Hackathon",
            location: "New Delhi, India",
            role: "Top 30 at Hack4Delhi",
            period: "2025",
            points: [
                "Ranked Top 30 out of 2500+ participating teams",
                "Project: Railway Tampering & Anomaly Detection System",
                "Implemented Mixture-of-Experts architecture for multi-sensor anomaly detection"
            ]
        },
        {
            company: "Government of Delhi",
            location: "New Delhi, India",
            role: "DTTE Funding Recipient",
            period: "2025",
            points: [
                "Selected among Top 60 startups out of 700+ applicants",
                "Awarded Rs 1,00,000 funding by DTTE (Directorate of Training & Technical Education)",
                "Recognized for innovative technical solution with commercial potential"
            ]
        },
        {
            company: "APOGEE 2025, BITS Pilani",
            location: "Pilani, India",
            role: "3rd Place - Micromouse Competition",
            period: "2025",
            points: [
                "Secured 3rd place at Nano Navigator Micromouse Competition",
                "Designed and programmed autonomous maze-solving robot",
                "Competed against teams from top engineering institutions across India"
            ]
        }
    ],
    projects: [
        {
            title: "Railway Tampering & Anomaly Detection",
            description: "A comprehensive system designed for railway infrastructure monitoring that processes multiple sensor inputs to detect anomalies in real-time. The system uses a Mixture-of-Experts architecture to handle diverse sensor data types effectively, with geo-referenced anomaly detection for precise location tracking.",
            year: "Hack4Delhi Top 30",
            image: "/project-railway.jpg",
            tags: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
            link: "#",
            github: "https://github.com/nahmahn",
            featured: true,
            badge: "Hack4Delhi Top 30",
            points: [
                "Mixture-of-Experts (MoE) for multi-sensor fusion",
                "Real-time anomaly detection pipeline",
                "Geo-referenced anomaly localization",
                "Automated PDF report generation (government compliance)",
                "Multi-modal sensor integration"
            ],
            metrics: [
                { value: "Top 30", label: "HACKATHON RANK" },
                { value: "2500+", label: "TEAMS COMPETED" }
            ]
        },
        {
            title: "StyleSphere",
            description: "A comprehensive fashion AI platform that enables virtual try-on, intelligent clothing search, and personalized outfit recommendations. The system integrates HR-VITON for realistic garment visualization with CBAM attention modules for improved feature extraction.",
            year: "2025",
            image: "/project-stylesphere.jpg",
            tags: ["PyTorch", "HR-VITON", "CBAM", "CLIP", "Pinecone", "LLaMA3"],
            link: "#",
            github: "https://github.com/nahmahn/StyleSphere",
            points: [
                "HR-VITON for virtual try-on with CBAM attention integration",
                "CLIP + Pinecone for semantic fashion search (<1.2s latency)",
                "StyleRAG using LLaMA3 for multimodal outfit Q&A",
                "Region-specific evaluation using SCHP parsing",
                "Sleeve editing and fabric overlay capabilities"
            ],
            metrics: [
                { value: "0.91", label: "SSIM" },
                { value: "0.12", label: "LPIPS" },
                { value: "+18%", label: "CLIP SIMILARITY" },
                { value: "<1.2s", label: "SEARCH LATENCY" },
                { value: "84%", label: "RELEVANCE SCORE" },
                { value: "1,200+", label: "TEST IMAGES" }
            ]
        },
        {
            title: "NxtDevs",
            description: "An intelligent interview preparation platform that leverages RAPTOR and Adaptive RAG for context-aware question generation. Features include real-time 1v1 coding duels with ELO ranking, cognitive bias profiling, and LLM routing between Gemini and Groq.",
            year: "2025",
            image: "/project-nxtdevs.jpg",
            tags: ["FastAPI", "LangChain", "Redis", "Celery", "Gemini", "Groq"],
            link: "https://nxtdevs.app/",
            github: "https://github.com/nahmahn/NxtDevs",
            points: [
                "RAPTOR + Adaptive RAG using LangChain",
                "FastAPI + Celery + Redis for async processing",
                "Gemini + Groq LLM routing for cost optimization",
                "Real-time 1v1 duels with ELO ranking system",
                "Cognitive bias profiling for personalized feedback",
                "Adaptive chunking and retrieval tuning"
            ],
            metrics: [
                { value: "Reduced", label: "QUESTION REPETITION" },
                { value: "Improved", label: "TOPIC DIVERSITY" }
            ]
        },
        {
            title: "DeepShield",
            description: "A robust deepfake detection system that processes videos through multiple stages: super-resolution enhancement, face detection and alignment, spatial feature extraction, and temporal modeling to identify manipulated content across varying qualities.",
            year: "2025",
            image: "/project-deepshield.jpg",
            tags: ["PyTorch", "ESRGAN", "ResNeXt50", "LSTM", "MTCNN"],
            link: "#",
            github: "https://github.com/nahmahn/Deepfake_detection",
            points: [
                "ESRGAN preprocessing for super-resolution",
                "MTCNN for face detection and alignment",
                "ResNeXt50 for spatial feature extraction",
                "LSTM for temporal modeling across frames",
                "Multi-stage pipeline with quality adaptation"
            ],
            metrics: [
                { value: "0.926", label: "AUC" },
                { value: "85%", label: "RECALL" },
                { value: "83%", label: "F1-SCORE" }
            ]
        },
        {
            title: "Vehicle Detection & Tracking",
            description: "A comparative study evaluating transformer-based (DETR) versus CNN-based (Faster R-CNN) object detection approaches for vehicle detection. The system integrates DeepSORT for robust multi-object tracking across video frames.",
            year: "2025",
            image: "/project-vehicle.jpg",
            tags: ["PyTorch", "DETR", "Faster R-CNN", "DeepSORT"],
            link: "#",
            github: "https://github.com/nahmahn",
            points: [
                "DETR (transformer-based) vs Faster R-CNN comparison",
                "DeepSORT for multi-object tracking",
                "Evaluation on vehicle detection benchmarks",
                "Analysis of attention vs region proposal mechanisms"
            ],
            metrics: [
                { value: "2", label: "MODELS COMPARED" },
                { value: "DeepSORT", label: "TRACKING" }
            ]
        }
    ],
    skills: {
        languages: ["C++", "Python", "HTML", "CSS", "JavaScript", "React", "TypeScript", "SQL"],
        ml_ai: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV", "CLIP", "LangChain"],
        backend_db: ["FastAPI", "Supabase", "PostgreSQL", "MySQL", "Redis"],
        devops_tools: ["Docker", "Celery", "Linux", "Git", "VS Code", "Jupyter", "Arduino IDE"]
    },
    achievements: [
        "Ranked Top 30 out of 2500+ teams at Hack4Delhi Hackathon",
        "Awarded Rs 1,00,000 funding by DTTE, Government of Delhi",
        "Secured 3rd place at Nano Navigator Micromouse Competition, APOGEE 2025"
    ]
};
