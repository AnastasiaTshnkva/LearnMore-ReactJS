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
    background-color: ${props => props.theme.mainBackgroundColor};
    border: 1px solid ${props => props.theme.inputBorderColor};
    color: ${props => props.theme.inputTextColor};
    padding: 7px;
    border-radius: 3px;
    &::placeholder {
      color: ${props => props.theme.inputTextColor};
    }
    &:focus {
      outline: none;
    }
  }
`

const ModalWindowUpdate = (props) => {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);

    return (
        <StyledModalWindowUpdate>
            <div className={'modal-header'}>
                <p className={'title'}>{props.blockTitle}</p>
                <button type={'button'} onClick={props.closeWindowFunc} className={'close-but'}>
                    <IcomoonReact iconSet={iconSet} color={'#2d2b2b'} size={25} icon="close"/>
                </button>
            </div>
            <input onChange={(event) => setName(event.target.value)}
                   value={name}
                   className={'modal-input'}
                   placeholder={props.inputNamePlaceholder}/>
            {props.inputDescriptionPlaceholder &&
                <input onChange={(event) => setDescription(event.target.value)}
                       value={description} className={'modal-input'}
                       placeholder={props.inputDescriptionPlaceholder}
                />
            }
            <AddButton className={'button'} title={props.updateButtonTitle} type={'button'}
                       onClickProps={() => {
                           props.handleUpdateFunc(name, description)
                       }}/>
        </StyledModalWindowUpdate>
    )
};

ModalWindowUpdate.propTypes = {
    blockTitle: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    inputNamePlaceholder: PropTypes.string,
    inputDescriptionPlaceholder: PropTypes.string,
    handleUpdateFunc: PropTypes.func.isRequired,
    updateButtonTitle: PropTypes.string,
    closeWindowFunc: PropTypes.func.isRequired,
}

ModalWindowUpdate.defaultProps = {
    blockTitle: 'Data changing',
    updateButtonTitle: 'Save changes',
}

export default ModalWindowUpdate;