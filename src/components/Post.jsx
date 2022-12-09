import React from "react";

import { Link } from "react-router-dom";

import returnTimeIntervals from "../utils/timeInterval";

import like from "../img/icons/like.svg";
import comment from "../img/icons/comment.svg";
import smile from "../img/icons/smile.svg";
import photo from "../img/icons/photo.svg";
import gif from "../img/icons/gif.svg";
import ellipsisColor from "../img/icons/ellipsis-colar.svg";

export default function Post({ content, id, created }) {
  return (
    <Link to={`/posts/${id}`}>
      <div className="post">
        <div className="post-user-info">
          <div className="post-user-imgbox">
            <img className="post-user-info-img" src="" alt="" />
          </div>
          <div className="post-user-box">
            <h3 className="post-user-name">Linaz Gilyazov</h3>
            <div className="post-user-status">Основатель группы</div>
            <span className="post-user-date">
              {returnTimeIntervals(new Date(created), new Date())}
            </span>
          </div>
        </div>
        <div className="post-content">{content}</div>
        <div className="post-user-actions">
          <div className="post-user-actions-box">
            <button className="post-user-actions-btn">
              <span className="post-user-actions-like">
                <img src={like} alt="" />
              </span>
              <span className="post-user-actions-text">Нравится</span>
            </button>
          </div>
          <div className="post-user-actions-box">
            <button className="post-user-actions-btn">
              <span className="post-user-actions-comment">
                <img src={comment} alt="" />
              </span>
              <span className="post-user-actions-text">Комментировать</span>
            </button>
          </div>
        </div>
        <form className="post-form">
          <div className="post-form-imgbox">
            <img className="post-form-img" src="" alt="" />
          </div>
          <div className="post-form-inputbox">
            <input
              className="post-form-input"
              placeholder="Напишите комментарий..."
            />
            <span className="post-form-icon post-form-icon-smile">
              <img src={smile} alt="" />
            </span>
            <span className="post-form-icon post-form-icon-photo">
              <img src={photo} alt="" />
            </span>
            <span className="post-form-icon post-form-icon-gif">
              <img src={gif} alt="" />
            </span>
            <span className="post-form-icon post-form-icon-all">
              <img src={ellipsisColor} alt="" />
            </span>
          </div>
        </form>
      </div>
    </Link>
  );
}
