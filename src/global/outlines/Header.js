import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { MdHome, MdDraw } from "react-icons/md";
import color from "../styles/color"
import fontsize from '../styles/fontsize'

const { primary, light, dark } = color;
const { big, extraBig } = fontsize;

const StyledHeader = styled.header`
    height: 90px;
    display: flex;
    background: ${primary};
    color: ${light};
    align-items: center;
    padding: 0 20px;

    a {
        font-size: ${big};
        color: ${light};
        display: flex;
        align-items: center;
        
        &.on{
            text-shadow: 2px 2px 5px ${dark};
        }

        svg{
            font-size: ${extraBig};
        }
    }

    a + a {
        margin-left: 25px;
    }
`;

const Header = () => {
    return (
        <StyledHeader className="layout_width">
            <NavLink to='/'><MdHome />메인으로</NavLink>
            <NavLink to='draw' className={({isActive}) => classNames({on: isActive})}><MdDraw />상상 펼치기</NavLink>
        </StyledHeader>
    );
};

export default React.memo(Header);