import React, {createContext, PureComponent, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IcomoonReact from "icomoon-react";
import iconSet from "../assets/Icons/selection.json";

export const MyContext = createContext('oops, default context error');

const StyledModalProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;  
  background-color: rgba(0, 0, 0, 0.31);
  width: 100%;
  height: 100%;
  .modal-window {
    position: relative;
    min-width: 500px;
    background-color: ${props => {return props.theme.cardColor}};
    border-radius: 5px;
  }
`

const GlobalModalProvider = (props) => {
    const [modalContext, setModalContext] = useState(false);

    const updateModalContext = (newModalContext) => {
        setModalContext(newModalContext);
    };

    return (
        <MyContext.Provider value={(modalContext) => {setModalContext(modalContext)}}>
            {modalContext &&
                <StyledModalProvider
                >
                    <div className={'modal-environment'}>
                        <div className={'modal-window'}>
                            {modalContext}
                        </div>
                    </div>
                </StyledModalProvider>
            }
            {props.children}
        </MyContext.Provider>

    )
}

export default GlobalModalProvider;