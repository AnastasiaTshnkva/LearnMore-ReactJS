import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import {Formik, Form} from "formik";
import { Link } from "react-router-dom";
import {fetchCategoryData} from "../api/fakeServer/Api";
import AddButton from "../Components/AddButton";
import {
    createNewCategoriesAction,
    setCategoriesRequestAction,
    getCategoriesSuccessAction,
    getCategoriesFailureAction,
} from 'store/actions/categoriesActionCreators'
import FormikInput from "../Components/FormikFilds/FormikInput";

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
    const dispatch = useDispatch();
    const [categoriesData, setCategoriesData] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const categoryDataFromStore = useSelector(state => state.categories);
        // return {
        //     loading: state.categories.loading,
        //     error: state.categories.error,
        //     categoriesDataFromState: state.categories.categoriesData,
        // };

    const getCategoryDataFromServer = () => {
        fetchCategoryData()
            .then(({data}) => {
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
        setCategoriesData(categoryDataFromStore.categoriesData)
    }, [categoryDataFromStore.categoriesData]);

    const handleAddCategory = () => {
            const newCategory = {
                "categoryID": Date.now(),
                "categoryName": categoryName,
                "categoryDescription": categoryDescription,
            }
            dispatch(createNewCategoriesAction([...categoriesData, newCategory]));
            setCategoryName('');
            setCategoryDescription('');
    };

    const handleOnChangeCategoryNameInput = (event) => {
        return setCategoryName(event.target.value);
    };

    const handleOnChangeCategoryDescriptionInput = (event) => {
        return setCategoryDescription(event.target.value);
    };


    const getCategoriesList = () => {
        if (categoryDataFromStore.loading) {return <div>Categories list loading...</div>}
        if (categoryDataFromStore.error) {
            console.log('error', categoryDataFromStore.error)
            return <div>No categories created yet</div>
        }else {
            return (
                categoriesData.map((data) => {
                    return (
                        <li key={data.categoryID} className={'category__list-item'}>
                            <Link to={`${data.categoryID}`} className={'category__list-item__title'}>{data.categoryName}</Link>
                            <p className={'category__list-item__description'}>{data.categoryDescription}</p>
                        </li>
                    )
                })
            )
        }
    }

    return (
        <StyledCategoryList>
            <Formik className={'add-category-block'}>
                <Form className={'add-category-block'}>
                    <FormikInput type={'text'} value={categoryName} name={'addCategoryNameInput'}
                    onChangeProps={handleOnChangeCategoryNameInput} placeholder={'input new category name'}/>
                    <FormikInput type={'text'} value={categoryDescription} name={'addCategoryDescriptionInput'}
                    onChangeProps={handleOnChangeCategoryDescriptionInput} placeholder={'input new category description'}/>
                    <AddButton type={'button'} onClickProps={handleAddCategory} title={'Add new category'}/>
                </Form>
            </Formik>
            <ul className={'category__list'}>
                {getCategoriesList()}
            </ul>
        </StyledCategoryList>
    )
}

export default CategoryList;