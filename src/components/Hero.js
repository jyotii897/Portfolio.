'use client';

import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.stagger}>
                <span className={styles.greeting}>hello there, i&apos;m</span>
                <h1 className={styles.name}>
                    Jyoti Kumari<span className={styles.nameAccent}>.</span>
                </h1>
                <p className={styles.headline}>
                    I&apos;m an aspiring <span>Full-Stack Developer</span> bridging the gap between elegant user interfaces and robust backend architectures. Based in Faridabad and wrapping up my B.Tech at <span>VIT</span>, I love transforming complex engineering challenges into seamless, scalable digital experiences.
                </p>
                <div className={styles.btnWrapper}>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
