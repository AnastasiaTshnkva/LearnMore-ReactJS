import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import IcomoonReact from 'icomoon-react';
import { useSelector } from 'react-redux';
import iconSet from 'assets/Icons/selection.json';
import { showUserData } from 'store/selectors/selectors';

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
    const [user, setUser] = useState({});
    const userFromStore = useSelector(showUserData);

    return(
        <StyledHeader>
            <ul className={'header__list'}>
                <li className={'header__logo'}>LearnMore</li>
                <li className={'header__user'}>

                  <IcomoonReact iconSet={iconSet} color="#f7faf7" size={15} icon="moon"/>
                  <IcomoonReact iconSet={iconSet} color="#f7faf7" size={20} icon="sun"/>
                    <p className={'header__user-avatar'}>avatar</p>
                    <p className={'header__user-name'}>name</p>
                </li>
            </ul>
        </StyledHeader>
    )
};

export default Header;