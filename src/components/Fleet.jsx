import { useEffect, useRef, useState } from 'react';

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
            <div className="container">
                <h2 className="section-title fade-in">Our Fleet: Comfortable Travel Options</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
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
        </section>
    );
}
