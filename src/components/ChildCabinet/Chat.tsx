import React from 'react';
import s from "./Cabinet.module.css";

export const Chat = () => {
    return (
        <div className={s.gridItem}>
            <span className={s.title}>Обратная связь</span>
            <div>
                <a href="#">Детский дом</a>
            </div>
            <div>
                <a href="#">Благотворитель</a>
            </div>
            <div>
                <a href="#">Министерство образования</a>
            </div>
        </div>
    );
};

