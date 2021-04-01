import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-family: ${(props) => props.theme.fonts.secondaryFonts};
  color: rgb(177, 177, 177);
  font-size: 0.8rem;
  text-align: center;
  margin-top: 4rem;
`;

const Footer = () => <StyledFooter>&copy; Julie Norcoss, 2020</StyledFooter>;

export default Footer;
