import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Logo from "../Assets/Icon/Logo.js";

const Navbarsty = styled.nav`
  background: ${({ theme }) => theme.colors.neturalo};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 20% 60% auto;
  grid-template-rows: 80px;
  max-width: 1500px;
  width: 100%;
  justify-content: space-evenly;
`;

const NavmenuSty = styled.ul`

  color:${({ theme }) => theme.colors.netural};
  display: grid;
  grid-template-columns: repeat(4, auto); 
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60px;
  justify-content: end;
  margin-right: 2rem;
  grid-column: 3;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-rows: 10vh 10vh 10vh auto;
    grid-template-columns: 100%;
    row-gap: 2vh;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 0;
    transition: all 0.5s ease;
  

    &.${(props) =>
      props.active
        ? css`
            background: #242222;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            background: rgba(94, 124, 226, 0.36);
            backdrop-filter: blur(15px);
            z-index: 10;
          `
        : "none"};
; 
}
`;

const LogoLinkSty = styled(Link)`
  color: ${({ theme }) => theme.colors.netural};
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  grid-row: 1;
  grid-column: 1;

  @media screen and (max-width: 960px) {
    display: block;
    position: flex;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Menuicon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavItemSty = styled.li`
  height: 80px;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.netural};
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;

  :hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    :hover {
      background-color: ${({ theme }) => theme.colors.netural};
      color: ${({ theme }) => theme.colors.neturalo};
      border-radius: 0;
    }
  }
`;

const LogoWrapper = styled.div`
    width: 7vh;
    height: auto;
`


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Navbarsty>
        <NavContainer className="navbar-container">
          <LogoLinkSty to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <LogoWrapper>
            <Logo/>
            </LogoWrapper>
          </LogoLinkSty>
          <Menuicon className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </Menuicon>
          <NavmenuSty active={click}>
            <NavItemSty>
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </NavItemSty>
            <NavItemSty>
              <NavLink to="/3D" className="nav-links" onClick={closeMobileMenu}>
                3D
              </NavLink>
            </NavItemSty>
            <NavItemSty>
              <NavLink
                to="/Programering"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Programering
              </NavLink>
            </NavItemSty>
          </NavmenuSty>
        </NavContainer>
      </Navbarsty>
    </>
  );
}

export default Navbar;
