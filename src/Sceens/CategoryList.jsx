import React from 'react';
import styled from 'styled-components';
import SearchInput from "Components/SearchhInput";
import Button from "Components/Button";

const StyledCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  .button  {
    align-self: end;
  }
  .category__list {
    align-self: start;
    min-height: 50vh;
    .category__list-item {
      text-decoration: underline;
      cursor: pointer;
      margin-top: 15px;
      &:hover {
        color: ${props => props.theme.accentTextColor};
       }
      &:last-child {
        margin-bottom: 15px;
      }
    }
 }
`

const CategoryList = () => {
    return (
        <StyledCategoryList>
                <Button className={'button'} name={'+New category'}/>
                <SearchInput className={'category__search'}/>
                <ul className={'category__list'}>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                </ul>
        </StyledCategoryList>


    )

}

export default CategoryList;