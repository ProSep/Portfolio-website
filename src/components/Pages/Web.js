import React from "react";
import Carousel from "../Carousel";
import { CarouselDataOut, CarouselDataOur, CarouselDataKom} from "../Data/CarouselData";
import Hero from "../Hero";
import styled from "styled-components";
import WebBilder from "../../Assets/Images/WebBackground.png";


const ConntentWrapper = styled.div`
    width: 1120px;
    margin: auto;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30vh;
    background-color: ${({ theme }) => theme.colors.neturalo};
    @media only screen and (max-width: 1120px) {
        width: 100%;
  }
`

const TextWrapper = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    min-height: 0;
    z-index: 1;
    grid-area: 1/-1;
    object-fit: cover;
`

const Web = () => {
    return  (
        <>
            <Hero header="Webutvikling" p="Nettsider jeg har laget" img={[<Img src={WebBilder}/>]}/>
            <ConntentWrapper>
            <TextWrapper>
                <h2>Prosjekter</h2>
                <p>Jeg har laget statiske HTML-, CSS- og JavaScript-nettsteder, samt React-nettsteder, som denne du for øyeblikket ser på. Disse prosjektene var alle oppgaver fra min universitet, med unntak av min personlige nettside som jeg laget etter å ha fullført studiene mine. </p>
                <p>I React-prosjektet jobbet jeg sammen med to andre teammedlemmer for å analysere og forbedre en eksisterende nettside for <a href="https://www.outland.no/">Outland</a>. Jeg hadde ansvaret for mye av programvaringen, og vårt mål var å forbedre brukeropplevelsen. Outland-nettstedet har siden blitt oppdatert, men du kan se skjermbilder av vår versjon og deres originale nettside nedenfor.</p>
                <p>Nettstedene jeg laget med HTML, CSS og JavaScript var enkle nettsider, og den jeg lenker til og viser bilder for nedenfor er den siste jeg laget. Det er en "Nyhetsside" som jeg laget for et kurs i kommunikasjonsdesign.</p>
            </TextWrapper>
            <Carousel data={CarouselDataOur} header="Vår"/>
            <Carousel data={CarouselDataOut} header="Outland"/>
            <Carousel data={CarouselDataKom} header="HTML, CSS, JS Prosjekt" text=<a href="https://komdesign.pages.dev/">Lenke til siden</a>/>
            </ConntentWrapper>
        </>
    )
}

export default Web;