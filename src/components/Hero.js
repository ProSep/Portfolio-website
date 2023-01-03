import React from 'react'
import styled from 'styled-components'

const ContainerHero = styled.div`
    height: 90vh;
    width: 100%;
    display: grid;
    max-width: 1921px;
    margin: auto auto;
  `

const HeroP = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 0;
  color: ${({ theme }) => theme.colors.netural};
  font-size: 1.8em;

  @media only screen and (${({ theme }) => theme.scale.xsmall}) {
        padding-top: 0.2rem;
        font-size: 1.2em;
  }

`

const HeaderBackground = styled.header`
    display: flex;
    flex-direction: column;
    width: auto;
    grid-area: 1/-1;
    padding: 30px 20px 30px 20%;
    margin: auto auto auto 0;
    background: rgba(94, 124, 226, 0.36);
    backdrop-filter: blur(15px);
    border-radius: 0px 20px 20px 0px;
    z-index: 2;

    @media screen and (max-width: 1400px) {
      margin: auto auto 200px auto;
      padding: 30px 20px 30px 30px;
      border-radius: 20px;
    }
    @media screen and (min-width: 1921px) {
      padding: 30px 20px 30px 380px;
    }
`
const HeaderAb = styled.div`
    @media screen and (min-width: 1921px) {
      position: absolute;
      grid-area: 1/-1;
      margin: auto auto auto 0;
      background: rgba(94, 124, 226, 0.36);
      left: -1000px;
      padding: 0px 0px 0px 1000px;
      height: calc(60px + 1.8em + 6em + 0.5rem + 3.2px * 7.8 + 8.65px);
      bottom: 0px; 
    }
`

function Hero(props) {
  return (
    <ContainerHero className="hero-container">
        {props.img}
        <HeaderBackground>
        <HeaderAb/>
          <h1>{props.header}</h1>
          <HeroP>{props.p}</HeroP>
        </HeaderBackground>
        {props.button}
    </ContainerHero>
  )
}

export default Hero