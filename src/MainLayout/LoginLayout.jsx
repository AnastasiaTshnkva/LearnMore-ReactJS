import React from "react";
import styled from 'styled-components';
import { Outlet } from "react-router-dom";


const StyledLoginLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  color: ${props => {return props.theme.textColor}};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, ${props => props.theme.loginBackgroundColorLeft}, ${props => props.theme.loginBackgroundColorRight});

`

const LoginLayout = (props) => {
    return (
        <StyledLoginLayout>
            <main className={'main'}>
                <Outlet/>
                {/*<LoginPage/>*/}
                {props.children}
            </main>
        </StyledLoginLayout>
    );
}

export default LoginLayout;

