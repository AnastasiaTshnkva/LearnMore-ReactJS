import React from "react";
import styled from 'styled-components';
import {useParams} from "react-router-dom";

const StyledStudyPage = styled.div`
    
`

const StudyPage = () => {
    const {bundleID} = useParams();


    return (
        <StyledStudyPage>
            <div className={'cards-box'}>Study Page {bundleID}</div>
            <div className={'buttons-box'}>
                <button className={'button'}>I know!</button>
                <button className={'button'}>I don't know :(</button>
            </div>
        </StyledStudyPage>
    );
};

export default StudyPage;