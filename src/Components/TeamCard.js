import React from "react";
import styled from "styled-components";
function TeamCard({ name, role }) {
  return (
    <Container>
      <Image>
        <img src="./Image.png" alt={name} />
      </Image>
      <Info>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum
          quia facere voluptas alias nesciunt eius obcaecati aliquid ex, libero
          laborum doloribus ab sunt enim?
        </Description>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  background: #ffffff;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  transition: all 0.5s ease-in-out;
  margin-right: 10px;
  border-radius: 15px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

const Image = styled.div`
  width: 100%;
  border-radius: 15px;
  img {
    width: 100%;
    border-radius: 15px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  justify-content: center;
  margin: auto;
  padding: 10px;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #ff5621;
`;

const Role = styled.div`
  color: #3c3c43;
  font-size: 13px;
`;

const Description = styled.div`
  font-size: 14px;
  text-align: left;
  width: 95%;
  margin-top: 10px;
`;

export default TeamCard;
