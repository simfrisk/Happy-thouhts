import styled from "styled-components";
import { useState } from "react";
import { BaseButton } from "../../components/buttons";

export const MorInfoBtn = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  //This makes the button toogle the vissiblity of the other buttons in the Header
  const toggleOpen = () => {
    setOpen(!open);
    if (onClick) onClick();
  };

  return (
    <Container>
      <ButtonWrapper>
        <BaseButton
          className={`btn btn-nav js-nav-toggler ${open ? "btn-nav--open" : ""}`}
          onClick={toggleOpen}
          aria-expanded={open}
          aria-label="Navigation"
        >
          <span className="sr-only"></span>
          <span className="nav-dots"></span>
        </BaseButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div `
position: relative;
`

const ButtonWrapper = styled.div`

  div {
    transform: translate3d(0px, 0px, 0px);
  }

  .btn-nav {
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;

    &:active {
      box-shadow: none;
    }

    .nav-dots {
      position: absolute;
      left: 17px;
      top: 17px;
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: black;
      transition: all 0.1s ease-in-out;
      pointer-events: none;

      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background-color: black;
        transition: all 0.1s ease-in-out;
      }

      &::before {
        transform: translateX(-8px);
      }

      &::after {
        transform: translateX(8px);
      }
    }

    &.btn-nav--open {
      .nav-dots {
        background-color: transparent;

        &::before,
        &::after {
          left: -12px;
          top: 1px;
          height: 3px;
          width: 30px;
          border-radius: 0;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;