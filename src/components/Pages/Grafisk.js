import React from "react";
import Carousel from "../Carousel";
import { CarouselDataOut, CarouselDataOur} from "../Data/CarouselData";
import Hero from "../Hero";
import styled from "styled-components";
import GrafiskBack from "../../Assets/Images/GrafiskBackground.png";


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

const Grafisk = () => {
    return  (
        <>
            <Hero header="Grafisk Design" p="Design jeg har laget" img={[<Img src={GrafiskBack}/>]}/>
            <ConntentWrapper>
            <TextWrapper>
                <h2>Prosjekter</h2>
                <p>Jeg har laget vanlige statiske css, html, og javascrypt nettsider og React nettsider som denne. All prosjektene var oppgaver via Høgskolen, bortsett fra hjemmesiden min som er laget i etterkant. </p>
            </TextWrapper>
            <TextWrapper>
                <h2>React prosjekt</h2>
                <p>I prosjektet var det jeg og to andre som jobbet på, jeg gjorde mesteparten av programeringen. Det gikk ut på å analysere en allerede eksisterende nettside og forbedre den. Vi relagde nettsiden til <a href="https://www.outland.no/">Outland</a>, med endringer som vi mente var forbedret brukervennlighet. De har siden oppdatert nettsiden sin, så under kan du se screenshots fra "Vår" og derres gammele nettside.</p>
            </TextWrapper>
            <Carousel data={CarouselDataOur} header="Vår"/>
            <Carousel data={CarouselDataOut} header="Outland"/>
                <h2>CSS, HTML, og JS</h2>
                <p>Mitt siste HTML prosjekt var kommunikasjons prosjekt der vi lagde nettartikler med interaktive kart, diagram, </p>
            </ConntentWrapper>
        </>
    )
}

export default Grafisk;