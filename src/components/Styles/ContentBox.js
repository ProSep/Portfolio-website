import styled from 'styled-components';

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

export default ContentBox; 