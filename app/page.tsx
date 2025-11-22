import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}