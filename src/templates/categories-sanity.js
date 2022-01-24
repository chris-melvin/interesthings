import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { Card, Sidebar } from "../components";

const CategoriesSanity = ({ data, pageContext, location }) => {
  const post = data.allSanityPost;
  const { slug } = pageContext;
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
          <CategoryTitle>{slug}</CategoryTitle>
          <GridContainer>
            {post.nodes.map(
              ({ title, categories, body, id, postreference }) => (
                <Card
                  title={title}
                  categories={categories}
                  body={body}
                  key={id}
                  postreference={postreference}
                />
              )
            )}
          </GridContainer>
        </MainContainer>
      </Container>
    </Layout>
  );
};

export default CategoriesSanity;

export const pageQuery = graphql`
  query SanityPostBySlug($slug: String!) {
    allSanityPost(
      filter: {
        categories: { elemMatch: { slug: { current: { eq: $slug } } } }
      }
    ) {
      nodes {
        title
        id
        postreference
        categories {
          title
          color
          id
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
`;

const MainContainer = styled.main`
  background-color: #b7ded0;
  min-height: 100vh;
  @media (min-width: 769px) {
    grid-column: 2/3;
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

const CategoryTitle = styled.h1`
  color: #457b9d;
  text-transform: capitalize;
  margin-left: 25px;
  padding-top: 1rem;
`;
