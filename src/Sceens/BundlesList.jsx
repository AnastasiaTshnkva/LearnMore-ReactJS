import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import AddButton from 'Components/AddButton';
import { createNewCategorySuccessfulAction } from 'store/actions/categoriesActionCreators';
import { showBundlesFromStore } from 'store/selectors/selectors';
import getBundlesThunk from 'store/thunk/bundles/getBundlesThunk';
import withModalContext from 'HOC/withModalContext';
import { REVIEW_BUNDLES_LIST } from 'constants/reviews/reviewBundlesList';
import ModalWindowCreate from 'Components/ModalWindowCreate';


const StyledBundlesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .bundle{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 20px;
    .bundle-box {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 130px;
      min-width: 170px;
      background-color: ${props => props.theme.cardColor};
      margin: 10px;
      border: 3px solid ${props => props.theme.cardBorderColor};
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        &:hover {
          box-shadow: 0 0 5px ${props => props.theme.buttonHoverShadow};
        }
      }
      .description {
        display: block;
        text-align: center;
        font-size: 22px;
        line-height: 26px;
        color: ${props => props.theme.textColor};
      }
    }
  }
`

const BundlesList = (props) => {
    const dispatch = useDispatch();
    const { categoryID } = useParams();
    const [bundlesData, setBundlesData] = useState([]);
    const [bundleName, setBundleName] = useState();
    const [bundleDescription, setBundleDescription] = useState();
    const bundlesDataFromStore = useSelector(showBundlesFromStore);

    useEffect(() => {
        dispatch(getBundlesThunk(categoryID));
    }, []);

    useEffect(() => {
        setBundlesData(bundlesDataFromStore.bundlesData);
    }, [bundlesDataFromStore.bundlesData]);

    const handleAddBundle = () => {
        const newBundle = {
            "bundleID": Date.now(),
            "bundleName": setBundleName,
            "bundleDescription": setBundleDescription,
        }
        dispatch(createNewCategorySuccessfulAction([...bundlesData, newBundle]));
        setBundleName('');
        setBundleDescription('');
    };

    const handleOnChangeBundleNameInput = (event) => {
        return setBundleName(event.target.value);
    };

    const handleOnChangeBundleDescriptionInput = (event) => {
        return setBundleDescription(event.target.value);
    };

    const getBundlesList = () => {
        if(bundlesDataFromStore.loading) {return <div>Bundles list loading...</div>}
        if(bundlesDataFromStore.error)  {
            console.log('error', error);
            return <div>No bundles created yet</div>
        }
        if(bundlesDataFromStore.bundlesData) {
            return(
                bundlesData.map((data) => {
                    return(
                        <div key={data.bundleID} className={'bundle-box'}>
                            <Link to={`/categoryList/${categoryID}/bundle/${data.bundleID}`}
                                  style={{ textDecoration: 'none' }}
                                  className={'description'}>{data.bundleName}</Link>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <StyledBundlesList>
            <AddButton type={'button'} title={REVIEW_BUNDLES_LIST.ADD_BUTTON_TITLE}
                       onClickProps={() => {
                           props.updateModalContext(
                               <ModalWindowCreate
                                   blockTitle={REVIEW_BUNDLES_LIST.MODAL_WINDOW_TITLE}
                                   inputNamePlaceholder={REVIEW_BUNDLES_LIST.MODAL_WINDOW_INPUT_PLACEHOLDER}
                                   addButtonTitle={REVIEW_BUNDLES_LIST.ADD_NEW_CATEGORY_BUTTON}
                                   handleAddFunc={handleAddCategory}
                                   updateModalContext={props.updateModalContext}
                                   handleOnChangeCategoryNameInput={handleOnChangeCategoryNameInput}
                               />)
                       }}/>
            {/*<Formik className={'add-category-block'}>*/}
            {/*    <Form className={'add-category-block'}>*/}
            {/*        <FormikInput type={'text'} value={bundleName} name={'addBundleNameInput'}*/}
            {/*        onChangeProps={handleOnChangeBundleNameInput} placeholder={'input new bundle name'}/>*/}
            {/*        <FormikInput type={'text'} value={bundleDescription} name={'addBundleDescriptionInput'}*/}
            {/*        onChangeProps={handleOnChangeBundleDescriptionInput} placeholder={'input new bundle description'}/>*/}
            {/*        <AddButton type={'button'} onClickProps={handleAddBundle} title={'Add new category'}/>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}
            <div className={'bundle'}>
                {getBundlesList()}
            </div>
        </StyledBundlesList>
    );
}

export default withModalContext(BundlesList);
