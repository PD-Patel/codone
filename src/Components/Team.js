import React from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import "aos/dist/aos.css";
function Team({ teamRef }) {
  return (
    <Container data-aos="fade-up" data-aos-duration="2000" ref={teamRef}>
      <Title>
        <img src="./Team.png" alt="" />
      </Title>
      <Image>
        <img src="./Team Image.png" alt="" />
      </Image>
      <Cards>
        <TeamCard name="Dhruval Patel" role="Founder" img={"./dhruval.jpeg"} />
        <TeamCard
          name="Pradhuman Patel"
          role="Co-Founder"
          img={"./pradhuman.jpg"}
        />
        <TeamCard
          name="Pushparajsinh Parmar"
          role="Co-Founder"
          img={"./pushparaj.jpeg"}
        />
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;

  margin: 40px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  img {
    width: 350px;
  }
`;

const Image = styled.div`
  width: 450px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  img {
    width: 100%;
  }
`;

const Cards = styled.div`
  display: flex;
  width: 80%;
  max-width: 1000px;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default Team;
