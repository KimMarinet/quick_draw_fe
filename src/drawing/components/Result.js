import React from "react";
import styled from "styled-components";
import { MediumButton } from '../../global/components/Buttons'

const Wrapper = styled.div`

`;

const Result = ({onClick}) => {
    return (
        <Wrapper>
            <MediumButton type="button" onClick={onClick}>
                제출
            </MediumButton>
        </Wrapper>
    );
};

export default React.memo(Result);