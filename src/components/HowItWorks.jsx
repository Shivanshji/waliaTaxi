import { Fragment, useEffect, useRef } from 'react';



const steps = [
    { num: 1, title: 'Call or WhatsApp Us', desc: 'Reach out anytime on +91 98722 00267 or message us on WhatsApp with your pickup details.' },
    { num: 2, title: 'We Confirm Your Ride', desc: 'Our team confirms the booking instantly, shares driver details, and gives you a fixed fare upfront.' },
    { num: 3, title: 'Driver Arrives On Time', desc: 'Your vetted driver arrives at your doorstep, ready to take you wherever you need to go.' },
];

export default function HowItWorks() {
    const ref = useRef(null);

    useEffect(() => {
        const els = ref.current?.querySelectorAll('.fade-in') || [];
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section id="how" className="how-section" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">How It Works</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">Booking your ride is as simple as 1-2-3. No app needed.</p>
                <div className="steps-row fade-in">
                    {steps.map((s, i) => (
                        <Fragment key={s.num}>
                            <div className="step-item">
                                <div className="step-num">{s.num}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                            {i < steps.length - 1 && <div className="step-connector" />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
