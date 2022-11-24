import React, {useState} from "react";
import styled from "styled-components";
import CardItem from "./Carditem";

const CardsStyle = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.colors.neturalo};
`;

const HeaderText = styled.h1`
  text-align: center;
`;

const CardsContainerStyle = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const CardsWrapperStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 50px 0 45px;
  justify-content: center;
`;


const Cards = ({data}) => {
  return (
    <CardsStyle>
      <HeaderText>Text</HeaderText>
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
