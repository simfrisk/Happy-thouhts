import moment from "moment";

export const postThought = (setUserInput, trimmedInput, onAddLocalMessage) => {
  fetch("https://happy-thoughts-zcsh.onrender.com/thoughts", {
    method: "POST",
    body: JSON.stringify({ message: trimmedInput }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      const newThought = data.response;

      const messageFromApi = {
        id: newThought._id,
        text: newThought.message,
        timestamp: moment(newThought.createdAt).fromNow(),
        likes: newThought.hearts,
        liked: false,
      };

      onAddLocalMessage(messageFromApi);
      setUserInput("");
    })
    .catch((err) => {
      console.error("Failed to post to API:", err);
    });
};