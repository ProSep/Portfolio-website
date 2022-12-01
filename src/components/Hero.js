import React from 'react'
import styled from 'styled-components'
import { ButtonStyle } from './Styles/Button'

const VideoHero = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -2;
`

const ContainerHero = styled.div`
    height: 90vh;
    width: 100%;
    display: grid;
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
`

const ButtonHero = styled(ButtonStyle)`
  margin-top: 700px;
  z-index: 2;
  grid-area: 1/-1;
  margin: auto auto 100px auto;
`

const HeaderBackground = styled.div`
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
`

//        <VideoHero src = "https://static.videezy.com/system/resources/previews/000/056/350/original/Glowy-things-1-.mp4" loop autoPlay muted></VideoHero>
//        <div className='hero-btns'></div>

function Hero(props) {
  return (
    <ContainerHero className="hero-container">
        {props.img}  
        <HeaderBackground>
          <h1>{props.header}</h1>
          <HeroP>{props.p}</HeroP>
        </HeaderBackground>
        <ButtonHero outline large>CV Download</ButtonHero>
    </ContainerHero>
  )
}

export default Hero