import React, { Suspense } from "react";
import Category from "../Category";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Category></Category>
      </Suspense>
    </div>
  );
};

export default LeftAside;
