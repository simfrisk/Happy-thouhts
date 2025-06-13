//#region ---- IMPORT ----
import styled from "styled-components";
import { useThoughtStore } from "../store/thoughtStore";
//#endregion

//#region ---- COMPONENT ----
export const Footer = () => {
  const totalPages = useThoughtStore((state) => state.totalPages);
  const currentPage = useThoughtStore((state) => state.currentPage);
  const setCurrentPage = useThoughtStore((state) => state.setCurrentPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <FooterWrapper>
      <p>Pages:</p>
      {pages.map((page) => (
        <button
          key={page}
          style={{
            fontWeight: page === currentPage ? "bold" : "normal",
            textDecoration: page === currentPage ? "underline" : "none",
          }}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </FooterWrapper>
  );
};
//#endregion

//#region ---- STYLING ----
const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 15px;
  background-color: pink;
  border: 1px solid #000;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 1px 1px 2px;
  width: 90%;
  height: 50px;
  margin: 28px auto;
  padding: 12px 18px;
  margin-bottom: 0px;
  transition: ease 1s;

  @media (min-width: 640px) {
    width: 620px;
  }

  button {
    border: none;
    background-color: transparent;
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