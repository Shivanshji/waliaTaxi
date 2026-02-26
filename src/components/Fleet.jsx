import { useEffect, useRef } from 'react';


const vehicles = [
    {
        icon: <svg className="svg-icon" style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H7.9a2 2 0 0 0-1.7 1z" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="16.5" cy="16.5" r="2.5" /></svg>,
        name: 'Sedan',
        cap: 'Upto 4 Passengers • e.g., Maruti Dzire',
        features: 'Air-conditioned • Ample boot space\nFuel-efficient • Best for city trips',
        tag: 'Most Popular',
        wa: 'I%20want%20to%20book%20a%20Sedan',
    },
    {
        icon: <svg className="svg-icon" style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H7.9a2 2 0 0 0-1.7 1z" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="16.5" cy="16.5" r="2.5" /></svg>,
        name: 'SUV',
        cap: 'Upto 7 Passengers • e.g., Toyota Innova',
        features: 'Spacious cabin • Long-distance comfort\nPremium feel • Ideal for families',
        tag: 'Best for Groups',
        wa: 'I%20want%20to%20book%20an%20SUV',
    },
    {
        icon: <svg className="svg-icon" style={{ width: '40px', height: '40px' }} viewBox="0 0 24 24"><path d="M8 3v6M16 3v6M4 19v2M20 19v2M13 13h4M22 10v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" /><circle cx="7" cy="15" r="2" /><circle cx="17" cy="15" r="2" /></svg>,
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
                <h2 className="section-title fade-in">Cab Booking Options in Jalandhar</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Choose the vehicle that fits your journey, group size, and budget.
                </p>
                <div className="fleet-grid">
                    {vehicles.map((v) => (
                        <div className="fleet-card fade-in" key={v.name}>
                            <div className="fleet-icon-wrapper">
                                {v.icon}
                            </div>
                            <h3>{v.name}</h3>
                            <p className="fleet-cap">{v.cap}</p>
                            <ul className="fleet-features">
                                {v.features.split('\n').map((f, i) => (
                                    <li key={i}>
                                        <svg className="svg-icon" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <span className="fleet-tag">{v.tag}</span>
                            <a
                                href={`https://wa.me/919872200267?text=${v.wa}`}
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
