export default function WhatsAppFloat() {
    return (
        <div className="floating-actions">
            <a
                href="tel:+919872200267"
                className="float-btn call-float"
                aria-label="Call Us"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </a>
            <a
                href="https://wa.me/919872200267"
                className="float-btn wa-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.086.535 4.047 1.473 5.757L0 24l6.395-1.438A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.032-1.389l-.361-.214-3.74.841.857-3.659-.236-.377A9.785 9.785 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
            </a>

            <style dangerouslySetInnerHTML={{
                __html: `
                .floating-actions {
                    position: fixed;
                    right: 20px;
                    bottom: 20px;
                    display: flex;
                    flex-direction: row;
                    gap: 12px;
                    z-index: 1000;
                    align-items: center;
                }
                .float-btn {
                    position: relative !important;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none;
                    bottom: auto !important;
                    right: auto !important;
                }
                .float-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
                }
                .wa-float {
                    background-color: #25d366;
                }
                .call-float {
                    background-color: #3b82f6; /* Blue for call, distinct from Green WhatsApp */
                    color: white;
                }
                @media (max-width: 768px) {
                    .floating-actions {
                        right: 15px;
                        bottom: 15px;
                        gap: 8px;
                    }
                    .float-btn {
                        width: 45px;
                        height: 45px;
                    }
                }
            ` }} />
        </div>
    );
}
