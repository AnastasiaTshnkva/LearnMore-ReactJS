import React, {createContext} from "react";
import styled from 'styled-components';

export const MyContext = createContext('oops');

const StyledModalProvider = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  background-color: ${props => {return props.theme.cardColor}};
`

class GlobalModalProvider extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            modalProvider: false,
        }
    }

    render() {
        const { modalContext } = this.state;

        return (
            <MyContext.Provider value={(modalContext) => {this.setState({modalContext})}} >
                {modalContext && <StyledModalProvider>{modalContext}</StyledModalProvider>}
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default GlobalModalProvider