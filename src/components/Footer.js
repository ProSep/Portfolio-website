import styled from 'styled-components';

const FooterArea = styled.footer`
  padding: 44px;
  background-color: ${({ theme }) => theme.colors.neturalo};
  border-top-style: solid;
  border-color: white;
  border-width: 1px;

  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FooterHeader1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
`;

const FooterHeader2 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 40px;
  text-transform: lowercase;
`;



const Footer = () => (
  <FooterArea>
    <FooterHeader1>Kontakt meg</FooterHeader1>
    <FooterHeader2>johan.b.reitan@gmail.com</FooterHeader2>
  </FooterArea>
);

export default Footer;