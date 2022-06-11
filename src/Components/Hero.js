import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
function Hero({ contactRef, scrollToElement }) {
  return (
    <Container data-aos="fade-up" data-aos-duration="2000">
      <MainSection>
        <Title>
          <p>Build, Secure and Optimize your Website</p>
        </Title>
        <Heading>
          <h3>
            Perfect Place For Your Business <span>Promotion</span>👌
          </h3>
        </Heading>
        <Description>
          <p>
            Maximize your business visibility with our new digital agency
            website
          </p>
        </Description>
        <ButtonSection>
          <button onClick={() => scrollToElement(contactRef.current.className)}>
            Contact Us
          </button>
        </ButtonSection>
      </MainSection>
      <ImageSection>
        <img src="Group 11.png" alt="Hero" />
      </ImageSection>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;

  margin: 70px auto 10px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 550px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    margin: 120px auto 150px auto !important;
    padding: 0;
  }
`;

const MainSection = styled.div`
  width: 46%;
  padding: 15px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 95%;

    display: flex;
    align-items: center;

    padding: 0;
    margin-bottom: 40px;
  }
`;

const ImageSection = styled.div`
  width: 30%;
  margin-left: -50px;
  img {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    width: 50%;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
  @media only screen and (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  p {
    text-align: left;
    color: #f35324;
    font-weight: 600;
    border-bottom: 3px solid #f35324;
    width: fit-content;
    border-radius: 2px;
    padding-bottom: 5px;
  }
`;
const Heading = styled.div`
  width: 80%;

  h3 {
    font-size: 55px;
    text-align: left;
    line-height: 65px;
    @media only screen and (max-width: 767px) {
      font-size: 35px;
      line-height: 50px;
      text-align: center;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 45px;
      line-height: 55px;
    }
  }
`;

const Description = styled.div`
  margin-top: 10px;
  width: 70%;
  margin-bottom: 20px;

  p {
    font-size: 13px;
    color: #7e7e7e;
    text-align: left;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
`;

const ButtonSection = styled.div`
  width: 80%;
  margin-top: 10px;
  display: flex;
  align-self: start;

  @media (max-width: 767px) {
    align-self: center;
  }
  button {
    width: 150px;
    height: 45px;
    background-color: #ff5621;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
      margin: auto;
    }
  }
`;
export default Hero;
