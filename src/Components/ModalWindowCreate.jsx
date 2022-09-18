import React, {useState} from 'react';
import styled from 'styled-components';
import IcomoonReact from 'icomoon-react';
import PropTypes from 'prop-types';
import AddButton from 'Components/AddButton';
import iconSet from 'assets/Icons/selection.json';

const StyledModalWindowCreate = styled.div`
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

const ModalWindowCreate = (props) => {
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');

    return (
        <StyledModalWindowCreate>
            <div className={'modal-header'}>
                <p className={'title'}>{props.blockTitle}</p>
                <button type={'button'} onClick={() => {props.updateModalContext(false)}} className={'close-but'}>
                    <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="close"/>
                </button>
            </div>
            <input onChange={(event) => setNewName(event.target.value)}
                   value={newName} className={'modal-input'} placeholder={props.inputNamePlaceholder}/>
            {props.inputDescriptionPlaceholder &&
                <input onChange={(event) => setNewDescription(event.target.value)}
                       value={newDescription} className={'modal-input'} placeholder={props.inputDescriptionPlaceholder}/>
            }
            <AddButton className={'button'} title={'Add new category'} type={'button'}
                       onClickProps={() => props.handleAddFunc(newName, newDescription)}>{props.addButtonTitle}</AddButton>
        </StyledModalWindowCreate>
    )
};

ModalWindowCreate.propTypes = {
    blockTitle: PropTypes.string,
    updateModalContext: PropTypes.func.isRequired,
    inputNamePlaceholder: PropTypes.string,
    inputDescriptionPlaceholder: PropTypes.string,
    handleAddFunc:PropTypes.func.isRequired,
    addButtonTitle: PropTypes.string,
};

export default ModalWindowCreate;