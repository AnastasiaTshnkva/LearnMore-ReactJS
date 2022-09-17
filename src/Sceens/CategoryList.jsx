import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import IcomoonReact from 'icomoon-react';
import AddButton from 'Components/AddButton';
import {
    showCategoriesDataIsLoading,
    showCategoriesDataError,
    showCategoriesDataFromStore,
} from 'store/selectors/selectors'
import { REVIEW_CATEGORY_LIST } from 'constants/reviews/reviewCategoryList';
import getCategoriesThink from 'store/thunk/categories/getCategoriesThink';
import postNewCategoryThunk from 'store/thunk/categories/postNewCategory';
import ModalWindowCreate from '../Components/ModalWindowCreate';
import withModalContext from 'HOC/withModalContext';
import iconSet from 'assets/Icons/selection.json';

const StyledCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  .category__list {
    align-self: start;
    min-height: 50vh;
    .category__list-item {
      display: flex;
      margin-top: 20px;
      border-bottom: 1px ${props => props.theme.cardBorderColor} solid;
      &:hover {
        border-bottom: 1px ${props => props.theme.accentTextColor} solid;
        .category__list-item__title {
          color: ${props => props.theme.accentTextColor};
        }
      }
      .category__list-item__title{
        display: block;
        min-width: 70px;
        margin-right: 20px;
        color: ${props => props.theme.textColor};
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.accentTextColor};
        }
      }
      &:last-child {
        margin-bottom: 15px;
      }
      .buttons-box {
        .category__button {
          background-color: transparent;
          border: none;
        }
      }
    }
 }
`

const CategoryList = (props) => {
    const dispatch = useDispatch();
    const [categoriesData, setCategoriesData] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const categoryDataFromStore = useSelector(showCategoriesDataFromStore);
    const categoriesDataError = useSelector(showCategoriesDataError);
    const categoriesDataIsLoading = useSelector(showCategoriesDataIsLoading);

    useEffect(() => {
        dispatch(getCategoriesThink());
    }, []);

    useEffect(() => {
        setCategoriesData(categoryDataFromStore)
    }, [categoryDataFromStore]);

    const handleAddCategory = (newCategoryName) => {
        const headers = {
            'Content-Type': 'application/json',
        };
        const newCategory = {
            id: uuidv4(),
            categoryID: Date.now(),
            categoryName: newCategoryName,
            // userID: '',
        };
            dispatch(postNewCategoryThunk(categoriesData, newCategory, headers));
            dispatch(getCategoriesThink());
            setCategoryName('');
            props.updateModalContext(false);
    };

    const handleOnChangeCategoryNameInput = (event) => {
        setCategoryName(event.target.value);
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
                            <Link to={`${data.categoryID}`} className={'category__list-item__title'}
                                  style={{ textDecoration: 'none' }}>{data.categoryName}</Link>
                            <div className={'buttons-box'}>
                                <button type={'button'} className={'category__button'}>
                                    <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="pencil"/>
                                </button>
                                <button type={'button'} className={'category__button'}>
                                    <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="close"/>
                                </button>
                            </div>
                        </li>
                    )
                })
            )
        }
        return <div>No categories created yet</div>
    }

    const addCategory = (newCategory) => {
        setCategoriesData([...categoriesData, newCategory], () => {
            props.updateModalContext(false);
        });
    }

    return (
        <StyledCategoryList>
             <AddButton type={'button'} title={REVIEW_CATEGORY_LIST.ADD_NEW_CATEGORY_BUTTON}
             onClickProps={() => {
                 props.updateModalContext(
                        <ModalWindowCreate
                            blockTitle={REVIEW_CATEGORY_LIST.MODAL_WINDOW_TITLE}
                            inputNamePlaceholder={REVIEW_CATEGORY_LIST.MODAL_WINDOW_INPUT_PLACEHOLDER}
                            addButtonTitle={REVIEW_CATEGORY_LIST.ADD_NEW_CATEGORY_BUTTON}
                            handleAddFunc={handleAddCategory}
                            updateModalContext={props.updateModalContext}
                            handleOnChangeCategoryNameInput={handleOnChangeCategoryNameInput}
                        />)
            }}/>
            <ul className={'category__list'}>
                {getCategoriesList()}
            </ul>
        </StyledCategoryList>
    )
}

export default withModalContext(CategoryList);