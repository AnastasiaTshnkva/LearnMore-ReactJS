import React from 'react';
import  { MyContext } from 'HOC/GlobalModalProvider';

const WithModalContext = (Component, props) => {
    return (
        <MyContext.Consumer>
            {updateModalContext &&
                <Component {...props} updateModalContext={updateModalContext}/>
            }
        </MyContext.Consumer>
    )
};

export default WithModalContext;
