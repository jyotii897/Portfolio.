'use client';

import styles from './About.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TECH_STACK = [
    'React', 'Next.js', 'JavaScript', 'TypeScript',
    'Node.js', 'Python', 'Django', 'Flask',
    'PostgreSQL', 'Firebase', 'REST APIs', 'UI/UX'
];

export default function About() {
    const ref = useScrollReveal();

    return (
        <section id="about" className="section">
            <div className="section-label">About</div>
            <div ref={ref} className={`${styles.about} fade-in`}>
                <p>
                    I view software engineering as a puzzle where both the user interface and the underlying logic have to click perfectly. As an aspiring <span className={styles.highlight}>Full-Stack Developer</span>, my journey started with building pixel-perfect frontends, but quickly expanded into architecting the databases and APIs that make them actually breathe.
                </p>
                <p>
                    I&apos;m a self-taught builder who learns best by shipping. From crafting interactive React components to wiring up Python-powered computer vision endpoints and Firebase databases, I love owning the entire lifecycle of a feature. There is a deep satisfaction in understanding a request from the initial button click all the way down to the database transaction.
                </p>
                <p>
                    Currently wrapping up my degree, I am actively looking for opportunities to bring my energy to an engineering team. I want to absorb best practices from senior devs, tackle problems that scale, and build products that genuinely impact users. When my editor is closed, I&apos;m usually researching new AI integrations, optimizing my old code, or finding the best cup of coffee in the city.
                </p>

                <ul className={styles.techList}>
                    {TECH_STACK.map((tech) => (
                        <li key={tech} className={styles.techTag}>{tech}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
