import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import DrawContainer from "../containers/DrawContainer"

const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

const DrawPage = () => {
    return (
        <>
            <Helmet>
                <title>손 가는데로 그리기</title>
            </Helmet>
            <Wrapper>
                <DrawContainer />
            </Wrapper>
        </>
    );
};

export default React.memo(DrawPage);