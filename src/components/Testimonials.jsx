import { useEffect, useRef } from 'react';


const reviews = [
    {
        stars: 5,
        quote: '"Booked a cab at midnight from Amritsar airport — driver was already waiting before I even came out. Top-notch service, clean car, and very polite. Will use again for sure."',
        name: 'Rajveer Singh',
        loc: 'Amritsar, Punjab',
    },
    {
        stars: 5,
        quote: '"Travelled Jalandhar to Chandigarh for a business meeting. The Innova was spotless and the driver reached 10 minutes early. Fare was exactly what they quoted. No surprises!"',
        name: 'Priya Sharma',
        loc: 'Chandigarh, Punjab',
    },
    {
        stars: 5,
        quote: '"We booked a Tempo Traveller for our family trip to Pathankot. It was comfortable, on time, and the driver was very helpful with luggage. Highly recommend WaliaTaxi!"',
        name: 'Gurpreet Kaur',
        loc: 'Ludhiana, Punjab',
    },
];

export default function Testimonials() {
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
        <section id="testimonials" className="testi-section" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">What Our Riders Say</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Thousands of satisfied passengers across Punjab trust WaliaTaxi for every journey.
                </p>
                <div className="testi-grid">
                    {reviews.map((r) => (
                        <div className="testi-card fade-in" key={r.name}>
                            <div className="testi-stars">
                                {Array(r.stars).fill(0).map((_, i) => (
                                    <svg key={i} className="svg-icon" style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                ))}
                            </div>
                            <p className="testi-quote">{r.quote}</p>
                            <div className="testi-author">
                                <div className="testi-avatar">{r.name.charAt(0)}</div>
                                <div className="testi-author-info">
                                    <strong>{r.name}</strong>
                                    <span>{r.loc}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
