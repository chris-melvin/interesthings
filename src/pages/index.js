import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Card, Sidebar } from "../components";
import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { useState } from "react";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost(limit: 5, sort: { order: DESC, fields: _createdAt }) {
        nodes {
          title
          postreference
          categories {
            title
            id
            color
            slug {
              current
            }
          }
          body {
            children {
              text
            }
          }
        }
      }
    }
  `);
  const allPost = data.allSanityPost.nodes;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Container>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainContainer>
          <GridContainer>
            {allPost.map((post) => (
              <Card
                title={post.title}
                categories={post.categories}
                body={post.body}
                key={post.title}
                postreference={post.postreference}
              />
            ))}
          </GridContainer>
        </MainContainer>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const MainContainer = styled.main`
  background-color: #b7ded0;
  min-height: 100vh;
  @media (min-width: 769px) {
    grid-column: 2/3;
  }
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;
