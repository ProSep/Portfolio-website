import React from "react";
import Carousel from "../Carousel";
import { CarouselDataGuitar, CarouselDataRoom, CarouselDataRobot} from "../Data/CarouselData";
import { TextData, TextDataNew } from "../Data/TextData";
import Hero from "../Hero";
import Textblock from "../TextBlock";
import Video from "../Video"
import Oblig1 from '../../Assets/3DA/Oblig1.mp4'
import Oblig2 from '../../Assets/3DA/Oblig2.mp4'
import Oblig3 from '../../Assets/3DA/Oblig3.mp4'
import styled from "styled-components";
import TreDBilder from "../../Assets/Images/3DBackground.png";
import ContentBox from "../Styles/ContentBox";


const Img = styled.img`
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    min-height: 0;
    z-index: 1;
    grid-area: 1/-1;
    object-fit: cover;
`

const TreD = () => {
    return  (
        <>
            <Hero header="3D portfolio" p="3D animasjoner og modeler" img={[<Img src={TreDBilder}/>]}/>
            <ContentBox>
                <Video data={Oblig1} header='Space robot'/>
                <Video data={Oblig2} header="Mad scientist lab"/>
                <Video data={Oblig3} header="Lightsaber showcase"/>
                <Carousel data={CarouselDataGuitar} header="Guitar"/>
                <Carousel data={CarouselDataRoom} header="Bedroom"/>
                <Carousel data={CarouselDataRobot} header="Atlas from Portal 2"/>
            </ContentBox>
        </>
    )
}

export default TreD;