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
  padding-top: 0.5em;
  padding-bottom: 0;
  color: ${({ theme }) => theme.colors.netural};
  font-size: 1.8em;

  @media only screen and (${({ theme }) => theme.scale.xsmall}) {
        padding-top: 0.2em;
        font-size: 1.2em;
  }

  @media screen and (min-width: 1921px) {
      width: 660px;
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
      position: relative;
      left: -1000px;
      padding: 30px 20px 30px 1380px;
      background: none;
    }
`
const HeaderAb = styled.div`
    @media screen and (min-width: 1921px) {
      position: absolute;
      grid-area: 1/-1;
      margin: auto auto auto 0;
      background: rgba(94, 124, 226, 0.36);
      backdrop-filter: blur(15px);
      border-radius: 0px 20px 20px 0px;
      left: -1000px;
      padding: 30px 20px 30px 2380px;
      bottom: -88px;
    }
`

function Hero(props) {
  return (
    <ContainerHero className="hero-container">
        {props.img}
        <HeaderBackground>
        <HeaderAb>
          <h1>{props.header}</h1>
          <HeroP>{props.p}</HeroP>
          </HeaderAb>
        </HeaderBackground>
        {props.button}
    </ContainerHero>
  )
}

export default Hero