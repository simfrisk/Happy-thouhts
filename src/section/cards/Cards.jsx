import { useState } from "react";
import { MessageCard } from "../message-card/MessageCard"
import { CommentCard } from "../comment-card/CommentCard";
import moment from 'moment';
import { Loader } from "../../components/Loader";
import { useFetchThoughts } from "../../components/fetchThoughts";

export const Cards = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [apiNewId, setApiNewId] = useState();
  const [recentComments, setRecentComments] = useState([]);

  const apiUrl = "https://happy-thoughts-zcsh.onrender.com/thoughts";

 const { loading } = useFetchThoughts(apiUrl, setRecentComments);

  const submitHandler = (event) => {
    event.preventDefault();

    if (userInput.trim() === "")
      return

    const newMessage = {
      id: Date.now(), // This will be a uniqe ID
      text: userInput.trim(),
      timestamp: moment().fromNow(),
      likes: 0,
      liked: false,
    }

    setMessages((prev) => [newMessage, ...prev])
    setUserInput("")
  }

  //#endregion

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section>
        < MessageCard
          userInput={userInput}
          setUserInput={setUserInput}
          comment={submitHandler}
          setApiNewId={setApiNewId}
        />
      </section>

      <section>
        {[...messages, ...recentComments].map((item, index) => (
          <CommentCard
            key={item.id}
            id={item.id}
            apiNewId={apiNewId}
            text={item.text}
            timestamp={item.timestamp}
            likes={item.likes}
            liked={item.liked}
            setMessages={setMessages}
            setRecentComments={setRecentComments}
            isNewComment={index === 0} // Optional: Only mark the very first item as new
          />
        ))}

      </section>
    </>
  )
}