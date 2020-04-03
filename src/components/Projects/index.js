import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { RepoForked } from "styled-icons/octicons"
import { Star } from "styled-icons/boxicons-solid"

import { Container } from "../Container"
import { Card } from "../Card"

import * as S from "./styled"

export const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              isFork: false
              first: 30
              orderBy: { direction: DESC, field: UPDATED_AT }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <S.Wrapper as={Container} id="projects">
      <S.Title>Projetos</S.Title>
      <S.Grid>
        {edges.map(({ node }) => (
          <S.Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <S.Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </S.Content>
              <S.Stats>
                <div>
                  <Star />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <RepoForked />
                  <span>{node.forkCount}</span>
                </div>
              </S.Stats>
            </Card>
          </S.Item>
        ))}
      </S.Grid>
    </S.Wrapper>
  )
}
