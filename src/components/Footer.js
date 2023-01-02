import styled from 'styled-components';

const FooterArea = styled.footer`
  background-color: ${({ theme }) => theme.colors.neturalo};
  border-top-style: solid;
  border-color: white;
  border-width: 1px;
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-top: 30vh;
  `;

const FooterHeader1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
  padding-bottom: 0.2em;
  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
`;

const FooterHeader2 = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  @media only screen and (max-width: 500px) {
    font-size: 1em;
  }
`;



const Footer = () => (
  <FooterArea>
    <FooterHeader1>Kontakt meg</FooterHeader1>
    <FooterHeader2 href="mailto:johan.b.reitan@gmail.com">johan.b.reitan@gmail.com</FooterHeader2>
  </FooterArea>
);

export default Footer;