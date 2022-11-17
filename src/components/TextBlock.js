import React from 'react'
import styled from 'styled-components'

const MainBox = styled.div `
    width: 100%;
    height: auto;
`

const BackgroundStyled = styled.div `
    background-color: ${({ theme }) => theme.colors.netural};
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`

const TextBoxStyle = styled.div `
    width: 100%;
    background-color: grey;
    margin: 30px 10px 30px 10px;
    border-radius: 5px;
    max-width: 1200px;

`

const HeadTextStyle = styled.h2 `
    padding-top: 10px;
    text-align: center;
    font-size: 50px;
`

const ParaTextStyle = styled.p `
    padding: 10px 20px 10px 20px;
    font-size: 20px;
`

const Textblock = ({data}) => {

    if (!Array.isArray(data) || data.length <=0) {
        return null;
    }

    return ( 
    <>
        <MainBox>
            <BackgroundStyled>
                <TextBoxStyle>
                {data.map((data) => {
                    return (
                    
                            <HeadTextStyle key={data.textslug}>{data.header}</HeadTextStyle>
                        
				    )
                })}
                {data.map((data) => {
                    return (
                            <ParaTextStyle key={data.textslug}>{data.text}</ParaTextStyle> 
				    )
                })}
                </TextBoxStyle>
            </BackgroundStyled>
        </MainBox>
    </>
    );
};

export default Textblock;