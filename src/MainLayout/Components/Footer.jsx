import React from "react";
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;
  background-color: ${props => {return props.theme.headerBackgroundColor}};
  height: 50px;
  color: ${props => {return props.theme.headerTextColor}};
  text-align: center;
  p {
    display: block;
    padding: 15px 0;
  }
`

const Footer = () => {
    return(
        <FooterStyles>
            <p>Made by me in 2022</p>
        </FooterStyles>
    )
};

export default Footer;