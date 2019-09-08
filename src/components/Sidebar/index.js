import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"
import MenuLInks from "../MenuLinks"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLInks />
  </S.SidebarWrapper>
)

export default Sidebar
