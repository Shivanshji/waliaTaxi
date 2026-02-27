import { useEffect, useRef, useState } from 'react';

const cities = [
    { name: 'Jalandhar' },
    { name: 'Amritsar' },
    { name: 'Ludhiana' },
    { name: 'Chandigarh' },
    { name: 'Delhi' },
    { name: 'Adampur' },
    { name: 'Phagwara' },
    { name: 'Dasuya' },
    { name: 'Tanda' },
    { name: 'Mukerian' },
    { name: 'Hoshiarpur' },
    { name: 'Pathankot' },
    { name: 'Jammu' },
    { name: 'Katra' },
    { name: 'Shimla' },
    { name: 'Manali' },
    { name: 'Dharamshala' },
    { name: 'Dalhousie' }
];

export default function Cities() {
    const ref = useRef(null);
    const [showAll, setShowAll] = useState(false);

    const visibleCities = showAll ? cities : cities.slice(0, 8);

    useEffect(() => {
        const els = ref.current?.querySelectorAll('.fade-in') || [];
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const siblings = [...entry.target.parentElement.querySelectorAll('.fade-in')];
                    const idx = siblings.indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('visible'), idx * 50);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, [visibleCities]);

    return (
        <section id="cities" className="cities-section" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">Taxi Service Locations</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    We provide reliable taxi services across all major cities and tourist destinations in North India.
                </p>

                <div className="cities-text-grid">
                    {visibleCities.map((c) => (
                        <div className="city-text-tag fade-in" key={c.name}>
                            <svg className="city-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>{c.name}</span>
                        </div>
                    ))}
                </div>

                <div className="view-more-container fade-in">
                    <button
                        className="btn btn-outline"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Less' : 'View More Destinations'}
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .cities-section {
                    padding: 96px 0;
                    background: white;
                }
                .cities-text-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    margin-top: 48px;
                }
                .city-text-tag {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 20px;
                    background: var(--bg);
                    border-radius: 8px;
                    border: 1px solid var(--border-color);
                    transition: all 0.3s ease;
                }
                .city-text-tag:hover {
                    border-color: var(--secondary);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }
                .city-icon {
                    width: 18px;
                    height: 18px;
                    color: var(--secondary);
                }
                .city-text-tag span {
                    font-weight: 600;
                    color: var(--primary);
                    font-size: 1rem;
                }
                .view-more-container {
                    margin-top: 48px;
                    text-align: center;
                }
                .btn-outline {
                    background: transparent;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    font-weight: 700;
                    transition: all 0.3s ease;
                }
                .btn-outline:hover {
                    background: var(--primary);
                    color: white;
                }
                @media (max-width: 992px) {
                    .cities-text-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .cities-text-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 480px) {
                    .cities-text-grid {
                        grid-template-columns: 1fr;
                    }
                }
            ` }} />
        </section>
    );
}
