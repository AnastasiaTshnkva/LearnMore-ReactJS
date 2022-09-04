import React from "react";
import styled from 'styled-components';
import {useParams} from "react-router-dom";

const StyledStudyPage = styled.div`
    
`

const StudyPage = () => {
    const {bundleID} = useParams();
    return (
        <StyledStudyPage>
            <div>Study Page {bundleID}</div>
        </StyledStudyPage>
    );
};

export default StudyPage;