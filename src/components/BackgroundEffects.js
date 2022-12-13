import styled from 'styled-components';
import React from 'react'

const BackgroundEffectWrapper = styled.div`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: calc(100% - 80px);
    overflow: hidden;
`

const BoxBackground1 = styled.div`
    position: relative;
    left: -40%;
    top: 929.88px;
    width: 40vw;
    height: 40vw;
    min-width: 400px;
    min-height: 400px;
    background: #5E7CE2;
    filter: blur(500px);
`

const BoxBackground2 = styled.div` 
    position: relative;
    left: 100%;
    top: 1755px;   
    width: 40vw;
    height: 40vw;
    min-width: 400px;
    min-height: 400px;
    background: #DD0000;
    filter: blur(500px);
`

function BackgroundEffect () {
    return (
        <>
            <BackgroundEffectWrapper>
                <BoxBackground1/>
                <BoxBackground2/>
            </BackgroundEffectWrapper>
        </>
    )
  }

export default BackgroundEffect;