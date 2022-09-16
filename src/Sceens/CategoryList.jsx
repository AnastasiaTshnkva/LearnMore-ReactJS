import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddButton from 'Components/AddButton';
import {
    showCategoriesDataIsLoading,
    showCategoriesDataError,
    showCategoriesDataFromStore,
} from 'store/selectors/selectors'
import  { MyContext } from 'HOC/GlobalModalProvider';
import WithModalContext from 'HOC/withModalContext';
import ModalWindowCreate from 'Components/ModalWindowCreate';
import FormikInput from 'Components/FormikFilds/FormikInput';
import { REVIEW_CATEGORY_LIST } from 'constants/reviews/reviewCategoryList';
import getCategoriesThink from 'store/thunk/categories/getCategoriesThink';
import { fetchAddCategoryToServer } from 'api/fakeServer/Api';
import postNewCategoryThunk from 'store/thunk/categories/postNewCategory';

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
      .category__list-item__title{
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.accentTextColor};
        }
      }
      .category__list-item__description {
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
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
    const categoryDataFromStore = useSelector(showCategoriesDataFromStore);
    const categoriesDataError = useSelector(showCategoriesDataError);
    const categoriesDataIsLoading = useSelector(showCategoriesDataIsLoading);

    useEffect(() => {
        dispatch(getCategoriesThink());
    }, []);

    useEffect(() => {
        setCategoriesData(categoryDataFromStore)
    }, [categoryDataFromStore]);

    const handleAddCategory = () => {
        const headers = {
            'Content-Type': 'application/json',
        }
            const newCategory = {
                id: uuidv4(),
                categoryID: Date.now(),
                categoryName: categoryName,
                categoryDescription: categoryDescription,
                userID: '',
            }
        fetchAddCategoryToServer(newCategory, headers)
            .then(({data}) => {
                postNewCategoryThunk();
            })
            .catch(error => {
                console.error(error);
            });
        //     dispatch(postNewCategoryThunk(newCategory, headers));
            dispatch(getCategoriesThink());
            setCategoryName('');
            setCategoryDescription('');
    };

    const handleOnChangeCategoryNameInput = (event) => {
        setCategoryName(event.target.value);
    };

    const handleOnChangeCategoryDescriptionInput = (event) => {
        setCategoryDescription(event.target.value);
    };

    const getCategoriesList = () => {
        if (categoriesDataIsLoading) {return <div>Categories list loading...</div>}
        if (categoriesDataError) {
            console.error(categoriesDataError);
            return <div>Ops! Something went wrong</div>
        }
        if (!!categoriesData.length) {
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
        return <div>No categories created yet</div>
    }

    return (
        <StyledCategoryList>
            {/*<button type={'button'} onClick={handlePut}>hjk</button>*/}
            {/*<MyContext.Consumer>*/}
            {/*    {value => (*/}
            {/*        <button type={'button'} onClick={() => {*/}
            {/*            value (*/}
            {/*                <Formik>*/}
            {/*                    <Form>*/}
            {/*                        <input type={'text'} value={categoryName} name={'addCategoryNameInput'} onChange={handleOnChangeCategoryNameInput}/>*/}
            {/*                        <FormikInput type={'text'} value={categoryName} name={'addCategoryNameInput'}*/}
            {/*                                     onChangeProps={(event) => setCategoryName(event.target.value)} placeholder={'input new category name'}/>*/}
            {/*                        <FormikInput type={'text'} value={categoryDescription} name={'addCategoryDescriptionInput'}*/}
            {/*                                     onChangeProps={handleOnChangeCategoryDescriptionInput} placeholder={'input new category description'}/>*/}
            {/*                        <AddButton type={'button'} title={'close'} onClickProps={() => {*/}
            {/*                            handleAddCategory();*/}
            {/*                            value(false);*/}
            {/*                        }}> </AddButton>*/}
            {/*                    </Form>*/}
            {/*                </Formik>*/}

            {/*                // <ModalWindowCreate onClickNameInputProps={handleOnChangeCategoryNameInput}*/}
            {/*                //                    onClickDecodingInputProps={handleOnChangeCategoryDescriptionInput}*/}
            {/*                //                    onClickAddFunc={handleAddCategory}/>*/}
            {/*            )*/}
            {/*        }}>*/}
            {/*            add*/}
            {/*        </button>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</MyContext.Consumer>*/}
            {/*<input value={firstName}  name="firstName" onChange={e => setFirstName(e.target.value)} />*/}

            <Formik className={'add-category-block'}>
                <Form className={'add-category-block'}>
                    <FormikInput type={'text'} value={categoryName} name={'addCategoryNameInput'}
                    onChangeProps={handleOnChangeCategoryNameInput} placeholder={'input new category name'}/>
                    <FormikInput type={'text'} value={categoryDescription} name={'addCategoryDescriptionInput'}
                    onChangeProps={handleOnChangeCategoryDescriptionInput} placeholder={'input new category description'}/>
                    <AddButton type={'button'} onClickProps={handleAddCategory} title={REVIEW_CATEGORY_LIST.ADD_NEW_CATEGORY_BUTTON}/>
                </Form>
            </Formik>
            <ul className={'category__list'}>
                {getCategoriesList()}
            </ul>
        </StyledCategoryList>
    )
}

export default CategoryList;