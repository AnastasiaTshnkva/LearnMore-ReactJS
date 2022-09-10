import React, {createContext} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IcomoonReact from "icomoon-react";
import iconSet from "../assets/Icons/selection.json";

export const MyContext = createContext('oops');

const StyledModalProvider = styled.div`
  position: absolute;  
  background-color: rgba(0, 0, 0, 0.31);
  width: 100%;
  .modal-window {
    background-color: ${props => {return props.theme.cardColor}};
  }
`

const GlobalModalProvider = ({
    title, isOpen, onCancel, onSubmit, children, buttonTitle,
   }) => {

    return (
        <StyledModalProvider>
            { isOpen &&
                <div className={'modal-environment'}>
                    <div className={'modal-window'}>
                        <div className={'modal-header'}>
                            <div>{title}</div>
                            <div onClick={onCancel}>
                                <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="close"/>
                            </div>
                        </div>
                        <div className={'modal-body'}>
                            {children}
                        </div>
                        <div className={'modal-footer'}>
                            <button onClick={onSubmit}>{buttonTitle}</button>
                        </div>
                    </div>
                </div>
            }
        </StyledModalProvider>

    )
}

GlobalModalProvider.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
    buttonTitle: PropTypes.string,
}

GlobalModalProvider.defaltProps = {
    title: 'Create new',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
    buttonTitle: 'Create',
}

export default GlobalModalProvider;