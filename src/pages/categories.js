import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Sidebar } from "../components";
import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { useState } from "react";

// markup
const CategoriesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory {
        nodes {
          title
          description
          slug {
            current
          }
          id
        }
      }
    }
  `);
  const categories = data.allSanityCategory.nodes;

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
          <CategoryTitle>Categories</CategoryTitle>
          <GridContainer>
            {categories.map(({ title, slug: { current }, id, description }) => (
              <CategoryCard key={id}>
                <CategoryLink to={`/categories/${current}`}>
                  <h2>{title}</h2>
                </CategoryLink>
                <Content>{description}</Content>
              </CategoryCard>
            ))}
          </GridContainer>
        </MainContainer>
      </Container>
    </Layout>
  );
};

export default CategoriesPage;

const MainContainer = styled.main`
  background-color: #1d3557;

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
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
  }
`;

const CategoryLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    color: #444;
  }
`;

const Content = styled.p`
  font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  color: #457b9d;
`;

const CategoryCard = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
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
  margin-left: 1rem;
  padding-top: 1rem;
`;
