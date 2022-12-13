import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Navbarsty = styled.nav`
  background: ${({ theme }) => theme.colors.neturalo};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: auto 60% auto;
  grid-template-rows: 80px;
  max-width: 1500px;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: 960px) {
    display: flex;
    }
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
  margin-left: 1.5em;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  grid-row: 1;
  grid-column: 1;

  @media screen and (max-width: 960px) {
    top: 0;
    right: 0;
  }
  :hover {
      border-radius: 0;
      border-bottom: 4px solid #fff;
      transition: all 0.2s ease-out;
    }
`;

const Menuicon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    grid-column: 2;
    cursor: pointer;
    margin-right: 1.5em;
    margin-left: auto;
  }
`;

const NavItemSty = styled.li`
  height: 80px;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.netural};
  text-decoration: none;
  font-size: 2em;
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
    width: 5.4vh;
    height: 5.4vh;
    display: flex;
    flex-direction: row;
`

const LogoText = styled.h1`
    font-size: 2em;
    line-height: 1em;
    margin: auto auto auto 0.4em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-variant: small-caps;
    font-weight: lighter;
`

const Icon = styled.i`
    font-size: 2em;
    color: ${({ theme }) => theme.colors.netural};
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
              <img src="/LogoNB.svg"></img>
            </LogoWrapper>
            <LogoText>Johan B. Reitan</LogoText>
          </LogoLinkSty>
          <Menuicon className="menu-icon" onClick={handleClick}>
            <Icon className={click ? "fas fa-times" : "fas fa-bars"} />
          </Menuicon>
          <NavmenuSty active={click}>
            <NavItemSty>
              <NavLink to="/3D" className="nav-links" onClick={closeMobileMenu}>
                3D
              </NavLink>
            </NavItemSty>
            <NavItemSty>
              <NavLink
                to="/Web"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Webutvikling
              </NavLink>
            </NavItemSty>
            <NavItemSty>
              <NavLink to="/Grafisk" className="nav-links" onClick={closeMobileMenu}>
                Grafisk
              </NavLink>
            </NavItemSty>
          </NavmenuSty>
        </NavContainer>
      </Navbarsty>
    </>
  );
}

export default Navbar;
