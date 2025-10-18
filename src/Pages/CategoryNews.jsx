import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState([]);
  // console.log(data);

  useEffect(() => {
    if (id == "0") {
      setNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setNews(filterNews);
    }
  }, [data, id]);

  return <div>categories news {news.length}</div>;
};

export default CategoryNews;
