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

    const updateComment = (setFn) => {
      setFn((prevItems) =>
        prevItems.map((item) =>
          item._id === id || item.id === id
            ? { ...item, text: updatedText }
            : item
        )
      );
    };

    if (setRecentComments) updateComment(setRecentComments);
    if (setMessages) updateComment(setMessages);

  } catch (error) {
    console.error("Error editing thought:", error);
  }
};