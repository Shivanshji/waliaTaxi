import { useState } from 'react';

const TRIP_TYPES = [
    { id: 'one-way', label: 'ONE WAY' },
    { id: 'round-trip', label: 'ROUND TRIP' },
    { id: 'local', label: 'LOCAL' },
    { id: 'airport', label: 'AIRPORT' },
];

const LOCAL_PACKAGES = [
    "4 Hours / 40 KM",
    "8 Hours / 80 KM",
    "12 Hours / 120 KM"
];

const AIRPORT_TYPES = [
    "To Airport",
    "From Airport"
];

export default function BookingForm() {
    const [tripType, setTripType] = useState('one-way');
    const [from, setFrom] = useState('Jalandhar, Punjab');
    const [to, setTo] = useState('');
    const [pickupDate, setPickupDate] = useState('2026-02-28');
    const [returnDate, setReturnDate] = useState('');
    const [pickupTime, setPickupTime] = useState('09:00 AM');
    const [localPackage, setLocalPackage] = useState(LOCAL_PACKAGES[1]);
    const [airportType, setAirportType] = useState(AIRPORT_TYPES[0]);

    const handleExplore = () => {
        let details = `*Trip Type:* ${tripType.toUpperCase()}%0A` +
            `*Pickup From:* ${from}%0A`;

        if (tripType === 'local') {
            details += `*Package:* ${localPackage}%0A`;
        } else if (tripType === 'airport') {
            details += `*Airport Type:* ${airportType}%0A` +
                `*Destination:* ${to || 'Not specified'}%0A`;
        } else {
            details += `*Destination To:* ${to || 'Not specified'}%0A`;
            if (tripType === 'round-trip') {
                details += `*Return Date:* ${returnDate || 'Not specified'}%0A`;
            }
        }

        details += `*Date:* ${pickupDate}%0A` +
            `*Time:* ${pickupTime}%0A`;

        const message = `*WaliaTaxi - New Booking Inquiry*%0A%0A${details}%0A` +
            `Please let me know the availability and best price!`;

        const whatsappUrl = `https://wa.me/919872200267?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="booking-container hero-booking-container">
            <div className="trip-type-selector hero-trip-selector">
                {TRIP_TYPES.map((type) => (
                    <button
                        key={type.id}
                        type="button"
                        className={`trip-type-btn ${tripType === type.id ? 'active' : ''}`}
                        onClick={() => setTripType(type.id)}
                    >
                        {type.label}
                    </button>
                ))}
            </div>

            <div className={`booking-form-grid hero-form-grid type-${tripType}`}>
                <div className="form-group">
                    <label htmlFor="pickup-loc">PICKUP FROM</label>
                    <input
                        id="pickup-loc"
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        placeholder="Enter Pickup Location"
                    />
                </div>

                {tripType === 'local' ? (
                    <div className="form-group">
                        <label htmlFor="local-package">PACKAGE</label>
                        <div className="select-with-icon">
                            <select id="local-package" value={localPackage} onChange={(e) => setLocalPackage(e.target.value)}>
                                {LOCAL_PACKAGES.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                            <svg className="select-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                ) : tripType === 'airport' ? (
                    <div className="form-group">
                        <label htmlFor="airport-type">TYPE</label>
                        <div className="select-with-icon">
                            <select id="airport-type" value={airportType} onChange={(e) => setAirportType(e.target.value)}>
                                {AIRPORT_TYPES.map(a => <option key={a} value={a}>{a}</option>)}
                            </select>
                            <svg className="select-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className="form-group">
                        <label htmlFor="drop-loc">DESTINATION TO</label>
                        <input
                            id="drop-loc"
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="Enter Drop Location"
                        />
                    </div>
                )}

                {tripType === 'airport' && (
                    <div className="form-group">
                        <label htmlFor="airport-dest">AIRPORT/DEST</label>
                        <input
                            id="airport-dest"
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="Delhi Airport etc."
                        />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="pickup-date">PICK UP DATE</label>
                    <input
                        id="pickup-date"
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="hero-date-input"
                    />
                </div>

                {tripType === 'round-trip' && (
                    <div className="form-group">
                        <label htmlFor="return-date">RETURN DATE</label>
                        <input
                            id="return-date"
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="hero-date-input"
                        />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="pickup-time">TIME</label>
                    <div className="select-with-icon">
                        <select id="pickup-time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
                            {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(h => (
                                <optgroup key={h} label={h}>
                                    <option>{h}:00 AM</option>
                                    <option>{h}:30 AM</option>
                                    <option>{h}:00 PM</option>
                                    <option>{h}:30 PM</option>
                                </optgroup>
                            ))}
                        </select>
                        <svg className="select-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>

                <div className="form-group hero-btn-group">
                    <button type="button" className="btn btn-amber hero-inquire-btn" onClick={handleExplore}>
                        INQUIRE
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hero-booking-container {
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                    margin-top: 40px;
                    border: none;
                    width: 100%;
                }
                .hero-trip-selector {
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                    border-radius: 8px 8px 0 0;
                }
                .hero-form-grid {
                    display: grid;
                    gap: 20px;
                    padding: 32px 24px;
                    align-items: flex-start;
                }
                .hero-form-grid.type-one-way { grid-template-columns: 1.2fr 1.2fr 0.8fr 0.8fr auto; }
                .hero-form-grid.type-round-trip { grid-template-columns: 1fr 1fr 0.7fr 0.7fr 0.7fr auto; }
                .hero-form-grid.type-local { grid-template-columns: 1.2fr 1.2fr 0.8fr 0.8fr auto; }
                .hero-form-grid.type-airport { grid-template-columns: 1fr 0.8fr 1fr 0.7fr 0.7fr auto; }

                .hero-booking-container .form-group label {
                    color: var(--primary);
                    font-weight: 800;
                    margin-bottom: 8px;
                    text-align: left;
                    font-size: 0.65rem;
                }
                .hero-booking-container input, 
                .hero-booking-container select {
                    border: none;
                    border-bottom: 1px solid #e2e8f0;
                    padding: 8px 0;
                    width: 100%;
                    background: transparent;
                    font-family: var(--font-body);
                    font-weight: 600;
                    color: var(--primary);
                    border-radius: 0;
                    font-size: 0.9rem;
                }
                .hero-booking-container input:focus, 
                .hero-booking-container select:focus {
                    border-bottom-color: var(--secondary);
                    outline: none;
                }
                .hero-inquire-btn {
                    height: 44px;
                    padding: 0 30px;
                    margin-top: 18px;
                    font-size: 0.85rem;
                    background: var(--cta) !important;
                    white-space: nowrap;
                }
                @media (max-width: 1200px) {
                    .hero-form-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    .hero-btn-group {
                        grid-column: span 2;
                    }
                    .hero-inquire-btn {
                        width: 100%;
                        margin-top: 10px;
                    }
                }
                @media (max-width: 600px) {
                    .hero-form-grid {
                        grid-template-columns: 1fr !important;
                        padding: 20px;
                    }
                    .hero-btn-group {
                        grid-column: span 1;
                    }
                }
            ` }} />
        </div>
    );
}
