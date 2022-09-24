import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import AddButton from 'Components/AddButton';
import {
    showCategoriesDataIsLoading,
    showCategoriesDataError,
    showCategoriesDataFromStore,
} from 'store/selectors/selectors'
import getCategoriesThink from 'store/thunk/categories/getCategoriesThink';
import postNewCategoryThunk from 'store/thunk/categories/postNewCategory';
import ModalWindowCreate from 'Components/ModalWindowCreate';
import withModalContext from 'HOC/withModalContext';
import {REVIEW_CATEGORY_LIST} from 'constants/reviews/reviewCategoryList';
import CategoryItem from 'Sceens/CategoryList/Components/CategoryItem'
import {useParams} from "react-router-dom";

const StyledCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  .category__list {
    align-self: start;
    min-height: 50vh;
    }
`

const CategoryList = (props) => {
    const dispatch = useDispatch();
    const { userID } = useParams();
    const [categoriesData, setCategoriesData] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const categoryDataFromStore = useSelector(showCategoriesDataFromStore);
    const categoriesDataError = useSelector(showCategoriesDataError);
    const categoriesDataIsLoading = useSelector(showCategoriesDataIsLoading);

    useEffect(() => {
        dispatch(getCategoriesThink(userID));
    }, []);

    useEffect(() => {
        setCategoriesData(categoryDataFromStore)
    }, [categoryDataFromStore]);

    const handleAddCategory = (newCategoryName) => {
        const newCategory = {
            id: uuidv4(),
            categoryID: Date.now(),
            categoryName: newCategoryName,
            // userID: '',
        };
            dispatch(postNewCategoryThunk(categoriesData, newCategory));
            dispatch(getCategoriesThink(userID));
            setCategoryName('');
            props.updateModalContext(false);
    };

    const handleOnChangeCategoryNameInput = (event) => {
        setCategoryName(event.target.value);
    };

    const updateCategoriesData = () => {
        dispatch(getCategoriesThink(userID));
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
                        <CategoryItem
                            key={data.id}
                            link={`${data.categoryID}`}
                            categoryName={data.categoryName}
                            categoryID={data.id}
                            updateModalContext={props.updateModalContext}
                            updateCategoriesData={updateCategoriesData}
                        />

                    )
                })
            )
        }
        return <div>No categories created yet</div>
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
            <div className={'category__list'}>
                {getCategoriesList()}
            </div>
        </StyledCategoryList>
    )
}

export default withModalContext(CategoryList);