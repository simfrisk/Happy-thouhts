import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiggerButton } from "../../components/buttons";

export const Sorting = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

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

         <BreakLine />

        <StyledNavLink to="/thoughts/sort" onClick={() => setMenuOpen(false)}>
          <BiggerButton>By hearts</BiggerButton>
        </StyledNavLink>

        <BreakLine />

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

          <BreakLine />

          <StyledNavLink to="/" onClick={handleLogout}>
            <BiggerButton>Log Out</BiggerButton>
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
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: pink;
  padding: 100px 30px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  z-index: 10;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

  @media(min-width: 640px) {
    justify-content: center;
    align-items: flex-start;
    width: 300px;
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

const BreakLine = styled.div `
background-color: #ffffff;
width: 100%;
height: 1px;
margin: 10px 0;
`