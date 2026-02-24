import { useEffect, useRef } from 'react';
import './Testimonials.css';

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
        quote: '"We booked a Tempo Traveller for our family trip to Pathankot. It was comfortable, on time, and the driver was very helpful with luggage. Highly recommend SwiftRide!"',
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
        <section id="testimonials" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">What Our Riders Say</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Thousands of satisfied passengers across Punjab trust SwiftRide for every journey.
                </p>
                <div className="testi-grid">
                    {reviews.map((r) => (
                        <div className="testi-card fade-in" key={r.name}>
                            <div className="testi-stars">{'★'.repeat(r.stars)}</div>
                            <p className="testi-quote">{r.quote}</p>
                            <p className="testi-author">{r.name}</p>
                            <p className="testi-loc">{r.loc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
