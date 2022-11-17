import React from "react";
import styled from "styled-components";
import CardItem from "./Carditem";

const CardsStyle = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.colors.netural};
`;

const HeaderText = styled.h1`
  text-align: center;
`;

const CardsContainerStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const CardsWrapperStyle = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

const CardsItemsStyle = styled.div`
  margin-bottom: 24px;
`;



function Cards() {
  return (
    <CardsStyle>
      <HeaderText>Text</HeaderText>
      <CardsContainerStyle>
        <CardsWrapperStyle>
          <CardsItemsStyle>
            <CardItem
              img="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
              text="space the new frontier this is text that is not important!"
              label="Adventure"
              path="/Space"
            />

            <CardItem
              img="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg"
              text="Japan the new frontier this is text that is not important!"
              label="Japan"
              path="/Japan"
            />
          </CardsItemsStyle>
          <CardsItemsStyle>
            <CardItem
              img="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
              text="space the new frontier this is text that is not important!"
              label="Adventure"
              path="/Space"
            />

            <CardItem
              img="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg"
              text="Japan the new frontier this is text that is not important!"
              label="Japan"
              path="/Japan"
            />
                        <CardItem
              img="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg"
              text="Japan the new frontier this is text that is not important!"
              label="Japan"
              path="/Japan"
            />
          </CardsItemsStyle>
        </CardsWrapperStyle>
      </CardsContainerStyle>
    </CardsStyle>
  );
}

export default Cards;
