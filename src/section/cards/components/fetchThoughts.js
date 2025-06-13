import { useEffect, useState } from "react";
import { useThoughtStore } from "../../../store/thoughtStore"
import moment from "moment";

export const useFetchThoughts = (url, setRecentComments) => {
  const [loading, setLoading] = useState(false);
  const setTotalPages = useThoughtStore((state) => state.setTotalPages);

  useEffect(() => {
    setLoading(true);

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        const { pagedResults, totalPages } = json;

        // ✅ Use pagedResults here, not json
        const normalized = pagedResults.map((item) => ({
          id: item._id,
          text: item.message.trim(),
          timestamp: moment(item.createdAt).fromNow(),
          likes: item.hearts,
          liked: false,
          createdByUser: item.createdBy === localStorage.getItem("userId"),
        }));

        setRecentComments(normalized);
        setTotalPages(totalPages);
        console.log("Total pages:", totalPages);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, setRecentComments]);

  return { loading };
};