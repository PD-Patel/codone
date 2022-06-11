import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Service from "./Service";

import Team from "./Team";
import { scroller } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const ScrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const [activeTab, setActiveTab] = useState("1");

  const changeMenuColor = () => {
    if (window.scrollY < 570) {
      setActiveTab(1);
    } else if (window.scrollY >= 570 && window.scrollY < 1350) {
      setActiveTab(2);
    } else if (window.scrollY >= 1350 && window.scrollY < 2364) {
      setActiveTab(3);
    }
  };
  window.addEventListener("scroll", changeMenuColor);
  return (
    <Container>
      <Navbar
        serviceRef={serviceRef}
        teamRef={teamRef}
        contactRef={contactRef}
        scrollToElement={ScrollToElement}
        activeTab={activeTab}
      />
      <Hero
        contactRef={contactRef}
        scrollToElement={ScrollToElement}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Service
        data-aos="fade-up"
        serviceRef={serviceRef}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Team
        teamRef={teamRef}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Contact
        contactRef={contactRef}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Footer
        serviceRef={serviceRef}
        teamRef={teamRef}
        contactRef={contactRef}
        scrollToElement={ScrollToElement}
      />
    </Container>
  );
}
const Container = styled.div`
  max-width: 1640px;
  margin: auto;
  position: relative;
  scroll-behavior: smooth;
`;
export default Home;
