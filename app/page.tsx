import Navbar from "./components/navbar.tsx";
import HeroSection from "./components/herosection.tsx";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import WorkSection from "./components/worksection.tsx";
import ServiceSection from "./components/servicesection.tsx";
import ContactSection from "./components/contactsection.tsx";
import Footer from "./components/footer.tsx";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
            <h2>About us</h2>
            <h6>What We Do?</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sequi eos in aut repellat magnam amet sapiente ipsum possimus aspernatur corrupti corporis voluptatum deserunt, doloribus distinctio. Minus impedit nostrum incidunt!</p>
            <Button variant="info">Learn more</Button>
            </Col>
            <Col md={6}>
            <p><Image src="/images/profile.jpg" alt="About Us" width={200} height={200}></Image></p></Col>
          </Row>
        </Container>
        <section className="bg-white">
          <WorkSection></WorkSection>
        </section>
        <ServiceSection>
        </ServiceSection>
        <section id="contact">
          <ContactSection></ContactSection>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}