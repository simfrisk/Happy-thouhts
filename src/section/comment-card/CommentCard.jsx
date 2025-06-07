//#region ---- IMPORT ----
import styled from "styled-components";
import { useState } from "react";
import { deleteHandler } from "./components/deleteHandler";
import { editHandler } from "./components/editHandler";
import { likeHandler } from "./components/likeHandler";
import { CommentEditForm } from "./CommentEditForm";
import { CommentHeaderContent } from "./CommentHeaderContent";
import { CommentFooter } from "./CommentFooter";

//#endregion

//#region ---- CODE ----
export const CommentCard = ({
  text,
  timestamp,
  likes,
  liked,
  isNewComment,
  id,
  setMessages,
  setRecentComments,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleDelete = () => {
    deleteHandler(id, setMessages, setRecentComments);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editHandler(id, userInput, setMessages, setRecentComments);
    setUserInput("");
    setIsEditing(false);
  };

  const handleLike = () => {
    likeHandler(id, setMessages, setRecentComments, setIsButtonDisabled);
  };

  const EnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleEdit(e);
    }
  };

  //#endregion

//#region ---- RETURN ----
  return (
    <CommentCardWrapper $isNewComment={isNewComment}>
      {isEditing ? (
        <CommentEditForm
          userInput={userInput}
          setUserInput={setUserInput}
          handleEdit={handleEdit}
          EnterPress={EnterPress}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <CommentHeaderContent
            text={text}
            setIsEditing={setIsEditing}
            setUserInput={setUserInput}
            handleDelete={handleDelete}
          />
          <CommentFooter
            likes={likes}
            liked={liked}
            timestamp={timestamp}
            isButtonDisabled={isButtonDisabled}
            handleLike={handleLike}
          />
        </>
      )}
    </CommentCardWrapper>
  );
};

//#endregion

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
  animation: ${({ $isNewComment }) =>
    $isNewComment ? "popComment 0.6s ease-out forwards" : "none"};

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
`;

//#endregion