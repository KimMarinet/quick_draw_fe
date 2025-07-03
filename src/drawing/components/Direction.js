import React from "react";
import styled from "styled-components";
import color from '../../global/styles/color'
import fontsize from '../../global/styles/fontsize'

const { secondary, dark } = color;
const { big } = fontsize;

const StyledBox = styled.div`
    background: ${secondary};
    font-size: ${big};
    padding: 50px 20px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 2px 2px 5px ${dark};
    border-radius: 3px;
`;

const Direction = ({category}) => {
    console.log('category', category)
    return (
        category && <StyledBox>{category[1]}을(를) 그리세요!</StyledBox>
    );
};

export default React.memo(Direction);