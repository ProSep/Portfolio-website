import React from "react";
import Cards from "../Cards";
import Hero from "../Hero";
import styled from "styled-components";
import {CardsData} from "../Data/CardsData";
import Webicon from "../../Assets/Icon/Webicon.js";


const BoxBackground1 = styled.div`
position: absolute;
width: 592.78px;
height: 792.31px;
left: -173.21px;
top: 929.88px;
z-index: 1;
background: #5E7CE2;
filter: blur(500px);
transform: rotate(5.17deg);
`

const BoxBackground2 = styled.div`
position: absolute;
width: 821px;
height: 821px;
left: 1149px;
top: 2755px;
z-index: -1;
background: #DD0000;
filter: blur(449.5px);
`

const ContentBox = styled.div`
    width: 1120px;
    margin: 100px auto 0px auto;
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
const FerdigheterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
`
const WrapperInside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
`

const IconWrapper = styled.div`
    width: 25vw;
    height: 25vw;
    max-width: 310px;
    max-height: 310px;
`



function Mal () {
    return  (
        <>  
            <BoxBackground1/>
            <Hero header="Johan B. Reitan" p="Frontend developer and 3D artist"/>
            <ContentBox>
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
                            <Webicon/>
                        </IconWrapper>
                    </WrapperInside>
                    <WrapperInside>
                    <IconWrapper>
                            <Webicon/>
                        </IconWrapper>
                    </WrapperInside>
                </FerdigheterWrapper>
            </ContentBox>
            <Cards data={CardsData}/>
        </>
    )
}

export default Mal;