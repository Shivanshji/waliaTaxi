import { useEffect, useRef } from 'react';
import './Fleet.css';

const vehicles = [
    {
        icon: '🚗',
        name: 'Sedan',
        cap: 'Upto 4 Passengers • e.g., Maruti Dzire',
        features: 'Air-conditioned • Ample boot space\nFuel-efficient • Best for city trips',
        tag: 'Most Popular',
        wa: 'I%20want%20to%20book%20a%20Sedan',
    },
    {
        icon: '🚙',
        name: 'SUV',
        cap: 'Upto 7 Passengers • e.g., Toyota Innova',
        features: 'Spacious cabin • Long-distance comfort\nPremium feel • Ideal for families',
        tag: 'Best for Groups',
        wa: 'I%20want%20to%20book%20an%20SUV',
    },
    {
        icon: '🚐',
        name: 'Tempo Traveller',
        cap: 'Upto 12 Passengers',
        features: 'Push-back seats • Large luggage space\nPerfect for tours • Weddings & events',
        tag: 'Group Travel',
        wa: 'I%20want%20to%20book%20a%20Tempo%20Traveller',
    },
];

export default function Fleet() {
    const ref = useRef(null);

    useEffect(() => {
        const els = ref.current?.querySelectorAll('.fade-in') || [];
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const siblings = [...entry.target.parentElement.querySelectorAll('.fade-in')];
                    const idx = siblings.indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('visible'), idx * 120);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="services" className="fleet-section" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">Our Fleet</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Choose the vehicle that fits your journey, group size, and budget.
                </p>
                <div className="fleet-grid">
                    {vehicles.map((v) => (
                        <div className="fleet-card fade-in" key={v.name}>
                            <div className="fleet-icon">{v.icon}</div>
                            <h3>{v.name}</h3>
                            <p className="fleet-cap">{v.cap}</p>
                            <p className="fleet-features">{v.features}</p>
                            <span className="fleet-tag">{v.tag}</span>
                            <a
                                href={`https://wa.me/919876543210?text=${v.wa}`}
                                className="btn btn-amber fleet-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book This
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
