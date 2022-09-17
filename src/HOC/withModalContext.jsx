import React from 'react'

import { MyContext } from 'HOC/GlobalModalProvider';

const withModalContext = (Component, props) => {
    return () => {
            return (
                <MyContext.Consumer>
                    {updateModalContext => (
                        <Component {...props} updateModalContext={updateModalContext}/>
                    )}
                </MyContext.Consumer>
            )
        }
}

export default withModalContext;
