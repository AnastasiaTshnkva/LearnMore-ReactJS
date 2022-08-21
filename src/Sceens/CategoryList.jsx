import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {fetchCardsData} from "../api/fakeServer/cardsApi";
import {fetchCategoryData} from "../api/fakeServer/categoryApi";

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
      margin-top: 20px;
      .category__list-item__title {
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.accentTextColor};
        }
      }
      .category__list-item__description {
        font-size: 14px;
        line-height: 16px;
      }
      
      &:last-child {
        margin-bottom: 15px;
      }
    }
 }
`

const CategoryList = () => {
    const [categoryData, setCategoryData ] = useState([]);

    useEffect( () => {
        fetchCategoryData().then(({data}) => setCategoryData(data))
    }, []);


    return (
        <StyledCategoryList>
                <ul className={'category__list'}>
                    {categoryData.map((data, index) => {
                        return (
                                <li key={index} className={'category__list-item'}>
                                    <p className={'category__list-item__title'}>{data.categoryName}</p>
                                    <p className={'category__list-item__description'}>{data.categoryDescription}</p>
                                </li>
                            )
                    })}
                </ul>
        </StyledCategoryList>
    )
}

export default CategoryList;