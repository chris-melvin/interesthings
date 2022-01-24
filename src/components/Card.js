import React from "react";
import styled from "styled-components";
import { FaWikipediaW } from "react-icons/fa";
import { Link } from "gatsby";

export const Card = ({ title, body, categories, postreference }) => {
  const { text } = body[0].children[0];

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{text}</Content>
      <LinksContainer>
        <div className="categories">
          {categories.map(({ title, slug, color, id }) => (
            <Categories
              key={id}
              color={color}
              to={`/categories/${slug.current}`}
            >
              {title}
            </Categories>
          ))}
        </div>
        <div>
          <StyledLink href={postreference}>
            <FaWikipediaW />
          </StyledLink>
        </div>
      </LinksContainer>
    </Container>
  );
};
const Container = styled.article`
  background-color: #fff;
  max-width: 500px;
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  color: #322c2c;
`;

const Content = styled.p`
  font-size: calc(14px + 6 * ((100vw - 320px) / 680));
  color: #322c2c;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  .categories {
    display: flex;
    flex-wrap: wrap;
  }
`;
const StyledLink = styled.a`
  color: black;
`;

const Categories = styled(Link)`
  background-color: ${(props) => props.color};
  border-radius: 15px;
  padding: 2px 5px;
  margin-right: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 12px;
`;
