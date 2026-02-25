import { useEffect, useRef } from 'react';


const cities = [
    { name: 'Jalandhar', price: 'Local Trip', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80' },
    { name: 'Amritsar', price: 'From ₹899', img: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&q=80' },
    { name: 'Adampur', price: 'From ₹199', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80' },
    { name: 'Phagwara', price: 'From ₹299', img: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=600&q=80' },
    { name: 'Dasuya', price: 'From ₹349', img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80' },
    { name: 'Tanda', price: 'From ₹399', img: 'https://images.unsplash.com/photo-1519955266818-0231b740e73f?w=600&q=80' },
    { name: 'Mukerian', price: 'From ₹449', img: 'https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?w=600&q=80' },
    { name: 'Hoshiarpur', price: 'From ₹399', img: 'https://images.unsplash.com/photo-1519955266818-0231b740e73f?w=600&q=80' },
    { name: 'Chandigarh', price: 'From ₹999', img: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=600&q=80' },
    { name: 'Delhi', price: 'From ₹2,499', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80' },
    { name: 'Ludhiana', price: 'From ₹699', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80' },
    { name: 'Pathankot', price: 'From ₹499', img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80' },
];

export default function Cities() {
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
        }, { threshold: 0.1 });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="cities" className="cities-section" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">Cities We Cover</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    From Jalandhar we cover all of Punjab — Adampur, Phagwara, Dasuya, Tanda, Mukerian, Hoshiarpur, Amritsar and beyond. Reliable, on-time, every time.
                </p>
                <div className="cities-grid">
                    {cities.map((c) => (
                        <div className="city-card fade-in" key={c.name}>
                            <img src={c.img} alt={c.name} width="600" height="400" loading="lazy" className="city-image" />
                            <div className="city-info">
                                <span className="city-name">{c.name}</span>
                                <span className="city-price">{c.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
