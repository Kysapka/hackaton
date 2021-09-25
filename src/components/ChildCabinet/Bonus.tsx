import React from 'react';
import s from "./Cabinet.module.css";

export const Bonus = () => {
    return (
        <div className={s.gridItem}>
             <span className={s.title}>Бонус</span>
            <img src="https://png.pngtree.com/element_origin_min_pic/16/09/08/1157d0df8d6c5e4.jpg" alt="" className={s.avatar}/>
        </div>
    );
};
