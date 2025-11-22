'use client'

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [expanded, setExpanded] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPos = window.scrollY + 200; 
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveLink(sectionId);
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getNavLinkClass = (path: string) => {
    return activeLink === path ? 'active nav-link' : 'nav-link';
  }

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)} 
      
      className={(scrolled || expanded) ? "navbar-blur py-2 shadow-sm transition-all" : "bg-transparent py-4 transition-all"}
      
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-3 d-flex align-items-center gap-2">
          <span className="text-light">YUGEN <span className="text-cyan">LENS</span></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 align-items-center">
            
            <a 
              href="#home" 
              className={getNavLinkClass('home')}
              onClick={() => { setActiveLink('home'); closeMenu(); }}
            >
              Home
            </a>
            
            <a 
              href="#about" 
              className={getNavLinkClass('about')}
              onClick={() => { setActiveLink('about'); closeMenu(); }}
            >
              About
            </a>
            
            <a 
              href="#portfolio" 
              className={getNavLinkClass('portfolio')}
              onClick={() => { setActiveLink('portfolio'); closeMenu(); }}
            >
              Portfolio
            </a>
            
            <a 
              href="#services" 
              className={getNavLinkClass('services')}
              onClick={() => { setActiveLink('services'); closeMenu(); }}
            >
              Services
            </a>
            
            <a 
              href="#contact" 
              className={getNavLinkClass('contact')}
              onClick={() => { setActiveLink('contact'); closeMenu(); }}
            >
              Contact
            </a>
            
            <Button 
              variant="outline-light" 
              className="ms-lg-3 mt-2 mt-lg-0 rounded-pill px-4 btn-sm" 
              href="#contact"
              onClick={closeMenu}
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;