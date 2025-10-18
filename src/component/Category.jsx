import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryPromise = fetch("/categories.json").then((res) => res.json());
console.log(CategoryPromise);

const Category = () => {
  const categories = use(CategoryPromise);

  return (
    <div>
      <h1> All categories ({categories.length})</h1>
      <div className="grid grid-cols-1 gap-2 mt-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={"btn bg-white border-0 text-accent"}
          >
            {category.name}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
