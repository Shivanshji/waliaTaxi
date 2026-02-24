import { useEffect, useRef } from 'react';
import './Features.css';

const features = [
    { icon: '🕐', title: '24/7 Availability', desc: "Day or night, we're always ready. Book anytime for early morning flights or late arrivals." },
    { icon: '🛡️', title: 'Safe & Verified Drivers', desc: 'All drivers are police-verified, trained, and rated by passengers. Your safety is our priority.' },
    { icon: '💳', title: 'Easy Payment', desc: 'Pay with cash, UPI, Google Pay, or PhonePe. No hidden charges, ever.' },
    { icon: '📍', title: 'Real-Time Tracking', desc: 'Share your trip with family. Know where your driver is every step of the way.' },
];

export default function Features() {
    const ref = useRef(null);

    useEffect(() => {
        const els = ref.current?.querySelectorAll('.fade-in') || [];
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const siblings = [...entry.target.parentElement.querySelectorAll('.fade-in')];
                    const idx = siblings.indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('visible'), idx * 100);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="about" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">Why Choose SwiftRide?</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Combining local knowledge with professional standards, we make every ride comfortable and reliable.
                </p>
                <div className="features-grid">
                    {features.map((f) => (
                        <div className="feature-card fade-in" key={f.title}>
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
