import React from "react"

import links from "./content"

import * as S from "./styled"

const MenuLInks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, ind) => (
        <S.MenuLinksItem key={ind}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLInks
