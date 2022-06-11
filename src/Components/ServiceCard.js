import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, description }) {
  return (
    <Container>
      {image ? (
        <>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </>
      ) : (
        <p className="coming-soon">Coming Soon</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 240px;
  height: 340px;
  background: #fff1f1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }

  @media only screen and (max-width: 767px) {
    margin: 0 auto 40px auto;
    height: 300px;
    width: 210px;

    h3 {
      font-size: 15px !important;
    }

    p {
      font-size: 12px !important;
    }
  }

  img {
    width: 30%;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 19px;
  }

  p {
    font-size: 13px;
    width: 90%;
    margin-top: 10px;
    color: #5f5f5f;
  }

  .coming-soon {
    color: #fa9696;
    font-size: 18px;
    font-weight: 600;
  }
`;

export default ServiceCard;
