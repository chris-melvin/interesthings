import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <StaticImage src="../images/interesthings.png" alt="Interesthings Logo" />
      <Nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </Nav>
      <Description>
        This is a project where I can share some random facts I learned on the
        internet.
      </Description>
      <ExternalLinks>
        <a href="https://github.com/chris-melvin/interesthings">
          <FaGithub />
        </a>
        <a href="https://chrismelvin.me">
          <CgWebsite />
        </a>
      </ExternalLinks>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
  background-color: #457b9d;
  height: 100vh;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-width: ${({ isOpen }) => (isOpen ? "100vw" : "0")};
    transition: max-width 0.3s ease-in;
    width: 100%;
  }
  @media (min-width: 769px) {
    position: fixed;
    width: 20%;
    grid-column: 1 / 2;
  }
`;

const Nav = styled.nav`
  li {
    list-style: none;
    margin-bottom: 1rem;
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin: 1rem;
  color: #1d3557;
`;

const NavLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    color: #1d3557;
  }
`;

const ExternalLinks = styled.div`
  position: absolute;
  bottom: 1rem;
  transition: all 0.3s ease-in;
  a {
    color: black;
    margin-left: 1rem;
  }

  a:hover {
    color: #1d3557;
  }
`;
