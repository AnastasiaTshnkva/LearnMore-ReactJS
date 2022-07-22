import React from "react";
import styled from "styled-components";

const StyledButtons = styled.div`
  .but {
    background-color: ${props => {
        console.log(props.theme)
        return props.theme.addButtonColor
    }};
    border: none;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;

    &:hover {
      background-color: ${props => {return props.theme.addButtonHoverColor}};
    }

    &:active {
      background-color: ${props => {return props.theme.addButtonColor}};
    }
  }
`

class Buttons extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledButtons>
                <React.Fragment>
                    <button className={'but'} type={'button'}>{this.props.innerText}</button>
                </React.Fragment>

            </StyledButtons>

        )
    }
}

export default Buttons;