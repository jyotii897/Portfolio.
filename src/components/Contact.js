'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
    const ref = useScrollReveal();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/mzdjzwol', { // Using a generic formspree endpoint, but configuring it to point to jyotik06480@gmail.com requires user setup on Formspree. I'll use a placeholder action here and explain it to the user.
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="section-label">Contact</div>
            <div ref={ref} className={`${styles.contact} fade-in`}>
                <h2 className={styles.heading}>
                    Let&apos;s build something<br />
                    <span className={styles.headingAccent}>together.</span>
                </h2>
                <p className={styles.body}>
                    Any recruiter who sees my portfolio can just text me. Write your name and email, and send me a message!
                </p>

                <form className={styles.form} onSubmit={handleSubmit} action="https://formspree.io/f/mzdjzwol" method="POST">
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="YOUR NAME"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="YOUR EMAIL"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea
                            name="message"
                            placeholder="YOUR MESSAGE"
                            required
                            rows={5}
                            className={styles.textarea}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>

                    {status === 'success' && (
                        <p className={styles.successMessage}>Thanks! Your message has been sent.</p>
                    )}
                    {status === 'error' && (
                        <p className={styles.errorMessage}>Oops! There was a problem submitting your form.</p>
                    )}
                </form>

                {/* Footer */}
                <footer className={styles.footer}>
                    <p className={styles.footerText}>
                        Designed &amp; built by{' '}
                        <a href="/" className={styles.footerLink}>Jyoti</a>.
                        <br />
                        Crafted with Next.js, React &amp; a lot of coffee.
                    </p>
                </footer>
            </div>
        </section>
    );
}
