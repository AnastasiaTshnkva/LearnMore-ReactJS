import React from 'react';
import styled from 'styled-components';

const StyledListOfCardBundles = styled.div`
  .search {
    width: 50vw;
    padding: 7px;
    border: 5px solid ${props => props.theme.inputBorderColor};
  }
`

const ListOfCardBundles = () => {
    return (
        <React.Fragment>
            <input type={'text'} placeholder={'search category'} className={'search'}/>
            <ul>
                <li>fghjkl</li>
                <li>fghjkl</li>
                <li>fghjkl</li>
            </ul>
        </React.Fragment>

    )

}

export default ListOfCardBundles;
