import React from "react";
import styled from "styled-components";
function Navbar({
  serviceRef,
  scrollToElement,
  contactRef,
  teamRef,
  activeTab,
}) {
  console.log(activeTab);
  return (
    <Container>
      <Logo>
        <img src="./Logo.png" alt="Codone" />
      </Logo>
      <Menu>
        <MenuItem activeTab={activeTab}>
          <p>Home</p>
        </MenuItem>
        <MenuItem
          activeTab={activeTab}
          onClick={() => scrollToElement(serviceRef.current.className)}
        >
          <p>Services</p>
        </MenuItem>
        <MenuItem
          activeTab={activeTab}
          onClick={() => scrollToElement(teamRef.current.className)}
        >
          <p>Team</p>
        </MenuItem>
        <MenuItem activeTab={activeTab}>
          <p>Projects</p>
        </MenuItem>

        <MenuItem activeTab={activeTab}>
          <button
            onClick={() => scrollToElement(contactRef.current.className)}
            sss
          >
            Contact
          </button>
        </MenuItem>
      </Menu>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px auto;
  position: fixed;
  width: 90%;
  left: 50%;
  height: 65px;
  top: 0;
  transform: translate(-50%, 0);
  z-index: 100;
  background-color: #fff;
`;
const Logo = styled.div`
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    margin: auto;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 450px;
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  p {
    font-size: 15px;
    font-weight: 500;
  }
  &:nth-child(${(props) => props.activeTab}) {
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
export default Navbar;
