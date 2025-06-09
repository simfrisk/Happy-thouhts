//#region ---- IMPORT ----
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader";
import { CommentCard } from "../comment-card/CommentCard";
import { MessageCard } from "../message-card/MessageCard";
import { useFetchThoughts } from "./components/fetchThoughts";
//#endregion

//#region ---- CODE ----
export const  Cards = () => {
  const [messages, setMessages] = useState([]);
  const [recentComments, setRecentComments] = useState([]);
  const [userInput, setUserInput] = useState("");

  const { sort } = useParams(); 
  console.log(sort)

  // const [pageNumber, setPageNumber] = useState(1);

  const apiUrl =
    sort === "sort"
      ? `https://happy-thoughts-zcsh.onrender.com/thoughts/?sort=hearts`
      : "https://happy-thoughts-zcsh.onrender.com/thoughts?page=1"
   

  // const {pageNumber} = findPageNumber()

  const { loading } = useFetchThoughts(apiUrl, setRecentComments);

  if (loading) {
    return <Loader />;
  }

  const handleAddLocalMessage = (newMessage) => {
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
          />
        ))}
      </section>
    </>
  );
};
//#endregion
