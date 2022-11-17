import React from "react";
import Carousel from "../Carousel";
import { CarouselData, CarouselDataNew } from "../Data/CarouselData";
import { TextData, TextDataNew } from "../Data/TextData";
import Hero from "../Hero";
import Textblock from "../TextBlock";
import Video from "../Video"
import Oblig1 from '../../Assets/3DA/Oblig1.mp4'
import Oblig2 from '../../Assets/3DA/Oblig2.mp4'
import Oblig3 from '../../Assets/3DA/Oblig3.mp4'

const Mal = () => {
    return  (
        <>
            <Hero header="3D" p="Mal text"/>
            <Video data={Oblig1}/>
            <Video data={Oblig2}/>
            <Video data={Oblig3}/>
            <Carousel data={CarouselDataNew}/>
            <Carousel data={CarouselData}/>
            <Textblock data={TextData}/>
            <Textblock data={TextDataNew}/>
        </>
    )
}

export default Mal;