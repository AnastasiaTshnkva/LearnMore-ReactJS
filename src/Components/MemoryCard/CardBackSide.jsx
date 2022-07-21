import React from "react";
import styled from 'styled-components';

const StyledCardBackSide = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  .memoryCard__decoding {
    font-size: 16px;
    line-height: 18px;
  }
`

class CardBackSide extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledCardBackSide>
                <p className={'memoryCard__decoding'}>{this.props.cardDecoding}</p>
            </StyledCardBackSide>
        )
    }
}

export default CardBackSide;