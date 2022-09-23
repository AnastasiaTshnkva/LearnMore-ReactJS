import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link, useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import iconSet from 'assets/Icons/selection.json';
import ModalWindowConfirm from 'Components/ModalWindowConfirm';
import {REVIEW_BUNDLE_OF_CARDS} from 'constants/reviews/reviewBandleOfCards';
import IcomoonReact from 'icomoon-react';
import deleteBundleThunk from"../../../store/thunk/bundles/deleteBundleThunk";

const StyledBundle = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
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
   .close__but {
     background-color: transparent;
     border: none;
     top: 5px;
     right: 5px;
     position: absolute;
   }
    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      line-height: 26px;
      height: 100%;
      color: ${props => props.theme.textColor};
    }
`

const Bundle = (props) => {
    const { categoryID } = useParams();
    const dispatch = useDispatch();

    const handleCloseModalWindow = () => {
        props.updateModalContext(false);
    };

    const handleDeleteBundle = () => {
        dispatch(deleteBundleThunk(props.bundleID));
        props.updateBundlesData();
        props.updateModalContext(false);
    };

    return (
        <StyledBundle>
                <button type={'button'} className={'close__but'}
                        onClick={() => {
                            return props.updateModalContext(
                                <ModalWindowConfirm
                                    title={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_CONFIRM_TITLE}
                                    acceptButtonTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_CONFIRM_ACCEPT_BUTTON_TITLE}
                                    acceptFunc={handleDeleteBundle}
                                    rejectButtonTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_CONFIRM_REJECT_BUTTON_TITLE}
                                    rejectFunc={handleCloseModalWindow}
                                />
                            )
                        }
                        }>
                    <IcomoonReact iconSet={iconSet} color={'grey'} size={25} icon="close"/>
                </button>
                <Link to={`/categoryList/${categoryID}/bundle/${props.bundleID}`}
                      style={{ textDecoration: 'none' }}
                      className={'description'}>
                    {props.bundleName}</Link>
        </StyledBundle>
    )
};

Bundle.propTypes = {
    // bundleID: PropTypes.string,
    bundleName: PropTypes.string,
    updateModalContext: PropTypes.func.isRequired,
    updateBundlesData: PropTypes.func.isRequired,
}

export default Bundle;