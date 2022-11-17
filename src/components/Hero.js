import React from 'react'
import styled from 'styled-components'
import { ButtonStyle } from './Styles/Button'

const VideoHero = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
`

const ContainerHero = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit: contain;
`

const HeroH1 = styled.h1`
    color: ${({ theme }) => theme.colors.netural};
    font-size: 100px;
    margin-top: -100px;

    @media screen and (max-width: 960px) {
      font-size: 9vw;
    }
`

const HeroP = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.netural};
  font-size: 32px;

  @media screen and (max-width: 960px) {
      font-size: 2.8vw;
    }
`

const ButtonHero = styled(ButtonStyle)`
  margin-top: 32px;
`




function Hero(props) {
  return (
    <ContainerHero className="hero-container">
        <VideoHero src = "https://static.videezy.com/system/resources/previews/000/056/350/original/Glowy-things-1-.mp4" loop autoPlay muted></VideoHero>
        <HeroH1>{props.header}</HeroH1>
        <HeroP>{props.p}</HeroP>
        <div className='hero-btns'></div>
        <ButtonHero outline large>CV Download</ButtonHero>
    </ContainerHero>
  )
}

export default Hero