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
      allSanityPost(limit: 1, sort: { order: DESC, fields: _createdAt }) {
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
  const {
    title,
    categories,
    body,
    postreference,
  } = data.allSanityPost.nodes[0];

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
          <Card
            title={title}
            body={body}
            categories={categories}
            postreference={postreference}
          />
        </MainContainer>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const MainContainer = styled.main`
  display: flex;
  background-color: #1d3557;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
