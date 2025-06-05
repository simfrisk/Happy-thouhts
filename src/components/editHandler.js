export const editHandler = async (
  id,
  userInput,
  setMessages,
  setRecentComments
) => {

  try {
    const response = await fetch(`https://happy-thoughts-zcsh.onrender.com/thoughts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newMessage: userInput }),
    });

    const data = await response.json();
    const updatedText = data.response.message || userInput; // Fallback if backend doesn't work

    // Update recentComments
    setRecentComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === id || comment.id === id
          ? { ...comment, text: updatedText }
          : comment
      )
    );

    // Update messages
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id
          ? { ...msg, text: updatedText }
          : msg
      )
    );
  } catch (error) {
    console.error("Error editing thought:", error);
  }
};