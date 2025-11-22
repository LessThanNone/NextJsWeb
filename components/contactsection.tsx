'use client'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ContactSection() {
    return (
        <section id="contact" className="py-5 position-relative">
            <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, var(--bg-card), transparent)', pointerEvents: 'none' }}></div>

            <Container className="my-5 position-relative z-1">
                <Card className="glass-card border-0 overflow-hidden text-white" style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
                    <Row className="g-0">
                        <Col md={5} className="p-5 d-flex flex-column justify-content-between" style={{ background: 'rgba(6, 182, 212, 0.15)' }}>
                            <div>
                                <h3 className="fw-bold mb-4">Let's make something unforgettable</h3>
                                <p className="text-white-50 mb-5">Ceritakan ide anda, dan mari mulai menciptakan visual bersama.</p>

                                <div className="d-flex align-items-start gap-3 mb-4">
                                    <div className="mt-1 text-cyan">
                                        <i className="bi bi-geo-alt-fill" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Lokasi</h6>
                                        <span className="text-white-50 small">Jakarta barat, Indonesia</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3 mb-4">
                                    <div className="mt-1 text-cyan">
                                        <i className="bi bi-envelope-fill" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Email</h6>
                                        <span className="text-white-50 small">yugenlens@gmail.com</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3">
                                    <div className="mt-1 text-cyan">
                                        <i className="bi bi-telephone-fill" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1">Phone</h6>
                                        <span className="text-white-50 small">+62 811 2315 0967</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={7} className="p-5">
                            <h3 className="fw-bold mb-4">Send Message</h3>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-white-50 small">Your Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                className="bg-transparent text-white border-secondary"
                                                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-white-50 small">Your Email</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                className="bg-transparent text-white border-secondary"
                                                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4">
                                    <Form.Label className="text-white-50 small">Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={4} 
                                        className="bg-transparent text-white border-secondary"
                                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                                    Kirim Pesan
                                    <i className="bi bi-send-fill" style={{ fontSize: '16px' }}></i>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    )
}

export default ContactSection;