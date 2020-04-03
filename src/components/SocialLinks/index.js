import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = ({ aboutPage }) => (
  <S.SocialLinksWrapper aboutPage={aboutPage}>
    <S.SocialLinksList>
      {links.map((link, ind) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={ind}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks
