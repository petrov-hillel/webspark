import React, { useState } from 'react';
import { posts } from '../../data/posts';
import './CardsWrapper.scss';
import Card from '../Card/Card';

export const POSTS_FOR_ONE_LOAD = 4

const CardsWrapper = () => {
  const [tilesView, setTilesView] = useState(false)
  const [loadedCards, setLoadedCards] = useState(POSTS_FOR_ONE_LOAD);

  const loadMoreCards = () => {
    setLoadedCards(loadedCards + POSTS_FOR_ONE_LOAD);
  };

  return (
    <div className="cards-wrapper">
      <div className="container">
        <div className="cards-wrapper__views">
          <div className={`cards-wrapper__views-rows ${tilesView ? 'tiles' : 'rows'}`}
               onClick={() => setTilesView(false)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="6" height="6" fill="#3D8EDA"/>
              <rect x="8" width="6" height="6" fill="#3D8EDA"/>
              <rect x="16" width="6" height="6" fill="#3D8EDA"/>
              <rect y="8" width="6" height="6" fill="#3D8EDA"/>
              <rect y="16" width="6" height="6" fill="#3D8EDA"/>
              <rect x="8" y="8" width="6" height="6" fill="#3D8EDA"/>
              <rect x="8" y="16" width="6" height="6" fill="#3D8EDA"/>
              <rect x="16" y="8" width="6" height="6" fill="#3D8EDA"/>
              <rect x="16" y="16" width="6" height="6" fill="#3D8EDA"/>
            </svg>
          </div>
          <div className={`cards-wrapper__views-tiles ${tilesView ? 'tiles' : 'rows'}`}
               onClick={() => setTilesView(true)}
          >
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="6" height="6" fill="#C8C7C7"/>
              <rect y="8" width="6" height="6" fill="#C8C7C7"/>
              <rect y="16" width="6" height="6" fill="#C8C7C7"/>
              <rect x="9" y="10" width="15" height="2" fill="#C8C7C7"/>
              <rect x="9" y="18" width="15" height="2" fill="#C8C7C7"/>
              <rect x="9" y="2" width="15" height="2" fill="#C8C7C7"/>
            </svg>
          </div>
        </div>
        <div className={`cards-wrapper__cards ${tilesView ? 'tiles' : ''}`}>
          {posts
            ? posts.slice(0, loadedCards).map((post,idx) => <Card key={idx} post={post} idx={idx} tilesView={tilesView} />)
            : <p>No posts available</p>}
        </div>
        {loadedCards < posts.length && (
          <button className={`cards-wrapper__load-more ${tilesView ? 'tiles' : ''}`}
                  onClick={loadMoreCards}>Load more</button>
          )
        }
      </div>
    </div>
  );
};

export default CardsWrapper;