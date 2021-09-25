import React from 'react';
import s from './Cabinet.module.css'
export type ChildUserType={
    avatar:string
    name:string
    age:string
}

export const ChildUser = () => {
    const user = {
        avatar:"https://cdnimg.rg.ru/img/content/165/89/88/kinopoisk.ru-Shrek-2-644132_d_850.jpg",
        name: "Migel",
        age:"12",
    }
    return (
        <div className={s.gridItem}>
            <img src={user.avatar} className={s.avatar}/>
            <span>{user.name}</span> <span>{user.age}</span>
        </div>
    );
};

export default ChildUser;