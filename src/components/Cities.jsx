import { useEffect, useRef } from 'react';


const cities = [
    { name: 'Jalandhar', price: 'Local Trip', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80&fm=webp' },
    { name: 'Amritsar', price: 'From ₹899', img: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&q=80&fm=webp' },
    { name: 'Adampur', price: 'From ₹199', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&fm=webp' },
    { name: 'Phagwara', price: 'From ₹299', img: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=600&q=80&fm=webp' },
    { name: 'Dasuya', price: 'From ₹349', img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80&fm=webp' },
    { name: 'Tanda', price: 'From ₹399', img: 'https://images.unsplash.com/photo-1519955266818-0231b740e73f?w=600&q=80&fm=webp' },
    { name: 'Mukerian', price: 'From ₹449', img: 'https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?w=600&q=80&fm=webp' },
    { name: 'Hoshiarpur', price: 'From ₹399', img: 'https://images.unsplash.com/photo-1519955266818-0231b740e73f?w=600&q=80&fm=webp' },
    { name: 'Chandigarh', price: 'From ₹999', img: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=600&q=80&fm=webp' },
    { name: 'Delhi', price: 'From ₹2,499', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&fm=webp' },
    { name: 'Ludhiana', price: 'From ₹699', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&fm=webp' },
    { name: 'Pathankot', price: 'From ₹499', img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80&fm=webp' },
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
                <h2 className="section-title fade-in">Taxi Service Locations in Jalandhar & Punjab</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    From Jalandhar we cover all of Punjab — Phagwara, Ludhiana, Amritsar, Adampur, Dasuya, Tanda, Mukerian, Hoshiarpur and beyond. Reliable, on-time, every time.
                </p>
                <div className="cities-grid">
                    {cities.map((c) => (
                        <div className="city-card fade-in" key={c.name}>
                            <img src={c.img} alt={`WaliaTaxi cab service in ${c.name}`} width="600" height="400" loading="lazy" className="city-image" />
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
