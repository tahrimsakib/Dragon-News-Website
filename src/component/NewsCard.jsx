import React from "react";
import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "k";
    }
    return views;
  };

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Author Info Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img src={news.author.img} alt={news.author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{news.author.name}</h3>
            <p className="text-sm text-gray-500">
              {formatDate(news.author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm btn-square">
            <FaBookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button className="btn btn-ghost btn-sm btn-square">
            <FaShareAlt className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-3">
        <h2 className="text-[15px] font-bold text-gray-900 leading-tight">
          {news.title}
        </h2>
      </div>

      {/* Thumbnail Image */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-64 object-cover"
        />
      </figure>

      {/* Details & Tags */}
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {news.details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline badge-sm text-blue-600 border-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <button className="text-orange-500 font-semibold text-sm hover:text-orange-700 transition-colors cursor-pointer hover:text-[15px]">
          Read More
        </button>
      </div>

      {/* Footer with Rating and Views */}
      <div className="flex items-center justify-between px-4 pb-4 border-t pt-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
                index < Math.floor(news.rating.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {news.rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye className="w-5 h-5" />
          <span className="font-medium">{formatViews(news.total_view)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
