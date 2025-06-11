import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiggerButton } from "../components/buttons";

export const Sorting = () => {
  const [value, setValue] = useState(50);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Burger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Burger>

      <Menu open={menuOpen}>
        <StyledNavLink to="/thoughts" onClick={() => setMenuOpen(false)}>
          <BiggerButton>Last added</BiggerButton>
        </StyledNavLink>
        <StyledNavLink to="/thoughts/sort" onClick={() => setMenuOpen(false)}>
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
          <StyledNavLink to={`/thoughts/minHearts/${value}`} onClick={() => setMenuOpen(false)}>
            <BiggerButton>Sort</BiggerButton>
          </StyledNavLink>
        </form>
      </Menu>
    </>
  );
};

// Styled Components

const Burger = styled.button`
  position: fixed;
  top: 30px;
  left: 20px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background: black;
    border-radius: 10px;
  }

  @media(min-width: 640px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  width: 100vw;
  height: 100vh;
  background: pink;
  padding: 100px 30px;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  z-index: 10;

  @media(min-width: 640px) {
    position: static;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    background: none;
    transition: none;
    padding: 0;
    gap: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    width: 200px;
  }
`;

const StyledNavLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: left;
`;