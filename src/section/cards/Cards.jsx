import { useState } from "react";
import { MessageCard } from "../message-card/MessageCard";
import { CommentCard } from "../comment-card/CommentCard";
import { Loader } from "../../components/Loader";
import { useFetchThoughts } from "../../components/fetchThoughts";

export const Cards = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [recentComments, setRecentComments] = useState([]);

  const apiUrl = "https://happy-thoughts-zcsh.onrender.com/thoughts";
  const { loading } = useFetchThoughts(apiUrl, setRecentComments);

  if (loading) {
    return <Loader />;
  }

  const handleAddLocalMessage = (newMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

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