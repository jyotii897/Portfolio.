'use client';

import { useState, useEffect } from 'react';
import styles from './Work.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/*
  ──────────────────────────────────────────────
  PROJECTS DATA
  ──────────────────────────────────────────────
*/
const PROJECTS = [
    {
        overline: '2025',
        title: 'PrepWise',
        description:
            'A mock interview platform that simulates real technical interviews using conversational AI. I integrated the Vapi SDK with Google Gemini to create low-latency voice interactions, handled browser APIs for webcam/mic permissions, built self-healing connections for dropped audio streams, and wired up Firebase for auth, session history, and detailed technical scorecards.',
        detailedDescription:
            'During my learning journey, I wanted to build something that solved a real problem for students preparing for interviews. PrepWise is a mock interview platform using AI. As a fresher, integrating the Vapi SDK with Google Gemini was a great challenge in understanding low-latency WebSockets and handling browser APIs for media devices. I also built out the Firebase backend to track authenticated users and store their session scorecards, giving me solid full-stack experience.',
        tags: ['React', 'Vapi SDK', 'Google Gemini', 'Firebase', 'Web APIs'],
        href: 'https://projectfoloi.netlify.app/',
        github: 'https://github.com/jyotii897/ai_mock_interview',
    },
    {
        overline: '2025',
        title: 'Cognito',
        description:
            'A touchless attendance system that replaces manual roll calls with real-time facial recognition. I built a custom computer vision pipeline using OpenCV and dlib to detect and match faces against a local encoding store, optimized frame capture rates to avoid CPU bottlenecking on a Flask server, and wired up Firebase Realtime Database to broadcast attendance events to a live admin dashboard.',
        detailedDescription:
            'I built this touchless attendance system to replace manual roll calls. Working on this project taught me a lot about computer vision basics using Python, OpenCV, and dlib. The biggest hurdle as a junior developer was dealing with CPU bottlenecking when processing heavy video feeds on a simple Flask server. I learned how to optimize frame capture rates and use Firebase Realtime Database to instantly sync the recognized faces to an admin dashboard.',
        tags: ['Python', 'OpenCV', 'dlib', 'Flask', 'Firebase', 'Computer Vision'],
        href: null,
        github: 'https://github.com/jyotii897/Cognitive-Attendance-System',
    },
    {
        overline: 'Internship · 2024',
        title: 'VibeSync',
        description:
            'Built the frontend for a personalized motivation app during my internship. I designed and implemented the interactive dashboard where users filter by mood, tone, and demographics to receive tailored quotes. Built the central Card component with like/dislike feedback tracking, and connected it all to the backend API for real-time content delivery.',
        detailedDescription:
            'During my internship, I worked on the frontend for VibeSync, a personalized motivation app. Instead of generic quotes, users get tailored encouragement based on their mood and demographics. My role was focused on delivering a clean, interactive UI using React and CSS, building out the dashboard filters and the central content card. Integrating this with the backend REST APIs taught me a lot about real-time state management and working within a team\'s architecture.',
        tags: ['React', 'CSS', 'REST APIs', 'UI/UX'],
        href: null,
        github: null,
    },
    {
        overline: '2024',
        title: 'Chat With Anything AI',
        description:
            'Built a document-aware chatbot that lets users upload PDFs, text files, or scrape live websites and ask questions about them. I handled the full stack — from the Streamlit UI with text-to-speech playback, to the LangChain pipeline that chunks documents, generates embeddings via Hugging Face, stores them in ChromaDB, and retrieves sourced answers through Groq-hosted LLMs.',
        detailedDescription:
            'This was a fun project to explore Generative AI ecosystems. It\'s a chatbot that understands uploaded PDFs, text files, or live websites. I handled the end-to-end flow, from building the user interface in Streamlit to setting up the LangChain pipeline. As a learner in the AI space, it was incredibly rewarding to successfully chunk documents, create embeddings with Hugging Face, store them in ChromaDB, and connect it all to Groq-hosted LLMs for fast, sourced answers.',
        tags: ['Python', 'Streamlit', 'LangChain', 'ChromaDB', 'Groq', 'Hugging Face'],
        href: 'https://chat--doc-gezvazssv3tvy4vnzxhznf.streamlit.app/',
        github: 'https://github.com/jyotii897/Chat--Doc',
    },
];

export default function Work() {
    const ref = useScrollReveal();
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        if (selectedProject) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section id="work" className="section">
            <div className="section-label">Work</div>
            <div ref={ref} className="fade-in">
                <div className={styles.grid}>
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={i}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}

                    <div className={`${styles.card} ${styles.emptyCard}`}>
                        <div className={styles.emptyIcon}>✦</div>
                        <p className={styles.emptyText}>
                            <strong>More on the way.</strong><br />
                            Always building, always shipping.
                        </p>
                    </div>
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalOverline}>{selectedProject.overline}</div>
                            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                        </div>

                        <div className={styles.modalBody}>
                            <p className={styles.modalDescription}>
                                {selectedProject.detailedDescription || selectedProject.description}
                            </p>

                            <div className={styles.modalTech}>
                                <h4>Tech Stack</h4>
                                <ul className={styles.cardTags}>
                                    {selectedProject.tags.map((tag) => (
                                        <li key={tag} className={styles.tag}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            {selectedProject.href && (
                                <a
                                    href={selectedProject.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.smallButtonPrimary}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Project Link ↗
                                </a>
                            )}
                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.smallButtonSecondary}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'currentColor', verticalAlign: 'middle', marginRight: '6px' }}>
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

function ProjectCard({ overline, title, description, tags, onClick }) {
    return (
        <div
            className={styles.card}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
        >
            <div className={styles.cardAccentLine} />
            {overline && <div className={styles.cardOverline}>{overline}</div>}
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            {tags && tags.length > 0 && (
                <ul className={styles.cardTags}>
                    {tags.map((tag) => (
                        <li key={tag} className={styles.tag}>{tag}</li>
                    ))}
                </ul>
            )}
            <div className={styles.cardLinks}>
                <span className={styles.readMore}>View Details →</span>
            </div>
        </div>
    );
}
