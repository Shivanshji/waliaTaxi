import { useEffect, useRef } from 'react';


const features = [
    { icon: <svg className="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, title: '24/7 Availability', desc: "Day or night, we're always ready. Book anytime for early morning flights or late arrivals." },
    { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>, title: 'Safe & Verified Drivers', desc: 'All drivers are police-verified, trained, and rated by passengers. Your safety is our priority.' },
    { icon: <svg className="svg-icon" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>, title: 'Easy Payment', desc: 'Pay with cash, UPI, Google Pay, or PhonePe. No hidden charges, ever.' },
    { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>, title: 'Real-Time Tracking', desc: 'Share your trip with family. Know where your driver is every step of the way.' },
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
                <h2 className="section-title fade-in">Why Choose WaliaTaxi?</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Combining local knowledge with professional standards, we make every ride comfortable and reliable.
                </p>
                <div className="features-grid">
                    {features.map((f) => (
                        <div className="feature-card fade-in" key={f.title}>
                            <div className="feature-icon-wrapper">
                                {f.icon}
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
