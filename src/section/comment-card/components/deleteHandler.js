export const deleteHandler = (
  id,
  setMessages,
  setRecentComments
) => {
  fetch(`https://happy-thoughts-zcsh.onrender.com/thoughts/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": localStorage.getItem("accessToken"),
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to delete thought");
      }

      if (setMessages) {
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message.id !== id)
        );
      }

      if (setRecentComments) {
        setRecentComments((prevMessages) =>
          prevMessages.filter((message) => message.id !== id)
        );
      }
    })
    .catch((error) => {
      console.error("❌ Delete failed:", error);
    });
};