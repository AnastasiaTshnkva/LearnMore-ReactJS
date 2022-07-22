import React from "react";
import styled from 'styled-components';

const FooterStyles = styled.div`
    .footer {
      width: 100vw;
      background-color: ${props => {return props.theme.headerBackgroundColor}};
      height: 50px;
      color: ${props => {return props.theme.headerTextColor}};
      text-align: center;
      p {
        display: block;
        padding: 15px 0;
      }
    }
`

class Footer extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <FooterStyles>
                <div className={'footer'}>
                    <p>Made in 2022 by me</p>
                </div>
            </FooterStyles>
        )
    }
};

export default Footer;