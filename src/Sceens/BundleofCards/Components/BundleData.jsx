import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {REVIEW_BUNDLE_OF_CARDS} from 'constants/reviews/reviewBandleOfCards';
import ModalWindowUpdate from 'Components/ModalWindowUpdate';
import patchBundleThunk from "../../../store/thunk/bundles/patchBundleThunk";

const StyledBundleData = styled.div`
  background-color: ${props => props.theme.descriptionPartColor};
  flex-direction: column;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  .bundle__title {
    display: block;
    margin-top: 20px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    text-align: center;
  }
  .bundle__description {
    display: block;
    margin-top: 20px;
    font-size: 18px;
    line-height: 22px;
  }
  .cards-counter {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    line-height: 14px;
    .counter {
      font-weight: 600;
    }
  }
  .update-link {
    display: block;
    margin-top: 50px;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.accentTextColor};
    }
  }
  &:last-child {
    margin-bottom: 20px;
  }
`

const BundleData = (props) => {
    const dispatch = useDispatch();

    const handleCloseWindow = () => {
        props.updateModalContext(false)
    };

    const handleUpdateBundleData = (name, description) => {
        const newBundleData = {
            bundleName: name,
            bundleDescription: description,
        }
        dispatch(patchBundleThunk(newBundleData, props.bundleID));
        props.updateBundleData();
        props.updateModalContext(false)
    };


    return (
        <StyledBundleData>
            <div className={'bundle-data'}>
                <p className={'bundle__title'}>{props.bundleName}</p>
                <p className={'bundle__description'}>{props.bundleDescription}</p>
            </div>
            <p className={'cards-counter'}>{props.counterTitle}<span className={'counter'}>{props.counter}</span></p>
            <p className={'update-link'} onClick={() => {
                props.updateModalContext(
                    <ModalWindowUpdate
                        blockTitle={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_BUNDLE_TITLE}
                        name={props.bundleName}
                        inputNamePlaceholder={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_BUNDLE_NAME_INPUT}
                        description={props.bundleDescription}
                        inputDescriptionPlaceholder={REVIEW_BUNDLE_OF_CARDS.MODAL_WINDOW_UPDATE_BUNDLE_DECODING_INPUT}
                        handleUpdateFunc={handleUpdateBundleData}
                        closeWindowFunc={handleCloseWindow}
                        name={props.bundleName}
                        description={props.bundleDescription}
                    />
                )
            }
            }>{props.updateLink}</p>
        </StyledBundleData>
    )
};

BundleData.propTypes = {
    bundleID: PropTypes.string.isRequired,
    bundleName: PropTypes.string.isRequired,
    bundleDescription: PropTypes.string,
    counter: PropTypes.number.isRequired,
    updateLink: PropTypes.string,
    updateBundleData: PropTypes.func,
};

BundleData.defaultProps = {
    updateLink: 'Change the data',
}

export default BundleData;