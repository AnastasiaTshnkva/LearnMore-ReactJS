import React from 'react';
import styled from 'styled-components';
import iconSet from 'assets/Icons/selection.json'
import IcomoonReact, { iconList } from "icomoon-react";

const StyledSearchInput = styled.div`
  .search {
    display: flex;
    align-items: center;
    width: 40vw;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    border: 7px solid ${props => props.theme.inputBorderColor};
    border-radius: 15px;
    margin-bottom: 30px;
    .search__icon {
      margin-right: 5px;
    }
    .search__input {
      border: none;
      width: 100%;
      background-color: ${props => props.theme.mainBackgroundColor};
    }
  }
`

const SearchInput = () => {
    return (
        <StyledSearchInput>
                <div className={'search'}>
                    <IcomoonReact iconSet={iconSet} color={'#d5d9d3'} size={20} icon="search" className={'search__icon'}/>
                    <input type={'text'} placeholder={'search category'} className={'search__input'}/>
                </div>
        </StyledSearchInput>
    )
}

export default SearchInput;