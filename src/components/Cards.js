import React, {useState} from "react";
import styled from "styled-components";
import CardItem from "./Carditem";

const CardsStyle = styled.div`
  background: ${({ theme }) => theme.colors.neturalo};
  margin: 30vh auto 0 auto;
`;

const HeaderText = styled.h2`
  text-align: center;
`;

const CardsContainerStyle = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const CardsWrapperStyle = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    margin: auto auto auto auto;
  }
`;


const Cards = ({data}) => {
  return (
    <CardsStyle>
      <HeaderText>Portfolio</HeaderText>
      <CardsContainerStyle>
        <CardsWrapperStyle>
          {data.map((data) => {
            return (
							<CardItem key={data.slug} img={data.image} text={data.text} label={data.label} path={data.path}>
							</CardItem>
							)
            })}
        </CardsWrapperStyle>
      </CardsContainerStyle>
    </CardsStyle>
  );
}

export default Cards;
