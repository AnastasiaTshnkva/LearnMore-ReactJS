import React, {useEffect, useState} from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import IcomoonReact from 'icomoon-react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import iconSet from 'assets/Icons/selection.json';
import {
    showUserDataError,
    showUserDataFromStore,
    showUserDataLoading,
} from 'store/selectors/selectors';
import getCurrentUserThunk from 'store/thunk/users/getCurrentUserThunk';
import withSwitchThemeContext from 'HOC/withSwitchThemeContext';

const StyledHeader = styled.header`
  background: ${props => props.theme.headerBackgroundColor};
  color: ${props => props.theme.headerTextColor};
  padding-left: 100px;
  padding-right: 100px;
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
  .theme-button{
    background-color: transparent;
    border: none;
  }
  .header__user {
    display: flex;
    margin-right: 10px;
    .header__user-avatar, .header__user-name{
      padding: 0 10px;
    }
    .header__user-avatar {
      height: 50px;
      background-color: white;
      border-radius: 50%;
    }
  }
`

const Header = (props) => {
    const dispatch = useDispatch();
    const { userID } = useParams();
    const [userData, setUserData] = useState({});
    const userDataLoading = useSelector(showUserDataLoading);
    const userDataError = useSelector(showUserDataError);
    const userDataFromStore = useSelector(showUserDataFromStore);
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        dispatch(getCurrentUserThunk(userID));
    }, []);

    useEffect(() => {
        setUserData(userDataFromStore[0])
    }, [userDataFromStore]);

    const getHeader = () => {
        if (userDataLoading) {return <p className={'header__user-name'}>Loading</p>}
        if (userDataError) {return <p className={'header__user-name'}>Oops!</p>}
        if (userData) {
            return (
                <React.Fragment>
                    <p className={'header__user-name'}>Hi, {userData.name}!</p>
                </React.Fragment>

            )
        }
        return <p className={'header__user-name'}></p>
    }

    const chooseButton = () => {
        if(theme === 'light') {
            return <IcomoonReact iconSet={iconSet} color="#f7faf7" size={17} icon="moon"/>
        }
        if(theme === 'dark') {
            return <IcomoonReact iconSet={iconSet} color="#f7faf7" size={17} icon="sun"/>
        }
    };

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return(
        <StyledHeader>
            <ul className={'header__list'}>
                <li className={'header__logo'}>LearnMore</li>
                <li className={'header__user'}>
                    <button className={'theme-button'} type={'button'} onClick={() => {
                        props.themeSwitch();
                        changeTheme();
                    }}>{chooseButton()}</button>
                    {getHeader()}
                </li>
            </ul>
        </StyledHeader>
    )
};

export default withSwitchThemeContext(Header);