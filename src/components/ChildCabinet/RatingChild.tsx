import React from 'react';
import s from "./Cabinet.module.css";

export const RatingChild = () => {
    return (
            <div className={s.gridItem}>
                <span className={s.title}>Рейтинг</span>
                <img src="https://hscdn.ru/blog/media/2021/03/b973b12ff53f289eb02c6d9ef9770f87.png" alt="" className={s.avatar}/>
                <span>У вас 100500 баллов</span>
            </div>
    );
};

