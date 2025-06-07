import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  50% { transform: scale(0.9); }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const BaseButton = styled.button`
  background-color: #eeeeee;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: ease 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0aeae;
    transform: scale(1.03);
  }

  &:active {
    box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.15),
      inset 0 3px 6px rgba(0, 0, 0, 0.1);
    background-color: #de8080;
  }
`;

export const ShowMoreButton = styled(BaseButton)``;
export const EditButton = styled(BaseButton)``;
export const DeleteButton = styled(BaseButton)``;
export const LikeButton = styled(BaseButton)`
  &.on {
    background-color: pink;
    animation: ${pulse} 0.7s;
  }
  &.off {
    background-color: #eeeeee;
  }
`;