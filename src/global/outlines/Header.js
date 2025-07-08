import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { MdHome, MdDraw } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
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
    justify-content: space-between;

    .left, .right{
        display: flex;
        flex-grow: 1;
    }

    .right {
         justify-content: right;
    }

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
    <StyledHeader className="layout-width">
      <div className="left">
        <NavLink to="/">
          <MdHome />
          <span>메인으로</span>
        </NavLink>
        <NavLink
          to="/draw"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          <MdDraw />
          <span>상상 펼치기</span>
        </NavLink>
      </div>
      <div className="right">
        <NavLink to="/member/login">
          <CgProfile />
          <span>로그인</span>
        </NavLink>
      </div>
    </StyledHeader>
    );
};

export default React.memo(Header);