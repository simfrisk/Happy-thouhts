// utils/likeHandler.js

export const likeHandler = (
  id,
  apiNewId,
  setMessages,
  setRecentComments,
  setIsButtonDisabled
) => {
  console.log("💬 Like clicked for ID:", id);
  console.log("🔁 API New ID:", apiNewId);

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

  if (apiNewId && apiNewId !== id) {
    fetch(`https://happy-thoughts-zcsh.onrender.com/thoughts/${apiNewId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  fetch(`https://happy-thoughts-zcsh.onrender.com/thoughts/${id}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};