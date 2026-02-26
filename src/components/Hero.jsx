

import BookingForm from './BookingForm';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg" />
            <div className="hero-body">
                <div className="hero-content">
                    <span className="hero-badge">
                        <svg className="svg-icon" style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                        WaliaTaxi – Jalandhar's #1 Service
                    </span>
                    <h1 className="hero-title">
                        Reliable <span>Taxi in Jalandhar</span> — WaliaTaxi
                    </h1>
                    <p className="hero-sub">
                        Book affordable and punctual taxi service in Jalandhar. 24/7 cab booking for lacal trips, airport transfers, and outstation journeys across Punjab.
                    </p>
                </div>

                <BookingForm />

                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-val" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <svg className="svg-icon" style={{ width: '20px', height: '20px', color: 'var(--cta)', fill: 'currentColor' }} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            4.9
                        </span>
                        <span className="stat-lbl">Rating</span>
                    </div>
                    <div className="hero-divider" />
                    <div className="stat">
                        <span className="stat-val">10,000+</span>
                        <span className="stat-lbl">Rides</span>
                    </div>
                    <div className="hero-divider" />
                    <div className="stat">
                        <span className="stat-val">24/7</span>
                        <span className="stat-lbl">Available</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
