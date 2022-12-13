import React from "react";
import Cards from "../Cards";
import Hero from "../Hero";
import styled from "styled-components";
import {CardsData} from "../Data/CardsData";
import Webicon from "../../Assets/Icon/Webicon.js";
import Dicon from "../../Assets/Icon/3dicon.js";
import Designicon from "../../Assets/Icon/DesignIcon.js";
import ImageMe from "../../Assets/Images/Bilde-Johan-B-Reitan.jpg";

const ContentBox = styled.div`
    max-width: 1120px;
    width: 100%;
    margin: 0px auto 0px auto;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neturalo};

    @media only screen and (max-width: 1120px) {
     width: 90%;
  }

`
const FerdigheterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 786px) {
    flex-direction: column;
    }
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
    padding: 0.8em;
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
    height: 80%;
    min-height: 500px;
    min-width: 500px;
    max-width: 645px;
    max-height: 750px;;
    border-radius: 154px;
    mix-blend-mode: luminosity;
    min-height: 0;
    z-index: 1;
    grid-area: 1/-1;
    object-fit: cover;
    margin: auto 10vw 7% auto;

    @media only screen and (max-width: 786px) {
        width: 95%;
        min-width: 320px;
        border-radius: 75px;
        margin: 10% auto auto auto;
    }
`


function Mal () {
    return  (
        <>
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
                        <h3>3D</h3>
                        <p>Har jobbet med Javascrypt, CSS/HTML og React til utvikling av nettsidene jeg har laget</p>
                    </WrapperInside>
                    <WrapperInside>
                    <IconWrapper>
                        <Designicon/>
                        </IconWrapper>
                        <h3>Grafisk Design</h3>
                        <p>Har jobbet med Javascrypt, CSS/HTML og React til utvikling av nettsidene jeg har laget</p>
                    </WrapperInside>
                </FerdigheterWrapper>
            </ContentBox>
            <Cards data={CardsData}/>
        </>
    )
}

export default Mal;