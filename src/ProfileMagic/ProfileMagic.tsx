import React, {useState} from 'react';
import {Modale} from "./Modale";
import {Chat} from "./chat";

export const ProfileMagic = () => {
    let [modale, setModale] = useState(false)
    let [chat,setChat]=useState(false)
    return (
        <div>
            <div>
                <h1>Профиль волшебника</h1>
                <h3>Здравствуйте,(обьект.имя)</h3>
                <p>Ваш рейтинг(количество рейтинга увеличивается когда вы помогаете ребенку или сундук от
                    волшебника открыт)</p>
                <p>Вы сделали счастливее(количество детей которым была оказана помощь)</p>
                <p>Помочь еще одному мечтателю</p>
                <p>Запланированные мероприятия</p>
                <p>Мероприятия которые вы провели</p>
                <p onClick={()=>{setModale(true)}}>Добавить мероприятие</p>
                <p onClick={()=>{setChat(true)}}>Сообщения</p>
                <div>
                    <h3>Личные данные</h3>
                    <p>EMail</p>
                    <p>Telephone</p>
                    <p>SocialNetwork</p>
                </div>
            </div>
            {modale && <Modale modale={modale} setModale={setModale}/>}
            {chat && <Chat chat={chat} setChat={setChat}/>}
        </div>
    );
};

