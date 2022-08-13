import React from 'react';
import styled from 'styled-components';

const StyledCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  .category__list {
    align-self: start;
    min-height: 50vh;
    .category__list-item {
      display: block;
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
                <ul className={'category__list'}>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                    <li className={'category__list-item'}>fghjkl</li>
                </ul>
        </StyledCategoryList>


    )

}

export default CategoryList;