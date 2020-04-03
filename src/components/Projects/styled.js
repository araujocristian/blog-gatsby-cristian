import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Title = styled.h1`
  color: var(--postColor);
  font-weight: 800;
  letter-spacing: 0.069rem;
  line-height: 1.4;

  font-size: 2.8rem;
  margin: 0 auto 1rem;

  ${media.lessThan("large")`
    font-size: 1.875rem;
  `}
`
export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.a`
  color: var(--postColor);
  transition: color 0.5s;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  &:hover {
    color: var(--highlight);
    opacity: 0.8;
  }

  h4 {
    margin-bottom: 1.45rem;
    font-weight: bold;
    text-rendering: optimizelegibility;
    font-size: 1rem;
    line-height: 1.1;
    text-decoration: none;
  }

  p {
    color: #707070;
    font-size: 0.8rem;
    word-wrap: break-word;
    margin-bottom: 1.45rem;
  }
`

export const Content = styled.div`
  padding: 1rem 0;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  color: var(--postColor);

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    svg {
      width: 15px;
      height: 15px;
    }

    span {
      margin-left: 0.5rem;
      text-align: center;
    }
  }
`
