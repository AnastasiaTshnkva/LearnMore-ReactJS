import React from "react";
import styled from 'styled-components';
import { MyContext } from "../../HOC/GlobalThemeProvider";


const StyledHeader = styled.div`
  background: ${props => {return props.theme.headerBackgroundColor}};
  color: ${props => {return props.theme.headerTextColor}};
  width: 100vw;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 80px;
  }
  .header__logo {
    display: block;
    margin-left: 20px;
  }
  
  .header__user {
    display: flex;
    margin-right: 10px;
    .header__user-avatar, .header__user-name{
      padding: 0 10px;
    }
  }
`

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledHeader>
                <ul className={'header'}>
                    <li className={'header__logo'}>Learn more</li>
                    <li className={'header__user'}>
                        <button type={'button'}>L</button>
                        <p className={'header__user-avatar'}>avatar</p>
                        <p className={'header__user-name'}>name</p>
                    </li>
                </ul>
            </StyledHeader>

        )
    }
};

export default Header;