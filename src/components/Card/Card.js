import React, {useEffect, useState} from 'react';
import {POSTS_FOR_ONE_LOAD} from "../CardsWrapper/CardsWrapper";
import './Card.scss';

const ANIMATION_DELAY = 0.2

const Card = ({ post, tilesView, idx }) => {
  const { imgSrc, imageUpload, today, endDate } = post;
  const [todayLikes, setTodayLikes] = useState(today.likes);
  const [endLikes, setEndLikes] = useState(endDate.likes);
  const [delay, setDelay] = useState(`${(idx % POSTS_FOR_ONE_LOAD) * ANIMATION_DELAY}s`);

  useEffect(() => {
    setDelay(`${(idx % POSTS_FOR_ONE_LOAD) * ANIMATION_DELAY}s`);
  }, [idx]);

  const handleLikes = (type) => {
    if (type === 'today') {
      setTodayLikes(todayLikes + 1);
    } else if (type === 'end') {
      setEndLikes(endLikes + 1);
    }
  };

  return (
    <div className={`card ${tilesView ? 'tiles' : ''}`} style={{ animationDelay: delay }}>
      <div className="card__img-wrapper">
        <img className="card__img" src={imgSrc} alt={`img ${idx + 1}`} />
      </div>
      <div className="card__content">
        <div className="card__today">
          Today
          <div className="card__info">
            <div className="card__info-block" onClick={() => handleLikes('today')}>
              <svg className="card__like" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 6.3C1.49991 5.76177 1.6071 5.22893 1.8153 4.73261C2.02351 4.23629 2.32855 3.78644 2.71261 3.40937C3.09667 3.03229 3.55203 2.73555 4.05209 2.53649C4.55215 2.33742 5.08687 2.24003 5.625 2.25C6.26172 2.24662 6.89189 2.3786 7.47374 2.6372C8.05559 2.8958 8.57584 3.27511 9 3.75C9.42416 3.27511 9.94441 2.8958 10.5263 2.6372C11.1081 2.3786 11.7383 2.24662 12.375 2.25C12.9131 2.24003 13.4479 2.33742 13.9479 2.53649C14.448 2.73555 14.9033 3.03229 15.2874 3.40937C15.6714 3.78644 15.9765 4.23629 16.1847 4.73261C16.3929 5.22893 16.5001 5.76177 16.5 6.3C16.5 10.317 11.7157 13.35 9 15.75C6.29025 13.3297 1.5 10.32 1.5 6.3Z" fill="black" />
              </svg>
              {todayLikes}
            </div>
            <div className="card__info-block">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black" />
              </svg>
              {today.comments}
            </div>
          </div>
        </div>
        <div className="card__end-date">
          {endDate.date}
          <div className="card__info">
            <div className="card__info-block" onClick={() => handleLikes('end')}>
              <svg className="card__like" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 6.3C1.49991 5.76177 1.6071 5.22893 1.8153 4.73261C2.02351 4.23629 2.32855 3.78644 2.71261 3.40937C3.09667 3.03229 3.55203 2.73555 4.05209 2.53649C4.55215 2.33742 5.08687 2.24003 5.625 2.25C6.26172 2.24662 6.89189 2.3786 7.47374 2.6372C8.05559 2.8958 8.57584 3.27511 9 3.75C9.42416 3.27511 9.94441 2.8958 10.5263 2.6372C11.1081 2.3786 11.7383 2.24662 12.375 2.25C12.9131 2.24003 13.4479 2.33742 13.9479 2.53649C14.448 2.73555 14.9033 3.03229 15.2874 3.40937C15.6714 3.78644 15.9765 4.23629 16.1847 4.73261C16.3929 5.22893 16.5001 5.76177 16.5 6.3C16.5 10.317 11.7157 13.35 9 15.75C6.29025 13.3297 1.5 10.32 1.5 6.3Z" fill="black" />
              </svg>
              {endLikes}
            </div>
            <div className="card__info-block">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black" />
              </svg>
              {endDate.comments}
            </div>
          </div>
        </div>
        <div className="card__upload-image">
          <p>Image upload</p>
          <span>{imageUpload}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
