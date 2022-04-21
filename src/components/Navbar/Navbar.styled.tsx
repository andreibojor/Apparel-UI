import React from "react";
import styled, { StyledProps } from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #fff;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 5px;
  /* height: 124px; */
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  z-index: 1;
`;

export const TopRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.75rem;
`;

export const Navigation = styled.div`
  display: flex;
  padding: 0 1.75rem;
`;

export const NavGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  padding: 0;
  margin: 0;
`;

type DropdownWrapperProps = {
  iconDropdown?: boolean;
  navDropdown?: boolean;
};

export const DropdownWrapper = styled.div<DropdownWrapperProps>`
  position: absolute;
  /* top: 55px; */
  ${({ iconDropdown }) => iconDropdown && `right: -5px; top: 45px;`};
  ${({ navDropdown }) => navDropdown && `left: -5px; top: 55px;`};
  width: 200px;
  box-shadow: 0 5px 25px rgb(34 41 47 / 10%);
  overflow: hidden;
  height: 200px;
  z-index: 1000;
  background-color: #fff;
  border-radius: 6px;
  /* display: ${(props) => (props.active ? "block" : "none")}; */
  display: none;
  /* &:before {
    background: pink;
    content: "";
    position: absolute;
    top: -21px;
    left: 0;
    width: 100%;
    z-index: 1999;
    height: 25px;
  } */
`;

type NavItemProps = {
  topRowBtn?: boolean;
  topRowIcon?: boolean;
};

export const NavItem = styled.li<NavItemProps>`
  height: 100%;
  cursor: pointer;
  padding: 1rem;
  font-weight: 600;
  color: ${({ topRowBtn }) => (topRowBtn ? "#ccc" : "#181818")};
  position: relative;

  &:active,
  &:hover {
    color: ${({ topRowBtn }) => (topRowBtn ? "#181818" : "#ccc")};
    color: ${({ topRowIcon }) => topRowIcon && "#181818"};
    background-color: ${({ topRowIcon }) =>
      topRowIcon ? "#f4f4f5" : "inherit"};
  }

  &:hover {
    ${DropdownWrapper} {
      display: block;
    }
  }

  &:after {
    background: transparent;
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 999;
    height: 7px;
    bottom: -5px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 46px;
  width: 165px;
`;

export const Icon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 18px;
  }
`;
