import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddButton from 'Components/AddButton';


const StyledModalWindowConfirm = styled.div`
    
`

const ModalWindowConfirm = (props) => {
    return (
        <StyledModalWindowConfirm>
            <p>{props.title}</p>
            <AddButton title={props.acceptButtonTitle} onClickProps={props.acceptFunc}/>
            <AddButton title={props.rejectButtonTitle} onClickProps={props.rejectFunc}/>
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