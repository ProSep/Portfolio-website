import React from 'react'
import styled from 'styled-components'
import { ButtonStyle } from './Styles/Button'
import ImageMe from "../Assets/Images/Bilde-Johan-B-Reitan.jpg";

const VideoHero = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -2;
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
    background-color:${({ theme }) => theme.colors.neturalo};
`

const HeroH1 = styled.h1`
    color: ${({ theme }) => theme.colors.netural};
    font-size: 100px;
    margin-left: 40px;

    @media screen and (max-width: 960px) {
      font-size: 9vw;
    }
`

const HeroP = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.netural};
  font-size: 32px;
  margin-left: 40px;

  @media screen and (max-width: 960px) {
      font-size: 2.8vw;
    }
`

const ButtonHero = styled(ButtonStyle)`
  margin-top: 700px;
  z-index: 2;
`

const Me = styled.div`
    position: absolute;
    width: 645px;
    height: 751px;
    left: 50vw;
    top: 101px;
    
    background: url(${ImageMe});
    mix-blend-mode: luminosity;
    border-radius: 154px;
    background-position: center;
    z-index: 1;
    background-size: cover;
`

const HeaderBackground = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    padding: 30px 60px 30px 10%;
    left: -1vw;
    top: 284px;
    background: rgba(94, 124, 226, 0.36);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    z-index: 2;
`

//        <VideoHero src = "https://static.videezy.com/system/resources/previews/000/056/350/original/Glowy-things-1-.mp4" loop autoPlay muted></VideoHero>

function Hero(props) {
  return (
    <ContainerHero className="hero-container">
        <Me/>        
        <HeaderBackground>
        <HeroH1>{props.header}</HeroH1>
        <HeroP>{props.p}</HeroP>
        </HeaderBackground>
        <div className='hero-btns'></div>
        <ButtonHero outline large>CV Download</ButtonHero>
    </ContainerHero>
  )
}

export default Hero