

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg" />
            <div className="hero-body">
                <div className="hero-content">
                    <span className="hero-badge">🚖 WaliaTaxi – Jalandhar's #1 Service</span>
                    <h1 className="hero-title">
                        Your Trusted Ride<br />Across <span>Punjab</span>
                    </h1>
                    <p className="hero-sub">
                        Safe, punctual, and affordable taxi service from Jalandhar to every corner of Punjab and beyond.
                    </p>
                    <div className="hero-btns">
                        <a href="https://wa.me/919876543210" className="btn btn-amber" target="_blank" rel="noopener noreferrer">
                            Book Now
                        </a>
                        <a href="#cities" className="btn btn-outline">View Our Routes</a>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-val">⭐ 4.9</span>
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
