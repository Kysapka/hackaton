import React, {useState} from 'react';
import {Modal} from "./Modal";
import {Chat} from "./Chat";

export const ProfileMagic = () => {
    let [modal, setModal] = useState(false)
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
                <p onClick={()=>{setModal(true)}}>Добавить мероприятие</p>
                <p onClick={()=>{setChat(true)}}>Сообщения</p>
                <div>
                    <h3>Личные данные</h3>
                    <p>EMail</p>
                    <p>Telephone</p>
                    <p>SocialNetwork</p>
                </div>
            </div>
            {modal && <Modal modale={modal} setModale={setModal}/>}
            {chat && <Chat chat={chat} setChat={setChat}/>}
        </div>
    );
};

