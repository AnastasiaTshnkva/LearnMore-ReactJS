import React, {useState} from 'react';
import styled from 'styled-components';
import {Form, Formik} from 'formik';
import {REVIEW_CATEGORY_LIST} from 'constants/reviews/reviewCategoryList';
import FormikInput from 'Components/FormikFilds/FormikInput';
import AddButton from 'Components/AddButton';

const StyledModalWindowCreate = styled.div`
  padding: 20px;
  .title {
    text-align: center;
    font-size: 24px;
    line-height: 26px;
    font-weight: 500;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`

const ModalWindowCreate = (props) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    // const handleAddCategory = () => {
    //     const newCategory = {
    //         "categoryID": Date.now(),
    //         "categoryName": categoryName,
    //         "categoryDescription": categoryDescription,
    //     }
    //     // dispatch(createNewCategoriesAction([...categoriesData, newCategory]));
    //     setCategoryName('');
    //     setCategoryDescription('');
    // };
    //
    // const handleOnChangeCategoryNameInput = (event) => {
    //     return setCategoryName(event.target.value);
    // };
    //
    // const handleOnChangeCategoryDescriptionInput = (event) => {
    //     return setCategoryDescription(event.target.value);
    // };

    return (
        <StyledModalWindowCreate>
            <div className={'title'}>{REVIEW_CATEGORY_LIST.MODAL_WINDOW_TITLE}</div>
            <Formik className={'form'}>
                <Form className={'form'}>
                    <FormikInput type={'text'} value={categoryName} name={'addCategoryNameInput'}
                                 onChangeProps={props.onClickNameInputProps} placeholder={'input new category name'}/>
                    <FormikInput type={'text'} value={categoryDescription} name={'addCategoryDescriptionInput'}
                                 onChangeProps={props.onClickDecodingInputProps} placeholder={'input new category description'}/>
                    <AddButton type={'button'} onClickProps={props.onClickAddFunc} title={REVIEW_CATEGORY_LIST.ADD_NEW_CATEGORY_BUTTON}/>
                </Form>
            </Formik>
        </StyledModalWindowCreate>
    )
};

export default ModalWindowCreate;