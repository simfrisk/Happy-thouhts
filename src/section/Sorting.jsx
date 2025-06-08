import styled from "styled-components";
import { Link } from "react-router-dom";

export const Sorting = () => {
  return (
    <Container>
      <StyledNavLink to="/">Last added</StyledNavLink>
      <StyledNavLink to="/thoughts/sort">Sort by hearts</StyledNavLink>
    </Container>
  )
};

const Container = styled.div `
display: flex;
justify-content: center;
column-gap: 20px;
`

const StyledNavLink = styled(Link)` 
  color: black;
  text-decoration: none;
  text-align: left;  

`