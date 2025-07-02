import React from "react";
import { Helmet } from "react-helmet-async";

const DrawPage = () => {
    return (
        <>
            <Helmet>
                <title>손 가는데로 그리기</title>
            </Helmet>
            <h1>Draw</h1>
        </>
    );
};

export default React.memo(DrawPage);