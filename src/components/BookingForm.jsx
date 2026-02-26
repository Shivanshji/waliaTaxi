import { useState } from 'react';

const TRIP_TYPES = [
    { id: 'one-way', label: 'ONE WAY' },
    { id: 'round-trip', label: 'ROUND TRIP' },
    { id: 'local', label: 'LOCAL' },
    { id: 'airport', label: 'AIRPORT' },
];

export default function BookingForm() {
    const [tripType, setTripType] = useState('one-way');
    const [from, setFrom] = useState('Jalandhar, Punjab');
    const [to, setTo] = useState('');
    const [pickupDate, setPickupDate] = useState('2026-02-26');
    const [returnDate, setReturnDate] = useState('2026-02-26');
    const [pickupTime, setPickupTime] = useState('07:00 AM');

    const handleExplore = () => {
        const message = `*WaliaTaxi - New Booking Inquiry*%0A%0A` +
            `*Trip Type:* ${tripType.toUpperCase()}%0A` +
            `*From:* ${from}%0A` +
            `*To:* ${to || 'Not specified'}%0A` +
            `*Pickup Date:* ${pickupDate}%0A` +
            (tripType === 'round-trip' ? `*Return Date:* ${returnDate}%0A` : '') +
            `*Pickup Time:* ${pickupTime}%0A%0A` +
            `Please let me know the availability and best price!`;

        const whatsappUrl = `https://wa.me/919872200267?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    return (
        <div className="booking-container">
            <div className="trip-type-selector">
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

            <div className="booking-form-grid">
                <div className="form-group from-group">
                    <label htmlFor="pickup-loc">FROM</label>
                    <div className="input-with-icon">
                        <svg className="input-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            id="pickup-loc"
                            type="text"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            placeholder="Enter Pickup Location"
                            aria-label="Pickup Location"
                        />
                    </div>
                </div>

                <div className="swap-wrapper">
                    <button type="button" className="swap-btn" aria-label="Swap Locations" onClick={handleSwap}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" height="18" width="18" aria-hidden="true">
                            <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16" />
                        </svg>
                    </button>
                </div>

                <div className="form-group to-group">
                    <label htmlFor="drop-loc">TO</label>
                    <div className="input-with-icon">
                        <svg className="input-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            id="drop-loc"
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="Enter Drop Location"
                            aria-label="Drop Location"
                        />
                    </div>
                </div>

                <div className="form-group date-group">
                    <label htmlFor="pickup-date">PICK UP DATE</label>
                    <div className="select-with-icon">
                        <input
                            id="pickup-date"
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            aria-label="Pickup Date"
                        />
                    </div>
                </div>

                {tripType === 'round-trip' && (
                    <div className="form-group date-group">
                        <label htmlFor="return-date">RETURN DATE</label>
                        <div className="select-with-icon">
                            <input
                                id="return-date"
                                type="date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                aria-label="Return Date"
                            />
                        </div>
                    </div>
                )}

                <div className="form-group time-group">
                    <label htmlFor="pickup-time">PICK UP TIME</label>
                    <div className="select-with-icon">
                        <select id="pickup-time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} aria-label="Pickup Time">
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
            </div>

            <button type="button" className="explore-btn" onClick={handleExplore}>
                EXPLORE CABS
            </button>
        </div>
    );
}
