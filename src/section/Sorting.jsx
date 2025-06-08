import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiggerButton } from "../components/buttons"

export const Sorting = () => {
  return (
    <Container>
      <StyledNavLink to="/">
      <BiggerButton>Last added</BiggerButton>
      </StyledNavLink>
      <StyledNavLink to="/thoughts/sort">
      <BiggerButton>By hearts</BiggerButton>
      </StyledNavLink>
    </Container>
  )
};

const Container = styled.div `
display: flex;
justify-content: center;
column-gap: 20px;
margin-bottom: 20px;
`

const StyledNavLink = styled(Link)` 
  color: black;
  text-decoration: none;
  text-align: left;  

`