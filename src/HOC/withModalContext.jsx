import React from 'react'

import { MyModalContext } from 'HOC/GlobalModalProvider';

const withModalContext = (Component, props) => {
    return () => {
            return (
                <MyModalContext.Consumer>
                    {updateModalContext => (
                        <Component {...props} updateModalContext={updateModalContext}/>
                    )}
                </MyModalContext.Consumer>
            )
        }
}

export default withModalContext;
