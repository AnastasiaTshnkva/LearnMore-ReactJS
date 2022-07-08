import React from "react";
import styled from 'styled-components';

const FooterStyles = styled.div`
    .footer {
      width: 100vw;
      background-color: rgb(70, 84, 70);
      height: 50px;
      color: white;
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