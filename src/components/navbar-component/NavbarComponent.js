import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarLinkContainer, NavbarLink } from "./styles";
import { Link, Router, BrowserRouter } from "react-router-dom";
import {TiSocialInstagramCircular} from 'react-icons/ti'

const NavbarComponent = (text) => {

  return (
    <BrowserRouter>
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
           <NavbarLink to=''>Home</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        <TiSocialInstagramCircular />
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
    </BrowserRouter>
  );
};

export default NavbarComponent;
