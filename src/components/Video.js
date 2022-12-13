import React from 'react'
import styled from 'styled-components'


const MainWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 0  0 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;


const VideoStyled = styled.video `
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 33px;
`

const Video = ({data, header}) => {
  return (
    <MainWrapperStyle>
      <h2>{header}</h2>
      <VideoStyled controls>
        <source src={data} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </VideoStyled>
    </MainWrapperStyle>
  )
}

export default Video
