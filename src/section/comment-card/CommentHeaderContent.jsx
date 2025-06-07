import styled from "styled-components";
import { EditButton, DeleteButton } from "../../components/buttons";

export const CommentHeaderContent = ({
  text,
  setIsEditing,
  setUserInput,
  handleDelete,
}) => (
  <Header>
    <div className="text">
      <p>{text}</p>
    </div>
    <div className="actions">
      <EditButton
        onClick={() => {
          setIsEditing(true);
          setUserInput(text);
        }}
      >
        ✏️
      </EditButton>
      <DeleteButton onClick={handleDelete}>
        <img src="./assets/Btn-trash.svg" alt="Delete" />
      </DeleteButton>
    </div>
  </Header>
);

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