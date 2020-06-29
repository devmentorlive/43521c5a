import React from "react";

import Rating from "./rating";

export default function App() {
  const stars = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  return (
    <div>
      {stars.map((value) => (
        <Rating value={value} />
      ))}
    </div>
  );
}
