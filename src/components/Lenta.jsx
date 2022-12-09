import React from "react";

import { Link } from "react-router-dom";

import LList from "./LList";

export default function Lenta({ list }) {
  return (
    <div className="lenta">
      <div className="lenta-header mb-20">
        <Link className="btn main-btn" to="/posts/new">
          Создать пост
        </Link>
      </div>
      <LList list={list} />
    </div>
  );
}
