'use client'
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function ServiceSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        { 
            icon: "bi-bag-check-fill", 
            title: "Commercial", 
            desc: "Foto produk high-end untuk katalog dan branding bisnis.",
            color: "#06b6d4"
        },
        { 
            icon: "bi-calendar-event-fill", 
            title: "Event Documentation", 
            desc: "Menangkap momen penting acara corporate atau personal.",
            color: "#14b8a6"
        },
        { 
            icon: "bi-person-badge-fill", 
            title: "Creative Portrait", 
            desc: "Sesi foto portrait dengan konsep artistik dan pencahayaan unik.",
            color: "#06b6d4"
        },
        { 
            icon: "bi-film", 
            title: "Videography", 
            desc: "Pembuatan video sinematik untuk melengkapi kebutuhan visual.",
            color: "#0891b2"
        },
        { 
            icon: "bi-heart-fill", 
            title: "Wedding", 
            desc: "Mengabadikan hari bahagia dengan nuansa romantis dan elegan.",
            color: "#14b8a6"
        },
        { 
            icon: "bi-magic", 
            title: "Retouching", 
            desc: "Editing profesional dengan tone warna yang cantik.",
            color: "#0d9488"
        },
    ];

    return (
        <>
            <section id="services" className="service-section py-5">
                <Container className='my-5 position-relative'>
                    <Row className="mb-5 text-center section-header" style={{ animation: 'fadeInUp 1s ease-out' }}>
                        <Col md={8} className="mx-auto">
                            <h2 className="display-4 fw-bold mb-3" style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, var(--primary-cyan) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Layanan Saya
                            </h2>
                            <p className="text-white lead">
                                Solusi fotografi profesional dengan kualitas terbaik dan sentuhan artistik.
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {services.map((svc, index) => (
                            <Col 
                                md={4} 
                                key={index}
                                style={{ animation: `fadeInUp 1s ease-out ${0.2 + index * 0.1}s both` }}
                            >
                                <div 
                                    className="service-card"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="service-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="service-icon-wrapper">
                                        <i className={`bi ${svc.icon} service-icon`}></i>
                                    </div>

                                    <h3 className="service-title">{svc.title}</h3>
                                    <p className="service-description">{svc.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceSection;