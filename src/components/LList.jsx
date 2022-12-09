import React from "react";

import Post from "./Post";

export default function LList({ list }) {
  if (!list) return null;

  return (
    <div className="list">
      {list.map((el) => (
        <Post {...el} key={el.id} />
      ))}
    </div>
  );
}
