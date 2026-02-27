import { useEffect, useRef, useState } from 'react';


const TaxiLogo = () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <rect width="40" height="40" rx="10" fill="#F5A623" />
        <path d="M8 25h24M10 25l2-7h16l2 7" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 18l1.5-5h9L26 18" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="13" cy="27" r="2.5" fill="#1A1A2E" />
        <circle cx="27" cy="27" r="2.5" fill="#1A1A2E" />
        <path d="M20 14v-4M17 12h6" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner container">
                <a href="#hero" className="logo" aria-label="WaliaTaxi - Home">
                    <TaxiLogo />
                    <span>WaliaTaxi</span>
                </a>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                    <li><a href="#tours" onClick={closeMenu}>Tours</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#cities" onClick={closeMenu}>Cities</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    <li>
                        <a
                            href="https://wa.me/919872200267"
                            className="btn btn-amber nav-cta"
                            target="_blank" rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            Book a Ride
                        </a>
                    </li>
                </ul>
                <button
                    type="button"
                    className="hamburger"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
