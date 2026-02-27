import { useEffect, useRef, useState } from 'react';
import mountainBg from '../assets/mountain-image.png';

const PICKUP_OPTIONS = [
    "Jalandhar",
    "Chandigarh",
    "Amritsar",
    "Delhi",
    "Adampur Airport",
    "Other"
];

const DROP_OPTIONS = [
    "Jammu",
    "Katra Vaishno Devi",
    "Patnitop",
    "Gulmarg",
    "Sonamarg",
    "Pehalgam",
    "Kashmir Local",
    "Shimla Manali Dharamshala",
    "Dalhousie",
    "Amritsar",
    "Wagha Border",
    "Other"
];

export default function Tours() {
    const [pickup, setPickup] = useState(PICKUP_OPTIONS[0]);
    const [customPickup, setCustomPickup] = useState('');
    const [drop, setDrop] = useState(DROP_OPTIONS[0]);
    const [customDrop, setCustomDrop] = useState('');

    const handleBookTour = () => {
        const finalPickup = pickup === 'Other' ? customPickup : pickup;
        const finalDrop = drop === 'Other' ? customDrop : drop;

        if (!finalPickup || !finalDrop) {
            alert('Please select or enter both pickup and destination.');
            return;
        }

        const message = `*WaliaTaxi - Tour Inquiry*%0A%0A` +
            `*Pickup:* ${finalPickup}%0A` +
            `*Destination:* ${finalDrop}%0A%0A` +
            `Please provide the best package and vehicle options for this tour!`;

        const whatsappUrl = `https://wa.me/919872200267?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="tours" className="tours-section">
            <div className="tours-overlay" />
            <div className="container tours-container">
                <h2 className="section-title text-white">Popular Tours & Packages</h2>
                <span className="amber-line" />
                <p className="section-subtitle text-white-80">
                    Explore North India with our curated tour packages. Select your route or enter a custom destination.
                </p>

                <div className="booking-container tours-booking">
                    <div className="booking-form-grid tours-grid">
                        <div className="form-group">
                            <label htmlFor="tour-pickup">PICKUP FROM</label>
                            <div className="select-with-icon">
                                <select
                                    id="tour-pickup"
                                    value={pickup}
                                    onChange={(e) => setPickup(e.target.value)}
                                    className="fleet-select"
                                >
                                    {PICKUP_OPTIONS.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <svg className="select-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                            {pickup === 'Other' && (
                                <input
                                    type="text"
                                    placeholder="Enter Pickup Location"
                                    value={customPickup}
                                    onChange={(e) => setCustomPickup(e.target.value)}
                                    className="custom-tour-input"
                                />
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="tour-drop">DESTINATION TO</label>
                            <div className="select-with-icon">
                                <select
                                    id="tour-drop"
                                    value={drop}
                                    onChange={(e) => setDrop(e.target.value)}
                                    className="fleet-select"
                                >
                                    {DROP_OPTIONS.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <svg className="select-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                            {drop === 'Other' && (
                                <input
                                    type="text"
                                    placeholder="Enter Destination"
                                    value={customDrop}
                                    onChange={(e) => setCustomDrop(e.target.value)}
                                    className="custom-tour-input"
                                />
                            )}
                        </div>

                        <div className="form-group tour-btn-group">
                            <button type="button" className="btn btn-amber tour-submit-btn" onClick={handleBookTour}>
                                INQUIRE NOW
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tour-info-grid">
                    <div className="tour-info-card">
                        <div className="tour-icon-box">
                            <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                        </div>
                        <h4>Reliable Transport</h4>
                        <p>Well-maintained fleet for mountain terrains and long-distance travel.</p>
                    </div>
                    <div className="tour-info-card">
                        <div className="tour-icon-box">
                            <svg className="svg-icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
                        </div>
                        <h4>Expert Drivers</h4>
                        <p>Professional drivers familiar with all major tourist circuits in North India.</p>
                    </div>
                    <div className="tour-info-card">
                        <div className="tour-icon-box">
                            <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <h4>Flexible Itinerary</h4>
                        <p>Customize your trip with multiple stopovers and variable durations.</p>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .tours-section {
                    position: relative;
                    background-image: url(${mountainBg});
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    padding: 96px 0;
                    margin: 0;
                    min-height: 600px;
                    display: block;
                    width: 100%;
                }
                .tours-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.75) 100%);
                    z-index: 1;
                }
                .tours-container {
                    position: relative;
                    z-index: 5;
                }
                .text-white {
                    color: white !important;
                }
                .text-white-80 {
                    color: rgba(255, 255, 255, 0.8) !important;
                }
                .tours-booking {
                    margin-bottom: 64px;
                    border-radius: var(--border-r-card);
                    background: white;
                    border: 1px solid var(--border-color);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
                .tours-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr auto;
                    gap: 24px;
                    padding: 32px;
                    align-items: flex-start;
                }
                .custom-tour-input {
                    margin-top: 12px;
                    padding: 10px 0;
                    border: none;
                    border-bottom: 1px solid var(--border-color);
                    width: 100%;
                    outline: none;
                    font-family: var(--font-body);
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--primary);
                    background: transparent;
                }
                .custom-tour-input:focus {
                    border-color: var(--secondary);
                }
                .tour-submit-btn {
                    height: 48px;
                    margin-top: 24px;
                    padding: 0 40px;
                }
                .tour-info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                .tour-info-card {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    padding: 32px 24px;
                    border-radius: var(--border-r-card);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    text-align: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                }
                .tour-info-card:hover {
                    transform: translateY(-5px);
                    background: white;
                }
                .tour-icon-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    background: #f0f4ff;
                    color: var(--primary);
                    border-radius: 4px;
                    margin-bottom: 20px;
                }
                .tour-info-card h4 {
                    color: var(--primary);
                    margin-bottom: 12px;
                    font-family: var(--font-display);
                    font-size: 1.25rem;
                    font-weight: 700;
                }
                .tour-info-card p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                }
                @media (max-width: 900px) {
                    .tours-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .tour-btn-group {
                        grid-column: span 2;
                    }
                    .tour-submit-btn {
                        width: 100%;
                        margin-top: 16px;
                    }
                }
                @media (max-width: 600px) {
                    .tours-section {
                        background-attachment: scroll;
                        padding: 64px 0;
                    }
                    .tours-grid {
                        grid-template-columns: 1fr;
                        padding: 24px;
                    }
                    .tour-btn-group {
                        grid-column: span 1;
                    }
                    .tour-info-grid {
                        grid-template-columns: 1fr;
                    }
                }
            ` }} />
        </section>
    );
}
