import { useEffect, useState } from 'react';
import newLogo from '../assets/wa.png';

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
                    <img
                        src={newLogo}
                        alt="WaliaTaxi Logo"
                        style={{
                            height: scrolled ? '36px' : '44px',
                            width: 'auto',
                            aspectRatio: '1/1',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            flexShrink: 0,
                            transition: 'height 0.3s ease'
                        }}
                    />
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
