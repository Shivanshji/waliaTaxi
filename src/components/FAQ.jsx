import { faqs } from '../data/faqs';

export default function FAQ() {

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
