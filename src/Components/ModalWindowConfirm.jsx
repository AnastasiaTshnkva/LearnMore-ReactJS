import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddButton from 'Components/AddButton';


const StyledModalWindowConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .title {
    text-align: center;
    font-size: 24px;
    line-height: 26px;
    font-weight: 500;
  }
  .button-box {
    display: flex;
    justify-content: space-between;
    width: 35%;
  }
  .reject {
    background-color: ${props => props.theme.rejectButtonColor};
    padding: 7px;
    color: ${props => props.theme.lightTextColor};
    font-size: 18px;
    line-height: 22px;
    border: 2px solid transparent;
    border-radius: 3px;
    margin-top: 20px;
    &:hover {
      box-shadow: 0 0 5px ${props => props.theme.rejectButtonColor};
    }
    &:active {
      background-color: ${props => props.theme.rejectButtonColor};
    }
  }
`

const ModalWindowConfirm = (props) => {
    return (
        <StyledModalWindowConfirm>
            <p className={'title'}>{props.title}</p>
            <div className={'button-box'}>
                <AddButton className={'button'} title={props.acceptButtonTitle} onClickProps={props.acceptFunc}/>
                <button className={'reject button'} onClick={props.rejectFunc}>{props.rejectButtonTitle}</button>
            </div>
        </StyledModalWindowConfirm>
    );
};

ModalWindowConfirm.propTypes = {
    title: PropTypes.string,
    acceptButtonTitle: PropTypes.string,
    acceptFunc: PropTypes.func.isRequired,
    rejectButtonTitle: PropTypes.string,
    rejectFunc: PropTypes.func.isRequired,
};

ModalWindowConfirm.defaultProps = {
    title: 'Are you sure?',
    acceptButtonTitle: 'Yes',
    rejectButtonTitle: 'No',
};

export default ModalWindowConfirm;