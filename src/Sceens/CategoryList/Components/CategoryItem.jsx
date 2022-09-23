import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import IcomoonReact from 'icomoon-react';
import iconSet from 'assets/Icons/selection.json';
import ModalWindowUpdate from "../../../Components/ModalWindowUpdate";
import patchCategoryDataThunk from "../../../store/thunk/categories/patchCategoryDataThunk";
import {REVIEW_BUNDLES_LIST} from "../../../constants/reviews/reviewBundlesList";
import {REVIEW_CATEGORY_LIST} from "../../../constants/reviews/reviewCategoryList";
import deleteCategoryThunk from "../../../store/thunk/categories/deleteCategoryThunk";
import ModalWindowConfirm from "../../../Components/ModalWindowConfirm";


const StyledCategoryItem = styled.div `
    
`

const CategoryItem = (props) => {
    const dispatch = useDispatch();

    const handleCloseWindowModal = () => {
        props.updateModalContext(false);
    };

    const handleUpdateCategoryData = (name, description) => {
        const newCategoryData = {
            categoryName: name,
        };

        dispatch(patchCategoryDataThunk(newCategoryData, props.categoryID));
        props.updateCategoriesData();
        props.updateModalContext(false);
    };

    const handleDeleteCategory = () => {
        dispatch(deleteCategoryThunk(props.categoryID));
        props.updateCategoriesData();
        props.updateModalContext(false);
    }

    return (
        <StyledCategoryItem>
            <div  className={'category__list-item'}>
                <Link to={props.link} className={'category__list-item__title'}
                      style={{ textDecoration: 'none' }}>{props.categoryName}</Link>
                <div className={'buttons-box'}>
                    <button type={'button'} className={'category__button'}
                            onClick={() => {
                                props.updateModalContext(
                                    <ModalWindowUpdate
                                        blockTitle={REVIEW_CATEGORY_LIST.MODAL_WINDOW_UPDATE_TITLE}
                                        name={props.categoryName}
                                        inputNamePlaceholder={REVIEW_CATEGORY_LIST.MODAL_WINDOW_UPDATE_INPUT_PLACEHOLDER}
                                        handleUpdateFunc={handleUpdateCategoryData}
                                        updateButtonTitle={REVIEW_CATEGORY_LIST.MODAL_WINDOW_UPDATE_BUTTON_TITLE}
                                        closeWindowFunc={handleCloseWindowModal}
                                    />
                                )
                            }}
                    >
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="pencil"/>
                    </button>
                    <button type={'button'} className={'category__button'}
                            onClick={() => {
                                props.updateModalContext (
                                    <ModalWindowConfirm
                                        title={REVIEW_CATEGORY_LIST.MODAL_WINDOW_DELETE_TITLE}
                                        acceptButtonTitle={REVIEW_CATEGORY_LIST.MODAL_WINDOW_DELETE_ACCEPT_BUTTON_TITLE}
                                        acceptFunc={handleDeleteCategory}
                                        rejectButtonTitle={REVIEW_CATEGORY_LIST.MODAL_WINDOW_DELETE_REJECT_BUTTON_TITLE}
                                        rejectFunc={handleCloseWindowModal}
                                        />
                                )
                            }}
                    >
                        <IcomoonReact iconSet={iconSet} color={'grey'} size={15} icon="close"/>
                    </button>
                </div>
            </div>
        </StyledCategoryItem>
    );
};

CategoryItem.propTypes = {
    categoryID: PropTypes.any,
    link: PropTypes.string,
    categoryName: PropTypes.string,
    updateModalContext: PropTypes.func.isRequired,
    updateCategoriesData: PropTypes.func.isRequired,

}

export default CategoryItem;