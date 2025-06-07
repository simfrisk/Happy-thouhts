//#region ---- IMPORT ----
import styled from "styled-components";
//#endregion

//#region ---- COMPONENT ----
export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Created by: Simon & Sofia</p>
      <a href="https://github.com/solen80a/js-project-happy-thoughts">
        <img
          src="./assets/Btn - github.svg"
          alt="Github icon to access the code"
          target="_blank"
        />
      </a>
    </FooterWrapper>
  );
};
//#endregion

//#region ---- STYLING ----
const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 12px;
  font-size: 15px;
  background-color: pink;
  border: 1px solid #000;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  width: 250px;
  height: 50px;
  margin: 28px auto;
  padding: 12px 18px;
  margin-bottom: 0px;
  transition: ease 1s;

  @media (min-width: 640px) {
    width: 350px;
  }

  img {
    background-color: #fe8e86;
    border-radius: 50%;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
//#endregion