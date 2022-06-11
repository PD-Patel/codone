import React from "react";
import styled from "styled-components";

function Footer({ serviceRef, scrollToElement, contactRef, teamRef }) {
  return (
    <Container>
      <Main>
        <Logo>
          <img src="./Logo.png" alt="Codone" />
        </Logo>
        <Menu>
          <MenuItem>
            <p>Home</p>
          </MenuItem>
          <MenuItem
            onClick={() => scrollToElement(serviceRef.current.className)}
          >
            <p>Services</p>
          </MenuItem>
          <MenuItem onClick={() => scrollToElement(teamRef.current.className)}>
            <p>Team</p>
          </MenuItem>
          <MenuItem>
            <p>Projects</p>
          </MenuItem>
        </Menu>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background: #fff1f1;
  height: 204px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  @media only screen and (max-width: 767px) {
    height: 400px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px auto;

  width: 90%;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;
    order: 1px solid;
  }
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
  }
  width: 380px;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  cursor: pointer;
  p {
    font-size: 15px;
    font-weight: 500;
  }
  &:nth-child(1) {
    color: #ff5621;
  }

  button {
    background-color: #ff5621;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    width: 116px;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;
export default Footer;
