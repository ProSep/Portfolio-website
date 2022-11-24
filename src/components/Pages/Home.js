import React from "react";
import Cards from "../Cards";
import Hero from "../Hero";
import styled from "styled-components";
import {CardsData} from "../Data/CardsData";


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
    padding: 100px 0 100px 0;
    width: 1120px;
    margin: auto;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neturalo};
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
    width: 370px;
`



function Mal () {
    return  (
        <>  
            <BoxBackground1/>
            <Hero header="Johan B. Reitan" p="Frontend developer and 3D artist"/>
            <ContentBox>
                <h1>Ferdigheter</h1>
                <FerdigheterWrapper>
                    <WrapperInside>
                        <img src="https://findicons.com/files/icons/766/base_software/256/circle_blue.png" alt="" />
                        <h3>Webutvikling</h3>
                        <p>Har jobbet med Javascrypt, CSS/HTML og React til utvikling av nettsidene jeg har laget</p>
                    </WrapperInside>
                    <WrapperInside>
                        <img src="https://findicons.com/files/icons/766/base_software/256/circle_blue.png" alt="" />
                    </WrapperInside>
                    <WrapperInside>
                        <img src="https://findicons.com/files/icons/766/base_software/256/circle_blue.png" alt="" />
                    </WrapperInside>
                </FerdigheterWrapper>

            </ContentBox>
            <Cards data={CardsData}/>
        </>
    )
}

export default Mal;