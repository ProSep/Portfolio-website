import React from "react";
import Carousel from "../Carousel";
import { CarouselDataGuitar, CarouselDataRoom, CarouselDataRobot} from "../Data/CarouselData";
import Hero from "../Hero";
import Video from "../Video"
import Oblig1 from '../../Assets/3DA/Oblig1.mp4'
import Oblig2 from '../../Assets/3DA/Oblig2.mp4'
import Oblig3 from '../../Assets/3DA/Oblig3.mp4'
import Vr from '../../Assets/VR/VR.mp4'
import Bachelor from '../../Assets/3DA/film_olje.mp4'
import styled from "styled-components";
import TreDBilder from "../../Assets/Images/3DBackground.png";
import ContentBox from "../Styles/ContentBox";
//Update

const Img = styled.img`
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    min-height: 0;
    z-index: 1;
    grid-area: 1/-1;
    object-fit: cover;
`

const TextWrapper = styled.div`
    margin-top: 30vh;
    margin-bottom: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TreD = () => {
    return  (
        <>
            <Hero header="3D portfolio" p="3D animasjoner og modeler" img={[<Img src={TreDBilder}/>]}/>
            <ContentBox>
            <TextWrapper>
            <h2>Prosjekt</h2>
                <p>Nedenfor kan du se resultatene fra prosjektene jeg har arbeidet med. Samlingen inkluderer både animasjoner og stillbilder, alle modellert og animert av meg i Autodesk Maya. I tillegg er det en skjermopptaksvideo av et VR-spill/museum som jeg og en gruppe utviklet. Det er også en animasjon fra bachelorgraden min som viser en båt som samler opp oljesøl fra havet. Denne animasjonen ble også produsert i gruppe, så ikke alt arbeidet er utført av meg alene.</p>
            </TextWrapper>
                <Carousel data={CarouselDataGuitar} header="Guitar"/>
                <Carousel data={CarouselDataRoom} header="Bedroom"/>
                <Carousel data={CarouselDataRobot} header="Atlas from Portal 2"/>
                <Video data={Oblig1} header='Space robot'/>
                <Video data={Oblig2} header="Mad scientist lab"/>
                <Video data={Oblig3} header="Lightsaber showcase"/>
                <Video data={Vr} header="VR museum"/>
                <Video data={Bachelor} header="Bachelor"/>
            </ContentBox>
        </>
    )
}

export default TreD;