// utils/likeHandler.js

export const likeHandler = (
  id,
  setMessages,
  setRecentComments,
  setIsButtonDisabled
) => {
  console.log("💬 Like clicked for ID:", id);

  setIsButtonDisabled(true);

  const updateLikes = (setFn) => {
    setFn((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? {
            ...message,
            liked: !message.liked,
            likes: message.likes + 1,
          }
          : message
      )
    );
  };

  if (setMessages) updateLikes(setMessages);
  if (setRecentComments) updateLikes(setRecentComments);

  // Single like request using the correct ID
  fetch(`https://happy-thoughts-zcsh.onrender.com/thoughts/${id}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};