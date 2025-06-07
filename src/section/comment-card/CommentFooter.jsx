import styled from "styled-components";
import { LikeButton } from "../../components/buttons";

export const CommentFooter = ({
  likes,
  liked,
  timestamp,
  isButtonDisabled,
  handleLike,
}) => (
  <Footer>
    <div>
      <LikeButton
        disabled={isButtonDisabled}
        className={liked ? "on" : "off"}
        onClick={handleLike}
      >
        ❤️
      </LikeButton>
      <p>x {likes}</p>
    </div>
    <p>{timestamp}</p>
  </Footer>
);

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  p {
    color: grey;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    gap: 10px;
  }

`;