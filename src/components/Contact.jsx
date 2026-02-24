import { useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
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
        }, { threshold: 0.08 });
        els.forEach(el => obs.observe(el));

        // Set min date to today
        const dateInput = document.getElementById('fdate');
        if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

        return () => obs.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('fname').value;
        const phone = document.getElementById('fphone').value;
        const from = document.getElementById('ffrom').value;
        const to = document.getElementById('fto').value;
        const date = document.getElementById('fdate').value;
        const msg = `Hi WaliaTaxi! I'd like to book a ride.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📍 From: ${from}\n📍 To: ${to}\n📅 Date: ${date}`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div className="container">
                <h2 className="section-title fade-in">Get In Touch</h2>
                <span className="amber-line fade-in" />
                <p className="section-subtitle fade-in">
                    Have questions or want to book a ride? We're just a call or message away.
                </p>
                <div className="contact-wrap">
                    <div className="contact-info fade-in">
                        <h3>Let's Connect</h3>
                        {[
                            { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                            { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
                            { icon: '📧', label: 'Email', value: 'info@swiftridejalandhar.com', href: 'mailto:info@swiftridejalandhar.com' },
                            { icon: '📍', label: 'Address', value: 'GT Road, Jalandhar, Punjab – 144001' },
                            { icon: '🕐', label: 'Hours', value: '24 hours, 7 days a week' },
                        ].map((item) => (
                            <div className="contact-item" key={item.label}>
                                <span className="contact-icon">{item.icon}</span>
                                <div>
                                    <strong>{item.label}</strong>
                                    {item.href ? (
                                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span>{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-form fade-in">
                        <h3>Book a Ride</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fname">Full Name</label>
                                    <input type="text" id="fname" placeholder="Your name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fphone">Phone Number</label>
                                    <input type="tel" id="fphone" placeholder="+91 XXXXX XXXXX" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="ffrom">From</label>
                                    <input type="text" id="ffrom" placeholder="Pickup city / area" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fto">To</label>
                                    <input type="text" id="fto" placeholder="Drop city / area" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fdate">Travel Date</label>
                                <input type="date" id="fdate" required />
                            </div>
                            <button type="submit" className="form-submit">🚖 Send Booking Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
