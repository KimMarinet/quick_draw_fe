import React from "react";
import styled from "styled-components";
import color from '../../global/styles/color'
import fontsize from '../../global/styles/fontsize'

const { info, dark } = color;
const { big } = fontsize;

const StyledBox = styled.div`
    background: ${info};
    font-size: ${big};
    padding: 10px 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 2px 2px 5px ${dark};
    border-radius: 3px;
    line-height: 1;
`;

const Direction = ({category}) => {
    console.log('category', category)
    return (
        category && <StyledBox>{category[1]}을(를) 그리세요!</StyledBox>
    );
};

export default React.memo(Direction);