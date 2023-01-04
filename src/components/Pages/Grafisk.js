import React from "react";
import Carousel from "../Carousel";
import { CarouselDataMan, CarouselDataBro} from "../Data/CarouselData";
import Hero from "../Hero";
import styled from "styled-components";
import GrafiskBack from "../../Assets/Images/GrafiskBackground.png";
import ContentBox from "../Styles/ContentBox";


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
            <ContentBox>
            <TextWrapper>
                <h2>Prosjekt</h2>
                <p>Jeg har tidligere gjennomført et større prosjekt i faget "Grafisk Design". Oppgaven gikk ut på å lage en profilmanual for et oppdiktet selskap kalt "The Habituary", som er en møbelbutikk. Som en del av profilmanualen designet jeg et logo, lagde en brosjyre og bestemte fargesettingen og typografien for selskapet.</p>
            </TextWrapper>
                <Carousel data={CarouselDataMan} header="Profilmanual"/>
                <Carousel data={CarouselDataBro} header="brosjyre"/>
            </ContentBox>
        </>
    )
}

export default Grafisk;