import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";

import smile from "../img/icons/smile.svg";
import photoGaleryColar from "../img/icons/photo-galery-colar.svg";
import smileColar from "../img/icons/smile-colar.svg";
import gifColar from "../img/icons/gif-colar.svg";
import userColar from "../img/icons/user-colar.svg";
import positionColar from "../img/icons/position-colar.svg";

export default function Edit({ onEditPost }) {
  const [value, setValue] = useState();

  const params = useParams();

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="edit">
      <div className="edit-header">
        <div className="edit-title">Редактировать публикацию</div>
        <Link to="/">
          <span className="close">&#10006;</span>
        </Link>
      </div>
      <form className="create-form">
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
      </form>
      <div className="edit-actions">
        <button className="edit-actions-btn">
          <img className="edit-actions-icon" src={photoGaleryColar} alt="" />
          <div className="edit-actions-text">Фото/видео</div>
        </button>
        <button className="edit-actions-btn">
          <img className="edit-actions-icon" src={smileColar} alt="" />
          <div className="edit-actions-text">Чувства/действия</div>
        </button>
        <button className="edit-actions-btn">
          <img className="edit-actions-icon" src={gifColar} alt="" />
          <div className="edit-actions-text">Gif</div>
        </button>
        <button className="edit-actions-btn">
          <img className="edit-actions-icon" src={userColar} alt="" />
          <div className="edit-actions-text">Отметить друзей</div>
        </button>
        <button className="edit-actions-btn">
          <img className="edit-actions-icon" src={positionColar} alt="" />
          <div className="edit-actions-text">Отметить посещение</div>
        </button>
      </div>
      <button
        className="btn main-btn"
        onClick={() => onEditPost(+params.id, value)}
      >
        Сохранить
      </button>
    </div>
  );
}
