import styled from "styled-components";
import { useState } from "react";
import { EditButton, DeleteButton } from "../../components/buttons";
import { MorInfoBtn } from "./moreInfoBtn";

export const CommentHeaderContent = ({
  text,
  setIsEditing,
  setUserInput,
  handleDelete,
  createdByUser,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <Header>
      <div className="text">
        <p>{text}</p>
      </div>
      {createdByUser && (
        <div className="actions">
          <BtnVisibility isShowMore={isShowMore}>
            <EditButton
              onClick={() => {
                setIsEditing(true);
                setUserInput(text);
                setIsShowMore(false);
              }}
            >
              ✏️
            </EditButton>

            <DeleteButton
              onClick={() => {
                handleDelete();
                setIsShowMore(false);
              }}
            >
              <img src="./assets/Btn-trash.svg" alt="Delete" />
            </DeleteButton>
          </BtnVisibility>

          <MorInfoBtn onClick={() => setIsShowMore((prev) => !prev)} />
        </div>
      )}
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .text {
    flex: 1;
  }

  .actions {
    display: flex;
    gap: 10px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const BtnVisibility = styled.div`
  display: ${({ isShowMore }) => (isShowMore ? "flex" : "none")};
  column-gap: 10px;
`;