import { useEffect, useRef } from 'react';


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
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>, label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>, label: 'Email', value: 'info@swiftridejalandhar.com', href: 'mailto:info@swiftridejalandhar.com' },
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>, label: 'Address', value: 'GT Road, Jalandhar, Punjab – 144001' },
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: 'Hours', value: '24 hours, 7 days a week' },
                        ].map((item) => (
                            <div className="contact-item" key={item.label}>
                                <div className="contact-icon-wrapper">{item.icon}</div>
                                <div className="contact-item-text">
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
                            <button type="submit" className="form-submit">
                                <svg className="svg-icon" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                Send Booking Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
