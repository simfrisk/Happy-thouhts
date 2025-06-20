//#region ---- IMPORT ----
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader";
import { CommentCard } from "../comment-card/CommentCard";
import { MessageCard } from "../message-card/MessageCard";
import { useFetchThoughts } from "./components/fetchThoughts";
import { useThoughtStore } from "../../store/thoughtStore";
//#endregion

//#region ---- CODE ----
export const  Cards = () => {
  const [messages, setMessages] = useState([]);
  const [recentComments, setRecentComments] = useState([]);
  const [userInput, setUserInput] = useState("");

  const { sort, value } = useParams();
  const currentPage = useThoughtStore((state) => state.currentPage);

  // const [pageNumber, setPageNumber] = useState(1);

let apiUrl;

switch (sort) {
  case "sort":
    apiUrl = "https://happy-thoughts-zcsh.onrender.com/thoughts/?sort=hearts";
    break;
  case "minHearts":
    apiUrl = `https://happy-thoughts-zcsh.onrender.com/thoughts?minHearts=${value}`;
    break;
  default:
    apiUrl = `https://happy-thoughts-zcsh.onrender.com/thoughts?page=${currentPage}`;
}

  // const {pageNumber} = findPageNumber()

  const { loading } = useFetchThoughts(apiUrl, setRecentComments);

  if (loading) {
    return <Loader />;
  }

  const handleAddLocalMessage = (newMessage) => {
    newMessage.createdByUser = true
    setMessages((prev) => [newMessage, ...prev]);
  };
  //#endregion

  //#region ---- RETURN ----
  return (
    <>

      <section>
        <MessageCard
          userInput={userInput}
          setUserInput={setUserInput}
          onAddLocalMessage={handleAddLocalMessage}
        />
      </section>

      <section>
        {[...messages, ...recentComments].map((item, index) => (
          <CommentCard
            key={item.id}
            id={item.id}
            text={item.text}
            timestamp={item.timestamp}
            likes={item.likes}
            liked={item.liked}
            setMessages={setMessages}
            setRecentComments={setRecentComments}
            isNewComment={index === 0}
            createdByUser={item.createdByUser}
          />
        ))}
      </section>
    </>
  );
};
//#endregion
