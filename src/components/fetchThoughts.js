import { useEffect, useState } from "react";
import moment from "moment";

export const useFetchThoughts = (url, setRecentComments) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        const normalized = json.map((item) => ({
          id: item._id,
          text: item.message.trim(),
          timestamp: moment(item.createdAt).fromNow(),
          likes: item.hearts,
          liked: false,
        }));
        setRecentComments(normalized);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading };
};