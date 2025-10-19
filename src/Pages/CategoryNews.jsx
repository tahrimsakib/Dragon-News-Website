import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../component/NewsCard";

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

  return (
    <div>
      categories news {news.length}
      <div className="grid grid-cols-1 gap-3 mt-5">
        {news.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
