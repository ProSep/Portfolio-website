import React from "react";
import Cards from "../Cards";
import Hero from "../Hero";
import styled from "styled-components";
import {CardsData} from "../Data/CardsData";
import Webicon from "../../Assets/Icon/Webicon.js";
import Dicon from "../../Assets/Icon/3dicon.js";
import Designicon from "../../Assets/Icon/DesignIcon.js";
import ImageMe from "../../Assets/Images/Bilde-Johan-B-Reitan.jpg";

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
    margin: 0px auto 0px auto;
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
const AboutWrapper = styled.div`
    margin-top: 30vh;
    margin-bottom: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img = styled.img`
    width: 40%;
    height: 70%;
    min-height: 200px;
    min-width: 500px;
    max-width: 645px;
    max-height: 751px;;
    border-radius: 154px;
    mix-blend-mode: luminosity;
    min-height: 0;
    z-index: 1;
    grid-area: 1/-1;
    object-fit: cover;
    margin: auto 10vw auto auto;
`


function Mal () {
    return  (
        <>  
            <BoxBackground1/>
            <Hero header="Johan B. Reitan" p="Frontend developer and 3D artist" img={[<Img src={ImageMe}/>]}/>
            <ContentBox>
                <AboutWrapper>
                    <h2>Om meg</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui. Quisque egestas diam in arcu cursus. Senectus et netus et malesuada fames ac. Ut etiam sit amet nisl purus in mollis nunc. Diam vulputate ut pharetra sit amet aliquam id diam. Amet justo donec enim diam vulputate ut pharetra.</p>
                    <p>Amet volutpat consequat mauris nunc congue nisi vitae. Amet consectetur adipiscing elit duis tristique. Aliquet bibendum enim facilisis gravida neque convallis a. A volutpat diam ut venenatis tellus. Lectus proin nibh nisl </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui. Quisque egestas diam in arcu cursus. Senectus et netus et malesuada fames ac. Ut etiam sit amet nisl purus in mollis nunc. Diam vulputate ut pharetra sit amet aliquam id diam. Amet justo donec enim diam vulputate ut pharetra.</p>
                    <p>Amet volutpat consequat mauris nunc congue nisi vitae. Amet consectetur adipiscing elit duis tristique. Aliquet bibendum enim facilisis gravida neque convallis a. A volutpat diam ut venenatis tellus. Lectus proin nibh nisl </p>
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
                    </WrapperInside>
                    <WrapperInside>
                    <IconWrapper>
                            <Designicon/>
                        </IconWrapper>
                    </WrapperInside>
                </FerdigheterWrapper>
            </ContentBox>
            <Cards data={CardsData}/>
        </>
    )
}

export default Mal;