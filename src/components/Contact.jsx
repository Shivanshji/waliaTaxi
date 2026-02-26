import { useEffect, useRef, useState } from 'react';


function buildMessage(name, phone, from, to, date) {
    const en = `Hi WaliaTaxi! I'd like to book a ride.

Name: ${name}
Phone: ${phone}
From: ${from}
To: ${to}
Date: ${date}`;

    const hi = `Namaste WaliaTaxi! Mujhe ek ride book karni hai.

Naam: ${name}
Phone: ${phone}
Kahan se: ${from}
Kahan tak: ${to}
Taareekh: ${date}`;

    const pa = `Sat Sri Akaal WaliaTaxi! Mainu ik sawari book karni hai.

Naav: ${name}
Phone: ${phone}
Ton: ${from}
Takk: ${to}
Taareekh: ${date}`;

    return `${en}\n\n---\n\n${hi}\n\n---\n\n${pa}`;
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // Fallback for older browsers / insecure contexts
        try {
            const el = document.createElement('textarea');
            el.value = text;
            el.style.position = 'fixed';
            el.style.opacity = '0';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            return true;
        } catch {
            return false;
        }
    }
}

export default function Contact() {
    const ref = useRef(null);
    const [toast, setToast] = useState(null); // null | 'copied' | 'error'

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

    // Auto-dismiss toast
    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 3500);
        return () => clearTimeout(t);
    }, [toast]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('fname').value.trim();
        const phone = document.getElementById('fphone').value.trim();
        const from = document.getElementById('ffrom').value.trim();
        const to = document.getElementById('fto').value.trim();
        const date = document.getElementById('fdate').value;

        const msg = buildMessage(name, phone, from, to, date);

        const copied = await copyToClipboard(msg);
        setToast(copied ? 'copied' : 'error');

        // Use only the English section in the WhatsApp URL to keep it short and reliable.
        // The full trilingual message is on the clipboard — the user can paste it in the chat.
        const enMsg = `Hi WaliaTaxi! I'd like to book a ride.\n\nName: ${name}\nPhone: ${phone}\nFrom: ${from}\nTo: ${to}\nDate: ${date}`;
        window.open(
            `https://wa.me/919872200267?text=${encodeURIComponent(enMsg)}`,
            '_blank'
        );
    };

    return (
        <section id="contact" className="contact-section" ref={ref}>
            {/* Toast notification */}
            {toast && (
                <div className={`booking-toast ${toast === 'copied' ? 'booking-toast--success' : 'booking-toast--error'}`}>
                    {toast === 'copied' ? (
                        <>
                            <svg className="svg-icon" style={{ width: '20px', height: '20px', color: '#22c55e' }} viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                            Message copied! Paste &amp; send on WhatsApp.
                        </>
                    ) : (
                        <>
                            <svg className="svg-icon" style={{ width: '20px', height: '20px', color: '#f97316' }} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                            Opening WhatsApp — type your message there.
                        </>
                    )}
                </div>
            )}

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
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, label: 'Phone', value: '+91 98722 00267', href: 'tel:+919872200267' },
                            { icon: <svg className="svg-icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>, label: 'WhatsApp', value: '+91 98722 00267', href: 'https://wa.me/919872200267' },
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

                        {/* Trilingual message preview note */}
                        <div className="booking-note">
                            <svg className="svg-icon" style={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                            <span>Your booking message will be sent in <strong>English, Hindi &amp; Punjabi</strong> and auto-copied to your clipboard.</span>
                        </div>
                    </div>

                    <div className="contact-form fade-in">
                        <h3>Book a Ride</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fname">Full Name</label>
                                    <input type="text" id="fname" placeholder="Your name" required aria-label="Full Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fphone">Phone Number</label>
                                    <input type="tel" id="fphone" placeholder="+91 XXXXX XXXXX" required aria-label="Phone Number" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="ffrom">From</label>
                                    <input type="text" id="ffrom" placeholder="Pickup city / area" required aria-label="Pickup Location" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fto">To</label>
                                    <input type="text" id="fto" placeholder="Drop city / area" required aria-label="Drop Location" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fdate">Travel Date</label>
                                <input type="date" id="fdate" required aria-label="Travel Date" />
                            </div>
                            <button type="submit" className="form-submit" aria-label="Send Booking Request via WhatsApp">
                                <svg className="svg-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                Send Booking Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
