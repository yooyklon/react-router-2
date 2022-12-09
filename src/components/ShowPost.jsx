import React from "react";

import { useParams, Link } from "react-router-dom";

import returnTimeIntervals from "../utils/timeInterval";

import like from "../img/icons/like.svg";
import comment from "../img/icons/comment.svg";

export default function ShowPost({ list, onRemovePost }) {
  const params = useParams();

  const currentElement = list.find((el) => el.id === +params.id);

  return (
    <div className="show-post">
      <div className="show-post-user-info">
        <div className="show-post-user-imgbox">
          <img
            className="show-post-user-img"
            src={
              !currentElement.url &&
              "https://www.ejin.ru/wp-content/uploads/2019/05/cvety-u-podnozhija-gor.jpg"
            }
            alt=""
          />
        </div>
        <div className="show-post-user-box">
          <h3 className="show-post-user-name">Linaz Gilyazov</h3>
          <div className="show-post-user-status">Основатель группы</div>
          <span className="show-post-user-date">
            {returnTimeIntervals(new Date(currentElement.created), new Date())}
          </span>
        </div>
      </div>
      <div className="show-post-content">{currentElement.content}</div>
      <div className="show-post-user-actions">
        <div className="show-post-user-actions-box">
          <button className="show-post-user-actions-btn">
            <span className="show-post-user-actions-like">
              <img src={like} alt="" />
            </span>
            <span className="show-post-user-actions-text">Нравится</span>
          </button>
        </div>
        <div className="show-post-user-actions-box">
          <button className="show-post-user-actions-btn">
            <span className="show-post-user-actions-comment">
              <img src={comment} alt="" />
            </span>
            <span className="show-post-user-actions-text">Комментировать</span>
          </button>
        </div>
      </div>
      <div className="show-post-actions">
        <Link to={`/posts/edit/${+params.id}`}>
          <button className="btn main-btn">Изменить</button>
        </Link>
        <button
          className="btn main-btn-err"
          onClick={() => onRemovePost(+params.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
