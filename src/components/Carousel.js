import React, {useState} from "react";
import styled, { css } from "styled-components";

const MainWrapperStyle = styled.div`
  width: auto;
  height: 100%;
`;

const SlidesStyle = styled.div`
	position: relative;
  animation-duration: 1.5s;
  display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 33px;
  min-height: 630px;
  @media only screen and (max-width: 1120px) {
    min-height: auto;
  }
`;

const IconStyle = styled.i`
    z-index: 10;
    position: absolute;
    align-items: center;
    align-self: center;
    display: block;
    font-size: 5vw;
    transition: 0.1s;

&.${(props) =>
      props.right
        ? css`;
            right: 5vw;
          `
        : css`;
            left: 5vw;
          `};


    &:hover {
        cursor: pointer;
        font-size: 8vw;
        color: blue;
    }
`

const DotsWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 4vh;
`

const DotsStyle = styled.i`
  z-index: 10;
  margin: 1vh;
  color: white;

  &:hover {
    cursor: pointer;
    color: black;
    }
  &:active {
    color:black;
  }
`

const Carousel = ({data}) => {

const [current, setCurrent] = useState(0);
const length = data.length;

const carouselNext = () => {
	setCurrent(current === length - 1 ? 0 : current + 1);
}

const carouselPrevious = () => {
	setCurrent(current === 0 ? length -1 : current - 1)
}

if (!Array.isArray(data) || data.length <=0) {
	return null;
}


  return (
    <>
      <MainWrapperStyle>
        <SlidesStyle>
          {data.map((data) => {
            return (
							<SlidesStyle className={data.slug === current ? 'data active' : 'data'} key={data.slug}>
							 {data.slug === current && (
								<ImageStyle src={data.image} alt="Test" />
								)}
							</SlidesStyle>
							)
            })}
          <IconStyle className="fa fa-chevron-circle-left" 
					onClick={carouselPrevious}
					/>
          <IconStyle right className="fa fa-chevron-circle-right"
					onClick={carouselNext} />
          <DotsWrapperStyle>
          {data.map((data) => {
            return (
                <DotsStyle className={data.slug === current ? 'fa fa-circle' : 'fa fa-circle-o'} key={data.slug} onClick={() => setCurrent(data.slug)}/>
							)
          })}
          </DotsWrapperStyle>
        </SlidesStyle>
      </MainWrapperStyle>
    </>
  )
}

export default Carousel;
