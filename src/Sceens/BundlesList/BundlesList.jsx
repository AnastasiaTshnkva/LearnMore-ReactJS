import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';
import AddButton from 'Components/AddButton';
import { showBundlesFromStore } from 'store/selectors/selectors';
import getBundlesThunk from 'store/thunk/bundles/getBundlesThunk';
import withModalContext from 'HOC/withModalContext';
import { REVIEW_BUNDLES_LIST } from 'constants/reviews/reviewBundlesList';
import ModalWindowCreate from 'Components/ModalWindowCreate';
import postNewBundleThunk from 'store/thunk/bundles/postNewBundleThunk';
import Bundle from "./Components/Bundle";


const StyledBundlesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .bundle{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 20px;
    margin-top: 20px;
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

    const handleAddBundle = (newBundleName, newBundleDescription) => {
        const newBundle = {
            id: uuidv4(),
            bundleID: Date.now(),
            bundleName: newBundleName,
            bundleDescription: newBundleDescription,
            categoryID: categoryID,
            // userID: ,
        }
        dispatch(postNewBundleThunk(bundlesData, newBundle));
        dispatch(getBundlesThunk(categoryID));
        setBundleName('');
        setBundleDescription('');
        props.updateModalContext(false);
    };

    const handleOnChangeBundleNameInput = (event) => {
        return setBundleName(event.target.value);
    };

    const handleOnChangeBundleDescriptionInput = (event) => {
        return setBundleDescription(event.target.value);
    };

    const handleBundlesDataUpdate = () => {
        dispatch(getBundlesThunk(categoryID));
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
                        <Bundle key={data.id}
                            updateModalContext={props.updateModalContext}
                            bundleID={data.id}
                            bundleName={data.bundleName}
                            updateBundlesData={handleBundlesDataUpdate}
                        />
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
                                   inputNamePlaceholder={REVIEW_BUNDLES_LIST.MODAL_WINDOW_NAME_INPUT_PLACEHOLDER}
                                   addButtonTitle={REVIEW_BUNDLES_LIST.MODAL_WINDOW_BUTTON_TITLE}
                                   handleAddFunc={handleAddBundle}
                                   updateModalContext={props.updateModalContext}
                                   inputDescriptionPlaceholder={REVIEW_BUNDLES_LIST.MODAL_WINDOW_DESCRIPTION_INPUT_PLACEHOLDER}
                               />)
                       }}/>
            <div className={'bundle'}>
                {getBundlesList()}
            </div>
        </StyledBundlesList>
    );
}

export default withModalContext(BundlesList);
