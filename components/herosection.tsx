'use client'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const innerRadius = 175; 

    return (
        <>
        <section 
            id="home" 
            className="hero-section position-relative d-flex align-items-center overflow-hidden" 
            style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}
        >

        <div className="position-absolute top-0 start-0 w-100 h-100 grid-background" style={{ zIndex: 0 }}></div>
        <div className="position-absolute rounded-circle" style={{ width: '600px', height: '600px', top: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        <div className="position-absolute rounded-circle" style={{ width: '500px', height: '500px', bottom: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>

        <Container className="position-relative" style={{ zIndex: 1 }}>
            <Row className="align-items-center">
                <Col lg={7} className="text-white hero-text-col">
                    <h1 className="display-1 fw-bold mb-4 lh-sm fade-in-up delay-2" style={{ marginTop: '1.5rem' }}>
                        Capture The <br />
                        <span className="hero-text-gradient">Untold Story</span>
                    </h1>
                    <p className="lead mb-5 fade-in-up delay-3 hero-description" style={{ maxWidth: '90%', color: '#e0e0e0', fontSize: '1.125rem', lineHeight: '1.8' }}>
                        Menangkap esensi kehidupan melalui lensa dengan menghadirkan estetika modern yang unik.
                    </p>
                    <div className="d-flex gap-3 flex-wrap mb-5 fade-in-up delay-4 hero-buttons">
                        <Button variant="primary" size="lg" className="px-5 py-3" as="a" href="#portfolio">
                            <i className="bi bi-collection me-2"></i>
                            Lihat Portfolio
                        </Button>
                        <Button variant="outline-light" size="lg" className="px-5 py-3" as="a" href="#contact">
                            <i className="bi bi-envelope me-2"></i>
                            Hubungi Saya
                        </Button>
                    </div>
                </Col>
            
                <Col lg={5} className="position-relative mt-5 mt-lg-0">
                    <div className="position-relative scale-in delay-3 hero-graphic-container" style={{ height: '500px' }}>
                        <div className="position-absolute top-50 start-50 translate-middle camera-circle"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ 
                                width: '250px', height: '250px',
                                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(20, 184, 166, 0.2))',
                                backdropFilter: 'blur(20px)', border: '3px solid rgba(6, 182, 212, 0.5)',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 80px rgba(6, 182, 212, 0.4), inset 0 0 40px rgba(6, 182, 212, 0.1)',
                                transform: isHovered ? 'translate(-50%, -50%) scale(1.15) rotate(5deg)' : 'translate(-50%, -50%) scale(1)',
                            }}
                        >
                            <i className="bi bi-camera-fill" style={{ fontSize: '90px', color: 'var(--primary-cyan)', filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.7))' }}></i>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle rounded-circle" style={{ width: '350px', height: '350px', border: '2px dashed rgba(6, 182, 212, 0.3)' }}></div>
                        <div className="position-absolute top-50 start-50 translate-middle rounded-circle" style={{ width: '450px', height: '450px', border: '1px solid rgba(20, 184, 166, 0.2)' }}></div>
                    
                        <div className="orbit-item-container" style={{ transform: `rotate(-45deg) translateX(${innerRadius}px) rotate(45deg)` }}>
                            <div className="photo-frame-item rounded-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(20, 184, 166, 0.3))', backdropFilter: 'blur(10px)', border: '2px solid rgba(6, 182, 212, 0.6)'}}>
                                <i className="bi bi-image-fill" style={{ fontSize: '28px', color: 'var(--primary-cyan)' }}></i>
                            </div>
                        </div>

                        <div className="orbit-item-container" style={{ transform: `rotate(45deg) translateX(170px) rotate(-45deg)` }}>
                            <div className="photo-frame-item rounded-3 d-flex align-items-center justify-content-center" style={{ width: '65px', height: '65px', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(6, 182, 212, 0.3))', backdropFilter: 'blur(10px)', border: '2px solid rgba(20, 184, 166, 0.6)'}}>
                                <i className="- bi-star-fill" style={{ fontSize: '26px', color: 'var(--accent-teal)' }}></i>
                            </div>
                        </div>

                        <div className="orbit-item-container" style={{ transform: `rotate(135deg) translateX(${innerRadius}px) rotate(-135deg)` }}>
                            <div className="photo-frame-item rounded-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(20, 184, 166, 0.3))', backdropFilter: 'blur(10px)', border: '2px solid rgba(6, 182, 212, 0.6)'}}>
                                <i className="bi-film" style={{ fontSize: '28px', color: 'var(--primary-cyan)' }}></i>
                            </div>
                        </div>

                        <div className="orbit-item-container" style={{ transform: `rotate(225deg) translateX(235px) rotate(-225deg)` }}>
                            <div className="photo-frame-item rounded-3 d-flex align-items-center justify-content-center" style={{ width: '65px', height: '65px', background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(6, 182, 212, 0.3))', backdropFilter: 'blur(10px)', border: '2px solid rgba(20, 184, 166, 0.6)'}}>
                                <i className="bi bi-heart-fill" style={{ fontSize: '26px', color: 'var(--accent-teal)' }}></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
    )
}

export default HeroSection;