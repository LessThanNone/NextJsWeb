'use client'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

const AboutSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
    <>
        <section id="about" className="py-5 position-relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>

            <div className="decorative-dots" style={{ top: '10%', right: '5%' }}></div>
            <div className="decorative-dots" style={{ bottom: '10%', left: '5%' }}></div>
            <div className="decorative-circle" style={{ width: '300px', height: '300px', bottom: '5%', left: '-100px' }}></div>

            <Container className="my-5 position-relative" style={{ zIndex: 1 }}>
                <Row className="align-items-center g-5">
                
                    <Col md={6} className="animate-fade-in">
                        <div className="position-relative">
                            <div className="image-frame">
                                <div className="image-container">
                                    <Image 
                                        src="/images/photo-profile.png"
                                        alt="Photographer Profile"
                                        fill
                                        className="object-fit-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                </div>
                                <div className="position-absolute bottom-0 end-0 m-4 floating-badge text-center p-3">
                                    <h3 className="mb-0 fw-bold text-white">2+</h3>
                                    <small className="text-white-50 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Years Exp.</small>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="ps-md-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>

                    <h2 className="section-title">
                        Beyond the Lens
                    </h2>
                    <p className="lead mb-4 text-white-50" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Saya bukan sekadar menangkap gambar. Saya <span className="text-cyan fw-bold">mengabadikan cerita</span> dengan estetika modern yang penuh makna, 
                        menghadirkan harmoni antara <span className="text-cyan fw-bold">modernitas</span>, <span className="text-cyan fw-bold">drama</span>, dan <span className="text-cyan fw-bold">keindahan abadi</span>.
                    </p>

                    <div className="mb-5">
                        <div className="feature-item d-flex align-items-center gap-3 mb-2">
                            <div className="feature-icon">
                                <i className="bi bi-camera2" style={{ fontSize: '22px' }}></i>
                            </div>
                            <span className="text-white fw-medium">Gear kamera high-end untuk visual modern</span>
                        </div>
                        
                        <div className="feature-item d-flex align-items-center gap-3 mb-2">
                            <div className="feature-icon">
                                <i className="bi bi-palette" style={{ fontSize: '22px' }}></i>
                            </div>
                            <span className="text-white fw-medium">Color grading dengan sentuhan eksklusif</span>
                        </div>
                        
                        <div className="feature-item d-flex align-items-center gap-3">
                            <div className="feature-icon">
                                <i className="bi bi-person-check" style={{ fontSize: '22px' }}></i>
                            </div>
                            <span className="text-white fw-medium">Pengarahan gaya professional & elegan</span>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    );
};

export default AboutSection;