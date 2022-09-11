import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import {Link, useParams} from 'react-router-dom';
import {
    fetchBundleData,
    fetchBundleOfCardsData,
    fetchCategoryData,
} from 'api/fakeServer/Api';
import AddButton from 'Components/AddButton';
import {
    createNewCategoriesAction,
    setCategoriesRequestAction,
    getCategoriesSuccessAction,
    getCategoriesFailureAction,
} from 'store/actions/categoriesActionCreators'
import FormikInput from 'Components/FormikFilds/FormikInput';
import { REVIEW_CATEGORY_LIST } from 'constants/reviews/reviewCategoryList';
import {
    showCategoriesDataIsLoading,
    showCategoriesDataError,
    showCategoriesDataFromStore,
} from 'store/selectors/selectors'
import  {MyContext} from 'HOC/GlobalModalProvider';
import ModalWindowCreate from 'Components/ModalWindowCreate';

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
    // const [modalWindow, setModalWindow] = useState(true);

    const getCategoryDataFromServer = () => {
        fetchCategoryData()
            .then(({data}) => {
                dispatch(getCategoriesSuccessAction(data));
            }).catch((error) => {
                dispatch(getCategoriesFailureAction(error));
        });
    };

    useEffect(() => {
        dispatch(setCategoriesRequestAction());
        getCategoryDataFromServer()
    }, []);

    useEffect(() => {
        setCategoriesData(categoryDataFromStore)
    }, [categoryDataFromStore]);

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
            <MyContext.Consumer>
                {value => (
                    <button type={'button'} onClick={() => {
                        value (
                            <ModalWindowCreate/>
                            // <div className={'add-new-category'}>
                            //     <div className={'add-category__title'}>{REVIEW_CATEGORY_LIST.MODAL_WINDOW_TITLE}</div>
                            //     <Formik className={'add-category-form'}>
                            //         <Form className={'add-category-block'}>
                            //             <FormikInput type={'text'} value={categoryName} name={'addCategoryNameInput'}
                            //                          onChangeProps={handleOnChangeCategoryNameInput} placeholder={'input new category name'}/>
                            //             <FormikInput type={'text'} value={categoryDescription} name={'addCategoryDescriptionInput'}
                            //                          onChangeProps={handleOnChangeCategoryDescriptionInput} placeholder={'input new category description'}/>
                            //             <AddButton type={'button'} onClickProps={handleAddCategory} title={REVIEW_CATEGORY_LIST.ADD_NEW_CATEGORY_BUTTON}/>
                            //         </Form>
                            //     </Formik>
                            // </div>

                        )
                    }}>
                        add
                    </button>
                    )
                }
            </MyContext.Consumer>

            {/*<Formik className={'add-category-block'}>*/}
            {/*    <Form className={'add-category-block'}>*/}
            {/*        <FormikInput type={'text'} value={categoryName} name={'addCategoryNameInput'}*/}
            {/*        onChangeProps={handleOnChangeCategoryNameInput} placeholder={'input new category name'}/>*/}
            {/*        <FormikInput type={'text'} value={categoryDescription} name={'addCategoryDescriptionInput'}*/}
            {/*        onChangeProps={handleOnChangeCategoryDescriptionInput} placeholder={'input new category description'}/>*/}
            {/*        <AddButton type={'button'} onClickProps={handleAddCategory} title={REVIEW_CATEGORY_LIST.ADD_NEW_CATEGORY_BUTTON}/>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}
            <ul className={'category__list'}>
                {getCategoriesList()}
            </ul>
        </StyledCategoryList>
    )
}

export default CategoryList;