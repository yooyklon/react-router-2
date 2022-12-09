import React, { useState } from "react";

import { Link } from "react-router-dom";

import smile from "../img/icons/smile.svg";
import penColar from "../img/icons/pen-colar.svg";
import photoColar from "../img/icons/photo-colar.svg";
import camColar from "../img/icons/cam-colar.svg";
import ellipsisColor from "../img/icons/ellipsis-colar.svg";

export default function Create({ onSubmit }) {
  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className="create">
      <div className="create-header">
        <button className="create-header-btn">
          <img className="create-heder-btn-icon" src={penColar} alt="" />
          <div className="create-header-btn-text">Публикачия</div>
        </button>
        <button className="create-header-btn">
          <img className="create-heder-btn-icon" src={photoColar} alt="" />
          <div className="create-header-btn-text">Фото/видео</div>
        </button>
        <button className="create-header-btn">
          <img className="create-heder-btn-icon" src={camColar} alt="" />
          <div className="create-header-btn-text">Прямой эфир</div>
        </button>
        <button className="create-header-btn">
          <img className="create-heder-btn-icon" src={ellipsisColor} alt="" />
          <div className="create-header-btn-text">Ещё</div>
        </button>
        <Link className="close" to="/">
          &#10006;
        </Link>
      </div>
      <form className="create-form" onSubmit={() => onSubmit(value)}>
        <div className="create-areabox">
          <textarea
            className="create-area"
            value={value}
            onChange={handleChange}
          ></textarea>
          <span className="create-area-smile">
            <img src={smile} alt="" />
          </span>
        </div>
        <button className="btn main-btn">Опубликовать</button>
      </form>
    </div>
  );
}
