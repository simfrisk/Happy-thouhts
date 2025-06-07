import styled from "styled-components";
import { EditButton } from "../../components/buttons"

export const CommentEditForm = ({
  userInput,
  setUserInput,
  handleEdit,
  EnterPress,
  setIsEditing,
}) => (
  <Form onSubmit={handleEdit}>
    <label>
      <textarea
        maxLength={140}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={EnterPress}
      />
    </label>
    <div className="buttons">
      <EditButton type="button" onClick={() => setIsEditing(false)}>
        <img className="icons" src="./assets/btn-cancel.svg" alt="Cancel" />
      </EditButton>
      <EditButton
        type="submit"
        disabled={userInput.trim().length <= 5 || userInput.trim().length >= 141}
      >
        <img className="icons" src="./assets/btn-check.svg" alt="Submit" />
      </EditButton>
    </div>
  </Form>
);

const Form = styled.form`
  label {
    display: flex;
    justify-content: center;
  }

  textarea {
    width: 98%;
    overflow: auto;
    padding: 10px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
  }

  .icons {
    display: flex;
    margin: auto;
    height: 60%;
  }
`;