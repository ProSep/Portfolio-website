import React, { useRef, useEffect } from 'react';
import Cards from "../Cards";
import Hero from "../Hero";
import styled from "styled-components";
import {CardsData} from "../Data/CardsData";
import Webicon from "../../Assets/Icon/Webicon.js";
import Dicon from "../../Assets/Icon/3dicon.js";
import Designicon from "../../Assets/Icon/DesignIcon.js";
import ImageMe from "../../Assets/Images/Bilde-Johan-B-Reitan.jpg";

const ContentBox = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0px auto 0px auto;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neturalo};

    @media only screen and (max-width: 1120px) {
     width: 90%;
  }

`
const FerdigheterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 786px) {
        flex-direction: column;
    }
`
const WrapperInside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin: 2%;
`
const IconWrapper = styled.div`
    width: 25vw;
    height: 25vw;
    max-width: 310px;
    max-height: 310px;
    padding: 0.8em;
`
const AboutWrapper = styled.div`
    margin-top: 30vh;
    margin-bottom: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img = styled.img`
    width: 40%;
    height: 80%;
    min-height: 500px;
    min-width: 500px;
    max-width: 645px;
    max-height: 750px;;
    border-radius: 154px;
    mix-blend-mode: luminosity;
    min-height: 0;
    z-index: 1;
    grid-area: 1/-1;
    object-fit: cover;
    margin: auto 10vw 7% auto;

    @media only screen and (max-width: 786px) {
        width: 95%;
        min-width: 320px;
        border-radius: 75px;
        margin: 10% auto auto auto;
    }
`


function Mal () {
    return  (
        <>
            <Hero header="Johan B. Reitan" p="Frontend developer and 3D artist" img={[<Img src={ImageMe}/>]}/>
            <ContentBox>
                <AboutWrapper>
                    <h2>Om meg</h2>
                    <p>Hei, jeg heter Johan og er en 22 år gammel fagperson innen digital medie- og design. Jeg har en bachelorgrad innen dette fagområdet og har en lidenskap for alt som er kreativt.</p>
                    <p>Som 3D-kunstner, front-end-utvikler og grafisk designer har jeg en mangfoldig ferdighetssett som gjør at jeg kan bringe en unik perspektiv til ethvert prosjekt. Jeg søker stadig etter nye utfordringer og måter å forbedre mitt håndverk på, og jeg leter alltid etter muligheter til å samarbeide med andre og lære av deres erfaringer.</p>
                    <p>På fritiden holder jeg meg oppdatert med de siste trendene innen teknologi og design, samt utforsker ny programvare og teknikker. Jeg er også en ivrig gamer og liker å tilbringe tid med venner og familie.</p>
                    <p>Jeg gleder meg til å dele mitt arbeid med deg og håper å få muligheten til å samarbeide om fremtidige prosjekter. Takk for at du vurderer meg for ditt prosjekt!</p>
                </AboutWrapper>
                <h2>Ferdigheter</h2>
                <FerdigheterWrapper>
                    <WrapperInside>
                        <IconWrapper>
                            <Webicon/>
                        </IconWrapper>
                        <h3>Webutvikling</h3>
                        <p>Har jobbet med Javascrypt, CSS/HTML og React til utvikling av nettsidene jeg har laget</p>
                    </WrapperInside>
                    <WrapperInside>
                        <IconWrapper>
                            <Dicon/>
                        </IconWrapper>
                        <h3>3D</h3>
                        <p>Kan animere, modelere og texture. Har mest erfaring i Maya, kan også bruke Blender. Substance painter og designer er også program jeg kan.</p>
                    </WrapperInside>
                    <WrapperInside>
                    <IconWrapper>
                        <Designicon/>
                        </IconWrapper>
                        <h3>Grafisk Design</h3>
                        <p>Har erfaring med Ilustartor, Photoshop, og Indesign.</p>
                    </WrapperInside>
                </FerdigheterWrapper>
            </ContentBox>
            <Cards data={CardsData}/>
        </>
    )
}

export default Mal;