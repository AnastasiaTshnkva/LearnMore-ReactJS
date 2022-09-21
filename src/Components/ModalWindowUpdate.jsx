import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IcomoonReact from "icomoon-react";
import iconSet from "../assets/Icons/selection.json";
import AddButton from "./AddButton";

const StyledModalWindowUpdate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .modal-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .title {
      text-align: center;
      font-size: 24px;
      line-height: 26px;
      font-weight: 500;
    }
    .close-but {
      background-color: transparent;
      border: none;
    }
  }
  .modal-input {
    margin-top: 25px;
    width: 100%;
    border: 1px solid ${props => props.theme.inputBorderColor};
    padding: 7px;
    border-radius: 3px;
    &:focus {
      outline: none;
    }
  }
`

const ModalWindowUpdate = (props) => {
    const [cardName, setCardName] = useState(props.cardName);
    const [cardDecoding, setCardDecoding] = useState(props.cardDecoding);

    const newCardData = {
        cardName,
        cardDecoding,
    };

    return (
        <StyledModalWindowUpdate>
            <div className={'modal-header'}>
                <p className={'title'}>{props.blockTitle}</p>
                <button type={'button'} onClick={() => {props.updateModalContext(false)}} className={'close-but'}>
                    <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="close"/>
                </button>
            </div>
            <input onChange={(event) => setCardName(event.target.value)}
                   value={cardName}
                   className={'modal-input'}
                   placeholder={props.inputNamePlaceholder}/>
            {props.inputDescriptionPlaceholder &&
                <input onChange={(event) => setCardDecoding(event.target.value)}
                       value={cardDecoding} className={'modal-input'}
                       placeholder={props.inputDescriptionPlaceholder}/>
            }
            <AddButton className={'button'} title={props.updateButtonTitle} type={'button'}
                       onClickProps={() => {
                           console.log('click');
                           props.handleUpdateFunc(newCardData)
                       }}/>
        </StyledModalWindowUpdate>
    )
};

ModalWindowUpdate.propTypes = {
    blockTitle: PropTypes.string,
    cardName: PropTypes.string,
    cardDecoding: PropTypes.string,
    inputNamePlaceholder: PropTypes.string,
    inputDescriptionPlaceholder: PropTypes.string,
    handleUpdateFunc: PropTypes.func.isRequired,
    updateButtonTitle: PropTypes.string,
}

ModalWindowUpdate.defaultProps = {
    blockTitle: 'Data changing',
    updateButtonTitle: 'Save changes',
}

export default ModalWindowUpdate;