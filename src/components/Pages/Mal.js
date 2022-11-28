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

const ConntentWrapper = styled.div`
    width: 1120px;
    margin: auto;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neturalo};
    @media only screen and (max-width: 1120px) {
        width: 100%;
  }

`

const Mal = () => {
    return  (
        <>
            <Hero header="3D" p="Mal text"/>
            <ConntentWrapper>
            <Video data={Oblig1}/>
            <Video data={Oblig2}/>
            <Video data={Oblig3}/>
            <Carousel data={CarouselDataGuitar}/>
            <Carousel data={CarouselDataRoom}/>
            <Carousel data={CarouselDataRobot}/>
            <Textblock data={TextData}/>
            <Textblock data={TextDataNew}/>
            </ConntentWrapper>
        </>
    )
}

export default Mal;