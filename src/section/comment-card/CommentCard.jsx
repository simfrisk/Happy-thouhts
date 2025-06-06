import styled from "styled-components";
import { useState } from "react";
import { likeHandler } from "../../components/likeHandler";
import { deleteHandler } from "../../components/deleteHandler";
import { editHandler } from "../../components/editHandler";

//#region ---- STYLING ----

const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid #000;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  width: 320px;
  margin: 28px auto;
  padding: 12px 18px;
  gap: 12px;
  animation: ${({ isNewComment }) => (isNewComment ? 'popComment 0.6s ease-out forwards' : 'none')};

  @keyframes popComment {
    0% {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    60% {
      opacity: 1;
      transform: translateY(10px) scale(1.02);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (min-width: 640px) {
    width: 620px;    
  }

  p {
    overflow-wrap: break-word;
    margin: 0;
  }

  button {
    background-color: #eeeeee;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: ease .3s;

    &:hover {
      background-color: #f0aeae;
      transform: scale(1.03);
    }

    &:active {
      box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.15),
                  inset 0 3px 6px rgba(0, 0, 0, 0.10);
      background-color: #de8080;
    }

    &.like-color.on {
      background-color: pink;
      animation: pulse .7s;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      30% {
        transform: scale(1.3);
      }
      50% {
        transform: scale(0.9);
      }
      70% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .like-color.off {
      background-color: #eeeeee;
    }
  }
`

const CommentCardFooter = styled.footer`
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
`

const CommentHeader = styled.div`
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
`

//#endregion

//#region ---- COMPONENT ----

export const CommentCard = ({
  text,
  timestamp,
  likes,
  liked,
  isNewComment,
  id,
  apiNewId,
  setMessages,
  setRecentComments
}) => {
  const [userInput, setUserInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleLike = () => {
    likeHandler(id, apiNewId, setMessages, setRecentComments, setIsButtonDisabled);
  }

  const handleDelete = () => {
    deleteHandler(id, setMessages, setRecentComments);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    editHandler(id, userInput, setMessages, setRecentComments);
    setUserInput("");
    setIsEditing(false);
  }

  return (
    <CommentCardWrapper isNewComment={isNewComment}>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <label>
            <textarea
              maxLength={140}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Write something happy!"
            ></textarea>
          </label>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              type="submit"
              disabled={userInput.trim().length <= 5 || userInput.trim().length >= 141}>
              Save
            </button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <CommentHeader>
            <div className="text">
              <p>{text}</p>
            </div>
            <div className="actions">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setUserInput(text);
                }}
              >
                ✏️
              </button>
              <button onClick={handleDelete}>
                <img src="./assets/Btn-trash.svg" alt="Delete" />
              </button>
            </div>
          </CommentHeader>

          <CommentCardFooter>
            <div>
              <button
                disabled={isButtonDisabled}
                className={`like-color ${liked ? "on" : "off"}`}
                onClick={handleLike}
              >❤️</button>
              <p>x {likes}</p>
            </div>
            <p>{timestamp}</p>
          </CommentCardFooter>
        </>
      )}
    </CommentCardWrapper>
  );
};