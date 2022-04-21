import React, { FC, useContext, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineSearch,
} from "react-icons/ai";

import {
  DropdownWrapper,
  Logo,
  NavbarContainer,
  NavGroup,
  Navigation,
  NavItem,
  TopRowContainer,
} from "./Navbar.styled";
import { MwContext } from "../../contexts/MwContext";

// interface Props {
//   // topRowBtn: boolean;
// }

const Navbar: FC = (props) => {
  const { setGenderCategory } = useContext(MwContext);
  // const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <>
      <NavbarContainer>
        <TopRowContainer>
          <NavGroup>
            <NavItem topRowBtn onClick={() => setGenderCategory("men")}>
              Men
            </NavItem>
            <NavItem topRowBtn onClick={() => setGenderCategory("women")}>
              Women
            </NavItem>
          </NavGroup>
          <Logo src="./images/logo.png" alt="APPAREL UI" />
          <NavGroup>
            <NavItem topRowIcon>
              <AiOutlineSearch size={22} />
              {/* <DropdownWrapper iconDropdown></DropdownWrapper> */}
            </NavItem>
            <NavItem topRowIcon>
              <AiOutlineUser size={22} />
              <DropdownWrapper iconDropdown></DropdownWrapper>
            </NavItem>
            <NavItem topRowIcon>
              <AiOutlineHeart size={22} />
              <DropdownWrapper iconDropdown></DropdownWrapper>
            </NavItem>
            <NavItem topRowIcon>
              {/* <Icon.Heart size={18} /> */}
              <AiOutlineShopping size={22} />
              <DropdownWrapper iconDropdown></DropdownWrapper>
            </NavItem>
          </NavGroup>
        </TopRowContainer>
        <Navigation>
          <NavGroup>
            <NavItem>
              Clothing
              <DropdownWrapper navDropdown></DropdownWrapper>
            </NavItem>
            <NavItem>
              Shoes
              <DropdownWrapper navDropdown></DropdownWrapper>
            </NavItem>
            <NavItem>
              Sportswear
              <DropdownWrapper navDropdown></DropdownWrapper>
            </NavItem>
            <NavItem>
              Accesories
              <DropdownWrapper navDropdown></DropdownWrapper>
            </NavItem>
            <NavItem>
              Face + Body
              <DropdownWrapper navDropdown></DropdownWrapper>
            </NavItem>
          </NavGroup>
        </Navigation>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
