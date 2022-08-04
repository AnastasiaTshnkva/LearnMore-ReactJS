import React from "react";
import styled from 'styled-components';


const StyledHeader = styled.header`
  background: ${props => {return props.theme.headerBackgroundColor}};
  color: ${props => {return props.theme.headerTextColor}};
  width: 100vw;

  .header__list {
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

const Header = () => {
    return(
        <StyledHeader>
            <ul className={'header__list'}>
                <li className={'header__logo'}>Learn more</li>
                <li className={'header__user'}>
                    <button type={'button'}>L</button>
                    <p className={'header__user-avatar'}>avatar</p>
                    <p className={'header__user-name'}>name</p>
                </li>
            </ul>
        </StyledHeader>
    )
};

export default Header;