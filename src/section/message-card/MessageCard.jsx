//#region ---- IMPORT ----
import styled from "styled-components";
import { ErrorHandeler } from "../../components/ErrorHandeler";
import { postThought } from "./components/postThought";

//#endregion

//#region ---- CODE ----
export const MessageCard = ({
  userInput,
  setUserInput,
  onAddLocalMessage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = userInput.trim();
    if (trimmedInput === "") return;

    // This post "fetch" the tought to the API
    postThought(setUserInput, trimmedInput, onAddLocalMessage);
  };

  const EnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  //#endregion

//#region ---- RETURN ----
  return (
    <form onSubmit={handleSubmit}>
      <MessageCardWrapper>
        <p>What’s making you happy right now?</p>
        <label>
          <textarea
            maxLength={140}
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Write something happy!"
            onKeyDown={EnterPress}
          ></textarea>
        </label>
        <ExtraWrapper>
          <button
            type="submit"
            disabled={
              userInput.trim().length <= 5 ||
              userInput.trim().length >= 141
            }
          >
            ❤️ Send Happy Thoughts ❤️
          </button>
          <ErrorHandeler userInput={userInput} setUserInput={setUserInput} />
        </ExtraWrapper>
      </MessageCardWrapper>
    </form>
  );
};

//#endregion

//#region ---- STYLING ----
const MessageCardWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eeeeee;
  border: 1px solid black;
  border-radius: 2px;
  width: 320px;
  margin: 0 auto;
  padding: 12px 18px;
  gap: 12px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);

  textarea {
    height: 80px;
    width: 100%;
    padding: 10px 20px;
    padding-bottom: 35px;
    cursor: pointer;
  }

  button {
    background-color: pink;
    border-radius: 50px;
    width: 75%;
    border: none;
    padding: 12px;
    margin: 12px 0;
    cursor: pointer;
    transition: ease 0.3s;

    &:hover {
      background-color: #f0aeae;
      transform: scale(1.03);
    }
  }

  @media (min-width: 640px) {
    width: 620px;
  }
`;

const ExtraWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
//#endregion