import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { fetchBundlesDate } from "../api/fakeServer/Api";
import {
    getBundlesFailureAction,
    getBundlesSuccessAction,
    setBundlesRequestAction
} from "store/actions/bunldlesActionCreators";
import { Form, Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import FormikInput from "../Components/FormikFilds/FormikInput";
import AddButton from "../Components/AddButton";
import { createNewCategoriesAction } from "store/actions/categoriesActionCreators";
import { bundlesFromStore } from "store/selectors/selectors";

const StyledBundlesList = styled.div`
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
      }
    }
  }
`

const BundlesList = () => {
    const dispatch = useDispatch();
    const { param } = useParams();
    const [bundlesData, setBundlesData] = useState([]);
    const [bundleName, setBundleName] = useState();
    const [bundleDescription, setBundleDescription] = useState();

    const bundlesDataFromStore = useSelector(bundlesFromStore);


    const getBundlesDataFromServer = () => {
        fetchBundlesDate(param)
            .then(({data}) => {
                dispatch(getBundlesSuccessAction(data));
            }).catch((error) => {
            dispatch(getBundlesFailureAction(error));
        });
    };

    useEffect(() => {
        dispatch(setBundlesRequestAction());
        getBundlesDataFromServer();
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
        dispatch(createNewCategoriesAction([...bundlesData, newBundle]));
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
                    console.log(`/bundle/${data.bundleID}`);
                    return(
                        <div key={data.bundleID} className={'bundle-box'}>
                            <Link to={`/bundle/${data.bundleID}`} className={'description'}>{data.bundleName}</Link>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <StyledBundlesList>
            <Formik className={'add-category-block'}>
                <Form className={'add-category-block'}>
                    <FormikInput type={'text'} value={bundleName} name={'addBundleNameInput'}
                    onChangeProps={handleOnChangeBundleNameInput} placeholder={'input new bundle name'}/>
                    <FormikInput type={'text'} value={bundleDescription} name={'addBundleDescriptionInput'}
                    onChangeProps={handleOnChangeBundleDescriptionInput} placeholder={'input new bundle description'}/>
                    <AddButton type={'button'} onClickProps={handleAddBundle} title={'Add new category'}/>
                </Form>
            </Formik>
            <div className={'bundle'}>
                {getBundlesList()}
            </div>
        </StyledBundlesList>
    );
}

export default BundlesList;
