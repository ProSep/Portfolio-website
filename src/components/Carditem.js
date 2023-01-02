import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Top from "./Top.js"

const CardItemStyle = styled.li`
  display: flex;
  flex: 1;
  max-width: 500px;
  margin: 0 1rem;
  border-radius: 10px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.netural};
  z-index: 5;

  @media only screen and (min-width: 1024px) {
    display: flex;
    margin-bottom: 2rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`;
const CardLinkStyle = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-filter: drop-shadow(0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19));
  filter: drop-shadow(0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

const CardsPicWrapStyle = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  &:after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.netural};
    background-color: ${({ theme }) => theme.colors.secondary};
    box-sizing: border-box;
  }
`;

const CardsImageStyle = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardsInfoStyle = styled.div`
  padding: auto auto auto auto;
  max-width: 500px; //Card width
  width: 80vw;
  @media only screen and (min-width: 1200px) {
      width: 500px;
  }
`;

const CardTextStyle = styled.h2`
  font-size: 2em;
  line-height: 2em;
  color: black;
  text-align: center;
  margin: 10px;
  @media only screen and (max-width: 810px) {
    font-size: 1.2em;
    margin: 4px;
  }
`;

function CardItem(props) {
  return (
    <>
      <CardItemStyle>
        <CardLinkStyle to={props.path} onClick={Top}>
          <CardsPicWrapStyle data-category={props.label}>
            <CardsImageStyle src={props.img} alt="Image" />
          </CardsPicWrapStyle>
          <CardsInfoStyle>
            <CardTextStyle>{props.text}</CardTextStyle>
          </CardsInfoStyle>
        </CardLinkStyle>
      </CardItemStyle>
    </>
  );
}

export default CardItem;
