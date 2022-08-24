import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {fetchCategoryData} from "../api/fakeServer/categoryApi";
import AddButton from "../Components/AddButton";

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
    const [categoryData, setCategoryData] = useState([
        {"categoryID": "1", "categoryName": "English", "categoryDescription": "Here I am trying to learn more English words" },
        {"categoryID": "2", "categoryName": "Space", "categoryDescription": "Here I am trying to learn more about space" }
    ]);

    // useEffect( () => {
    //     fetchCategoryData().then(({data}) => setCategoryData(data))
    // }, []);

    const [categoryName, setCategoryName] = useState('');

    const addCard = event => {
        if(event.key === 'Enter') {
            setCategoryData([...categoryData, {
                "categoryID": Date.now(),
                "categoryName": categoryName,
                "categoryDescription": "Here I am trying to learn more about space"}
            ])
        }
    }

    return (
        <StyledCategoryList>
            <input type={'text'} value={categoryName} onChange={event => event.target.value} onKeyPress={addCard}/>
            <AddButton>+New</AddButton>
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