export default function FAQ() {
    const faqs = [
        {
            q: "How do I book a taxi in Jalandhar with WaliaTaxi?",
            a: "You can book a taxi easily by calling us at +91-98722-00267 or by using our online booking form on the website. We offer 24/7 service."
        },
        {
            q: "Do you provide airport transfers from Jalandhar?",
            a: "Yes, we specialize in punctual airport transfers from Jalandhar to Delhi Airport (IGI), Amritsar Airport, and Chandigarh Airport at fixed rates."
        },
        {
            q: "What are your taxi rates in Jalandhar?",
            a: "Our rates are highly competitive. Local trips start at affordable prices, and we offer transparent pricing for outstation and airport journeys with no hidden costs."
        },
        {
            q: "Is WaliaTaxi available for outstation trips from Jalandhar?",
            a: "Absolutely! We provide reliable outstation cab services from Jalandhar to all major cities including Ludhiana, Amritsar, Chandigarh, and Delhi."
        },
        {
            q: "Are your drivers verified and professional?",
            a: "Yes, all our drivers are experienced professionals who are well-versed with routes across Punjab and neighboring states, ensuring a safe and comfortable ride."
        }
    ];

    return (
        <section id="faq" className="faq-section" style={{ padding: '4rem 0', background: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                <div className="amber-line" style={{ margin: '0 auto 2.5rem' }} />
                <div className="faq-list">
                    {faqs.map(({ q, a }, idx) => (
                        <details key={idx} style={{ marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <summary style={{ fontWeight: '600', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {q}
                                <span style={{ color: 'var(--cta)', fontWeight: '800' }}>+</span>
                            </summary>
                            <p style={{ marginTop: '1rem', opacity: 0.9, lineHeight: '1.6', color: 'var(--text-secondary)' }}>{a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
