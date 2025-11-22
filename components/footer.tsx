'use client'

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { name: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", icon: "bi-twitter-x", href: "https://x.com/explore" },
        { name: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/?locale=id_ID" },
        { name: "LinkedIn", icon: "bi-linkedin", href: "https://www.linkedin.com/in/charless-89997b32b/" },
    ];

return (
    <>
        <footer className="footer-section mt-auto">
            <Container>
                <Row className="gy-5 justify-content-between">
                    <Col lg={5} md={12}>
                        <div className="brand-logo">
                            <span>YUGEN <span className="text-cyan">LENS</span></span>
                        </div>

                        <p 
                            className="text-white mx-auto mx-lg-0" 
                            style={{ lineHeight: '1.6', maxWidth: '400px' }}
                        >
                            Fotografi profesional dengan sentuhan modern dan artistik.  
                            Abadikan momen terbaik kamu dalam bingkai visual yang abadi dan penuh makna.
                        </p>
                    </Col>

                    <Col lg={3} md={6} xs={12}>
                        <h6 className="footer-section-title">Quick Links</h6>
                        <ul className="list-unstyled">
                            {quickLinks.map((link, index) => (
                            <li key={index} className="footer-link-item">
                                <a href={link.href} className="footer-link">
                                    {link.name}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={3} md={6} xs={12}>
                        <h6 className="footer-section-title">Connect With Me</h6>
                        <p className="text-white small mb-4">
                            Ikuti perjalanan visual saya di media sosial.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                            <a 
                                key={index}
                                href={social.href} 
                                className="social-link"
                                title={social.name}
                            >
                                <i className={`bi ${social.icon}`}></i>
                            </a>
                            ))}
                        </div>
                    </Col>
                </Row>
                <hr className="footer-divider" />
                <Row>
                    <Col className="text-center">
                        <p className="text-white small mb-0">
                            &copy; {new Date().getFullYear()} <span className="text-cyan fw-semibold">Yugen Lens Photography by Charless</span>. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
    );
}