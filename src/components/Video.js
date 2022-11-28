import React from 'react'
import styled from 'styled-components'


const MainWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0 100px 0;
`;


const VideoStyled = styled.video `
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 33px;
`

const Video = ({data}) => {
  return (
    <MainWrapperStyle>
    <VideoStyled controls>
        <source src={data} type="video/mp4"/>
        Your browser does not support HTML5 video.
    </VideoStyled>
    </MainWrapperStyle>
  )
}

export default Video
