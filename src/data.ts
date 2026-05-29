import { Project, SkillCategory, ExperienceTimelineItem, EducationItem, StatItem } from './types';

export const PORTFOLIO_OWNER = {
  name: "Dheeraj C",
  titles: [
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast"
  ],
  email: "dheerajc8073@gmail.com",
  github: "https://github.com/dheerajc8073",
  linkedin: "https://linkedin.com/in/dheeraj-c",
  resumeUrl: "#", // Handled with a sleek modal download or placeholder
  bio: "Passionate Computer Science student focused on Artificial Intelligence, Computer Vision, Full Stack Development, and modern web technologies. Experienced in building intelligent applications using Python, React, FastAPI, YOLOv8, OpenCV, and cloud deployment platforms.",
  avatar: "" // Elegant CSS Avatar
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Snake Detection AI",
    description: "An AI-powered computer vision system trained on YOLOv8 capable of identifying various snake species from images, videos, and real-time camera streams. Integrated with specialized warning systems to assist individuals and forest departments in identifying venomous vs non-venonmous species instantly.",
    technologies: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/dheerajc8073/snake-detection-ai",
    liveUrl: "https://snake-ai-demo.example.com",
    imageFallbackType: "snake-detection",
    category: "AI / Machine Learning",
    featured: true,
    contributionNotes: [
      "Curated, balanced and annotated a specialized custom dataset of 3,500+ snake images representing local venomous and non-venomous species.",
      "Trained YOLOv8 model configurations with optimized transfer learning parameters, reaching a robust detection peak mAP@0.5 of 94.2%.",
      "Developed an ultra-low latency real-time video chunk parsing pipeline using asynchronous FastAPI WebSocket streams to avoid frame drop bottlenecks.",
      "Engineered an elegant, modular user interface with custom reactive SVG charts indicating active confidence probability maps."
    ],
    architectureSummary: "React Frontend Client ──► Asynchronous FastAPI Router ──► OpenCV Dynamic Frame Splitter ──► YOLOv8 Model Weights ──► Alert Broker & Email Notify Thread",
    documentationUrl: "https://github.com/dheerajc8073/snake-detection-ai/blob/main/README.md"
  },
  {
    id: "2",
    title: "AgroConnect Portal",
    description: "A comprehensive digital ecosystem for smart agriculture. Enables local farmers to upload crop health pictures for instantaneous disease diagnostics, reviews automated agricultural insights via real-time sensors, and generates custom recommendation feeds using historical soil and moisture metadata metrics.",
    technologies: ["React", "Next.js", "FastAPI", "MongoDB", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/dheerajc8073/agro-connect",
    liveUrl: "https://agroconnect.example.com",
    imageFallbackType: "agro-connect",
    category: "Full Stack Web",
    featured: true,
    contributionNotes: [
      "Designed and implemented a clean Next.js architecture enabling static generation for educational crop portals and server-side loading for sensor telemetry charts.",
      "Constructed a secure MongoDB data vault storing historic soil attributes, crops planted, and farmer interaction metrics with robust indices.",
      "Created a rule-based recommended cropping model utilizing local weather API data hooks integrated with customized FastAPI endpoints.",
      "Aided optimization of image upload payloads by implementing client-side compression canvas tools, reducing typical upload sizes by 65%."
    ],
    architectureSummary: "Next.js Web Service ──► MongoDB Telemetry Store ──► Soil & Moisture Telemetry APIs ──► Machine Learning Predictive Health Diagnosis API ──► Custom Alert Notifications Hub",
    documentationUrl: "https://github.com/dheerajc8073/agro-connect/blob/main/docs/ARCHITECTURE.md"
  },
  {
    id: "3",
    title: "AI Assistant Platform",
    description: "Multi-modal AI chatbot orchestrator that binds high-performance generative models with enterprise retrieval contexts. Supports active markdown streams, interactive PDF/CSV analytical grounding, dynamic playground settings, and ultra-responsive conversations packaged in a sleek interface.",
    technologies: ["Python", "FastAPI", "LLMs", "React", "Docker", "WebSockets"],
    githubUrl: "https://github.com/dheerajc8073/ai-assistant-platform",
    liveUrl: "https://ai-orchestration.example.com",
    imageFallbackType: "ai-assistant",
    category: "AI / Machine Learning",
    featured: true,
    contributionNotes: [
      "Architected a scalable WebSocket endpoint in FastAPI to broadcast prompt completions chunk-by-chunk in real time, delivering a superior UX.",
      "Implemented intelligent PDF/CSV file parsers and configured a custom vector index enabling fast Retrieval Augmented Generation (RAG).",
      "Designed a full playground settings screen with sliding parameter controls (Temperature, Top-P, token ceilings) saved to global React Context state.",
      "Integrated flexible Docker container structures to quickly test configurations across target staging instances."
    ],
    architectureSummary: "React Playgrounds Client ──► FastAPI WebSocket Channel ──► Multi-Modal Chat Engine ──► Vector Index Retriever (Semantic Search Chunking) ──► Dockerized LLM Engine",
    documentationUrl: "https://github.com/dheerajc8073/ai-assistant-platform/blob/main/README.md"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 93 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 88 },
      { name: "Flask", level: 80 },
      { name: "REST APIs", level: 92 }
    ]
  },
  {
    title: "AI/ML (Computer Vision)",
    skills: [
      { name: "YOLOv8", level: 88 },
      { name: "OpenCV", level: 85 },
      { name: "Machine Learning", level: 82 },
      { name: "Deep Learning", level: 78 },
      { name: "Computer Vision", level: 84 }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 83 },
      { name: "MySQL", level: 85 }
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 85 }
    ]
  }
];

export const EXPERIENCE_TIMELINE: ExperienceTimelineItem[] = [
  {
    id: "exp-1",
    role: "AI Lead & Full Stack Developer",
    company: "Smart Agri & CV Research Projects",
    period: "2025 - Present",
    description: [
      "Designed and trained YOLOv8 model variants with custom-annotated datasets of snake species, achieving a high mean Average Precision (mAP) for field deployment.",
      "Developed a responsive UI allowing users to execute computer vision operations directly via real-time webcams utilizing FastAPI backends.",
      "Architected responsive microservices, improving model prediction endpoint speeds by 30% utilizing asynchronous Python structures."
    ],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Core Open Source Contributor",
    company: "GitHub / Developer Community",
    period: "2024 - Present",
    description: [
      "Built and open-sourced AgroConnect, a smart web app optimized for low-bandwidth farming areas using modern server-side rendering in Next.js.",
      "Contributed to computer vision wrapper projects, streamlining standard camera capture hooks in browser-friendly formats.",
      "Participated in national-level hackathons presenting AI solutions for real-world municipal problems."
    ],
    type: "project"
  },
  {
    id: "exp-3",
    role: "Computer Science Researcher",
    company: "AI & ML Academic Circles",
    period: "2023 - 2024",
    description: [
      "Spearheaded structural pipelines for LLM processing, fine-tuning public APIs using advanced system constraints.",
      "Authored interactive papers regarding the impact of instant visual diagnostics on agricultural crop output levels."
    ],
    type: "academic"
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Don Bosco Institute of Technology, Bangalore",
    period: "2025 - 2029 (Expected)",
    description: "Focusing heavily on Computer Science principles, Software Engineering, and Advanced Electives in Intelligence Systems.",
    highlights: [
      "Specially elected coursework: Artificial Intelligence, Deep Learning, Digital Image Processing, Database Management Systems.",
      "Active member of the Academic Club of Artificial Intelligence.",
      "Recipient of competitive academic performance scholarship."
    ]
  }
];

export const STATS: StatItem[] = [
  {
    label: "Projects Architected",
    value: "15",
    suffix: "+",
    description: "AI-powered web ecosystems and computer vision integrations built from index files to deployment."
  },
  {
    label: "AI Models Trained",
    value: "8",
    suffix: "",
    description: "Custom YOLO models and CNNs optimized for specific detection and segmentation goals."
  },
  {
    label: "Accuracy Rate",
    value: "94.2",
    suffix: "%",
    description: "Class detection accuracy achieved in production runs on challenging environment datasets."
  },
  {
    label: "Commits Contributed",
    value: "500",
    suffix: "+",
    description: "Clean, documented Git history showing active daily development and code testing."
  }
];
