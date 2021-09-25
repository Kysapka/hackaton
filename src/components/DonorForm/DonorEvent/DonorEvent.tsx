import React, {useState} from 'react';
import {Button} from '../../Button/Button';

type propTypeEvent = {
    setError: (error: boolean) => void
}
export const DonorEvent = (props: propTypeEvent) => {

    let [nameEvent, setnameEvent] = useState("")
    let [contactMail, setContactMail] = useState("")
    let [contactTextarea, setTextArea] = useState("")
    return (
        <div>
            <form>
                <p>Здравствуйте</p>
                <div>
                    <input type={"text"} value={contactMail} onChange={(e) => {
                        setContactMail(e.currentTarget.value)
                    }}/>
                    <label>Введите свой емэйл</label>
                    <input type={"text"} value={nameEvent} onChange={(e) => {
                        setnameEvent(e.currentTarget.value)
                    }}/>
                    <label>Введите название мероприятия</label>
                    <textarea value={contactTextarea} onChange={(e) => {
                        setTextArea(e.currentTarget.value)
                    }}/>
                    <label>Расскажите о мерприятии которое хотите провести максимально подробно</label>
                </div>
                <div>
                    <Button text="Отправить"  link="/index/magic-profile"/>
                </div>
            </form>
        </div>
    );
};

