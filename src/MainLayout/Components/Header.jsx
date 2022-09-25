import React, {useEffect, useState} from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import IcomoonReact from 'icomoon-react';
import {useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import iconSet from 'assets/Icons/selection.json';
import dinoAvatar from 'assets/images/dinoAvatar.png';
import {
    showUserDataError,
    showUserDataFromStore,
    showUserDataLoading,
} from 'store/selectors/selectors';
import getCurrentUserThunk from 'store/thunk/users/getCurrentUserThunk';
import {setUserLogOutAction} from 'store/actions/userActionCreators';
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
    padding: 10px 20px;
  }
  
  .header__data {
    display: flex;
    .header__user-avatar {
      max-height: 60px;
      background-color: white;
      border-radius: 50%;
      margin-right: 15px;
    }
    .user-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .header__log-out {
        margin-top: 10px;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.accentTextColor};
        }
      }
    }
  }
`

const Header = (props) => {
    const dispatch = useDispatch();
    const { userID } = useParams();
    const navigate = useNavigate();
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
                    <img src={dinoAvatar} alt={'avatar'} className={'header__user-avatar'}/>
                    <div className={'user-data'}>
                        <p className={'header__user-name'}>Hi, {userData.name}!</p>
                        <p className={'header__log-out'} onClick={() => {
                            dispatch(setUserLogOutAction());
                            navigate('/login');
                        }}>Log Out</p>
                    </div>
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
                <li className={'header__data'}>
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