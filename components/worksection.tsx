'use client'
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const WorkSection = () => {
    const works = [
        {
            title: "Shibuya Night",
            img: "/images/japan-night.png",
            desc: "Ritme malam Tokyo di Shibuya Crossing yang penuh cahaya neon, hiruk-pikuk yang tak pernah tidur.",
        },
        {
            title: "Fuji & Lawson",
            img: "/images/japan-lawson-fuji.png",
            desc: "Kontras indah antara Gunung Fuji yang agung dan kehidupan sehari-hari di depan Lawson saat senja.",
        },
        {
            title: "Coastal Passage",
            img: "/images/japan-countryside.png",
            desc: "Kereta melintasi garis pantai yang tenang, momen sederhana yang menyatu dengan keindahan alam Jepang.",
        },
    ];

    return (
        <>
            <section id="portfolio" className="work-section py-5 position-relative">
                <Container>
                    <Row className="mb-5 text-center section-header a">
                        <Col md={8} className="mx-auto">
                            <h2 className="display-4 fw-bold mb-3" style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, var(--primary-cyan) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Karya Pilihan
                            </h2>
                            <p className="lead text-white">
                                Koleksi momen terbaik dari perjalanan saya di Jepang.
                            </p>
                        </Col>
                    </Row>

                    <div className="carousel-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <Carousel 
                            fade 
                            interval={5000} 
                            className="custom-carousel"
                        >
                            {works.map((work, index) => (
                                <Carousel.Item key={index}>
                                    <div className="carousel-image-wrapper">
                                        <img src={work.img} alt={work.title} />
                                        
                                        <div className="carousel-content">
                                            <h2 className="carousel-title">{work.title}</h2>
                                            <p className="carousel-description">
                                                {work.desc}
                                            </p>
                                            <div className="carousel-cta">
                                                <Button className="cta-detail-button">
                                                    <span>Lihat Detail</span>
                                                    <i className="bi bi-arrow-right"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default WorkSection;