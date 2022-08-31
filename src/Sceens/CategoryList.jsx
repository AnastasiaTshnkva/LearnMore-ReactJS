import React, {useEffect, useState} from 'react';
import {useDispatch, connect} from "react-redux";
import styled from 'styled-components';
import {fetchCategoryData} from "../api/fakeServer/Api";
import AddButton from "../Components/AddButton";
import {
    createNewCategoriesAction,
    setCategoriesRequestAction,
    getCategoriesSuccessAction,
    getCategoriesFailureAction,
} from 'store/actions/categoriesActionCreators'

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

const CategoryList = ({loading, error, categoriesDataFromState}) => {
    const dispatch = useDispatch();
    const [categoriesData, setCategoriesData] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const getCategoryDataFromServer = () => {
        fetchCategoryData()
            .then(({data}) => {
                console.log(data);
                dispatch(getCategoriesSuccessAction(data));
            }).catch((error) => {
                dispatch(getCategoriesFailureAction(error));
        })
    }

    useEffect(() => {
        dispatch(setCategoriesRequestAction());
        getCategoryDataFromServer()
    }, []);

    useEffect(() => {
        setCategoriesData(categoriesDataFromState)
    }, [categoriesDataFromState]);

    const handleAddCategory = () => {
            const newCategory = {
                "categoryID": Date.now(),
                "categoryName": categoryName,
                "categoryDescription": "Here I am trying to learn more about space"
            }
            dispatch(createNewCategoriesAction([...categoriesData, newCategory]));
    }

    const getCategoriesList = () => {
        if (loading) {return <div>Categories list loading...</div>}
        if (error) {
            console.log('error', error)
            return <div>No categories created yet</div>
        }else {
            return (
                categoriesData.map((data, index) => {
                    return (
                        <li key={index} className={'category__list-item'}>
                            <p className={'category__list-item__title'}>{data.categoryName}</p>
                            <p className={'category__list-item__description'}>{data.categoryDescription}</p>
                        </li>
                    )
                })
            )
        }

        // return (
        //     categoriesData.map((data, index) => {
        //         return (
        //             <li key={index} className={'category__list-item'}>
        //                 <p className={'category__list-item__title'}>{data.categoryName}</p>
        //                 <p className={'category__list-item__description'}>{data.categoryDescription}</p>
        //             </li>
        //         )
        //     })
        // )
    }

    return (
        <StyledCategoryList>
            <input type={'text'} value={categoryName} onChange={event => setCategoryName(event.target.value)}/>
            <AddButton onClickProps={handleAddCategory}/>
            <ul className={'category__list'}>
                {getCategoriesList()}
            </ul>
        </StyledCategoryList>
    )
}

const mapStateToProps = function (state) {
    return {
        loading: state.categories.loading,
        error: state.categories.error,
        categoriesDataFromState: state.categories.categoriesData,
    };
};

export default connect(mapStateToProps)(CategoryList);