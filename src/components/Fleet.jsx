import { useEffect, useRef, useState } from 'react';
import roadBg from '../assets/road.png';

const fleetData = [
    {
        capacity: '5 Seater',
        tag: 'Most Popular',
        models: [
            { name: 'Dezire', image: '/images/cars/dzire.png', wa: 'I%20want%20to%20book%20a%205-seater%20Dezire' },
            { name: 'Aura', image: '/images/cars/aura.png', wa: 'I%20want%20to%20book%20a%205-seater%20Aura' },
            { name: 'Honda Amaze', image: '/images/cars/amaze.png', wa: 'I%20want%20to%20book%20a%205-seater%20Honda%20Amaze' },
        ],
        features: 'Air-conditioned • Ample boot space\nFuel-efficient • Best for city trips',
    },
    {
        capacity: '7 Seater',
        tag: 'Best for Groups',
        models: [
            { name: 'Ertiga', image: '/images/cars/ertiga.png', wa: 'I%20want%20to%20book%20a%207-seater%20Ertiga' },
            { name: 'Kia Carens', image: '/images/cars/carens.png', wa: 'I%20want%20to%20book%20a%207-seater%20Kia%20Carens' },
        ],
        features: 'Spacious cabin • Long-distance comfort\nPremium feel • Ideal for families',
    },
    {
        capacity: '8 Seater',
        tag: 'Premium Travel',
        models: [
            { name: 'Innova Crysta', image: '/images/cars/innova.png', wa: 'I%20want%20to%20book%20an%208-seater%20Innova%20Crysta' },
        ],
        features: 'Extra comfort • Luxury seating\nSafe & reliable • Great for long trips',
    },
    {
        capacity: '12 Seater',
        tag: 'Large Group',
        models: [
            { name: 'FORCE TRAVELLER BUS', image: '/images/cars/traveller.png', wa: 'I%20want%20to%20book%20a%20FORCE%20TRAVELLER%20BUS,%20Seating%20Capacity:%2012%20Seater,%20Vehicle%20Model:%20G32-5' },
            { name: 'Force Urbania', image: '/images/cars/urbania.png', wa: 'I%20want%20to%20book%20a%20Force%20Urbania%204400WB/12-Seater' },
        ],
        features: 'Push-back seats • Large luggage space\nPerfect for tours • Weddings & events',
    },
    {
        capacity: '17 Seater',
        tag: 'Major Group',
        models: [
            { name: 'FORCE TRAVELLER BUS', image: '/images/cars/traveller.png', wa: 'I%20want%20to%20book%20a%20FORCE%20TRAVELLER%20BUS,%20Seating%20Capacity:%2017%20Seater,%20Vehicle%20Model:%20G32-5' },
            { name: 'Force Urbania', image: '/images/cars/urbania.png', wa: 'I%20want%20to%20book%20a%20Force%20Urbania%204400WB/17-Seater' },
        ],
        features: 'Spacious seating • Fully Air-Conditioned\nProfessional Driver • Smooth touring',
    },
];

export default function Fleet() {
    const ref = useRef(null);
    const [selections, setSelections] = useState(
        fleetData.reduce((acc, curr) => ({ ...acc, [curr.capacity]: curr.models[0] }), {})
    );

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

    const handleModelChange = (capacity, modelName) => {
        const category = fleetData.find(f => f.capacity === capacity);
        const selectedModel = category.models.find(m => m.name === modelName);
        setSelections(prev => ({ ...prev, [capacity]: selectedModel }));
    };

    return (
        <section id="services" className="fleet-section" ref={ref}>
            <div className="fleet-overlay" />
            <div className="container fleet-container">
                <h2 className="section-title fade-in text-white">Our Fleet: Comfortable Travel Options</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in text-white-80">
                    Pick your ideal seating capacity and choose from our premium vehicle range.
                </p>
                <div className="fleet-grid">
                    {fleetData.map((category) => {
                        const current = selections[category.capacity];
                        return (
                            <div className="fleet-card fade-in" key={category.capacity}>
                                <div className="fleet-tag-top">{category.tag}</div>
                                <div className="fleet-img-container">
                                    <img src={current.image} alt={current.name} className="fleet-car-image" />
                                </div>

                                <div className="fleet-info">
                                    <h3>{category.capacity}</h3>

                                    <div className="model-selector-wrapper">
                                        <label htmlFor={`select-${category.capacity}`}>Select Model:</label>
                                        <div className="select-with-icon">
                                            <select
                                                id={`select-${category.capacity}`}
                                                value={current.name}
                                                onChange={(e) => handleModelChange(category.capacity, e.target.value)}
                                                className="fleet-select"
                                            >
                                                {category.models.map(m => (
                                                    <option key={m.name} value={m.name}>{m.name}</option>
                                                ))}
                                            </select>
                                            <svg className="select-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    <ul className="fleet-features">
                                        {category.features.split('\n').map((f, i) => (
                                            <li key={i}>
                                                <svg className="svg-icon" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/919872200267?text=${current.wa}`}
                                        className="btn btn-amber fleet-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Book {current.name}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .fleet-section {
                    position: relative;
                    background-image: url(${roadBg});
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    padding: 96px 0;
                    overflow: hidden;
                    background-color: var(--primary);
                }
                .fleet-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(rgba(30, 58, 138, 0.96) 0%, rgba(30, 58, 138, 0.8) 100%);
                    z-index: 1;
                }
                .fleet-container {
                    position: relative;
                    z-index: 2;
                }
                .fleet-card {
                    background: rgba(255, 255, 255, 0.08) !important;
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                }
                .fleet-card:hover {
                    background: rgba(255, 255, 255, 0.12) !important;
                    border-color: var(--secondary) !important;
                }
                .text-white {
                    color: white !important;
                }
                .text-white-80 {
                    color: rgba(255, 255, 255, 0.8) !important;
                }
                .fleet-select {
                    width: 100%;
                    padding: 10px 12px;
                    background: white !important;
                    border: 1px solid #e2e8f0 !important;
                    border-radius: 4px;
                    color: var(--primary) !important;
                    font-weight: 700 !important;
                    font-size: 0.85rem;
                    appearance: none;
                    cursor: pointer;
                }
                .fleet-select:focus {
                    border-color: var(--secondary) !important;
                    outline: none;
                }
                .select-with-icon {
                    position: relative;
                }
                .select-arrow {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 14px;
                    height: 14px;
                    pointer-events: none;
                    color: var(--primary) !important;
                    opacity: 0.7;
                }
                @media (max-width: 600px) {
                    .fleet-section {
                        background-attachment: scroll;
                    }
                }
            ` }} />
        </section>
    );
}
