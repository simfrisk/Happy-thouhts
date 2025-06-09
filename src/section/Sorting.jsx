import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiggerButton } from "../components/buttons"

export const Sorting = () => {

   const [value, setValue] = useState(50); // default starting value

  return (
    <Container>
      <StyledNavLink to="/thoughts">
      <BiggerButton>Last added</BiggerButton>
      </StyledNavLink>
      <StyledNavLink to="/thoughts/sort">
      <BiggerButton>By hearts</BiggerButton>
      </StyledNavLink>

      <form>
      <label htmlFor="rangeInput">Min Hearts: {value}</label>
        <input
          id="rangeInput"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          />
      <StyledNavLink to={`/thoughts/minHearts/${value}`}>
        <BiggerButton>Sort</BiggerButton>
      </StyledNavLink>
      </form>
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