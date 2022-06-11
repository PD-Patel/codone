import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import "aos/dist/aos.css";
function Service({ serviceRef }) {
  return (
    <Container data-aos="fade-up" data-aos-duration="1000" ref={serviceRef}>
      <Title>
        <img src="./Service.png" alt="" />
      </Title>
      <MainSection>
        <Row>
          <ServiceCard
            image="./logo-design.png"
            title="UI/UX Design"
            description="User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users.

"
          />
          <ServiceCard
            image="./world-wide-web (1).png"
            title="Web Development"
            description="
Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network)."
          />
        </Row>
        <Row>
          <ServiceCard
            image="./seo.png"
            description="Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google."
            title="SEO OPTIMIZATION"
          />
          <ServiceCard
            image="./ssl (1).png"
            description="SSL stands for Secure Sockets Layer and, in short, it's the standard technology for keeping an internet connection secure"
            title="SSL CERTIFICATION"
          />
          <ServiceCard />
        </Row>
      </MainSection>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  img {
    width: 350px;
  }
  margin-bottom: 40px;
`;

const MainSection = styled.div`
  width: 95%;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    margin-top: 60px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
export default Service;
