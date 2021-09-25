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
                <p className="donor__text">Здравствуйте, (имя/фамилия)</p>
                <div>
                    <label className="donor__item">
                        <span className="donor__span">Введите свой email</span>
                        <input className="donor__input" type={"text"} value={contactMail} onChange={(e) => {
                            setContactMail(e.currentTarget.value)
                        }}/>
                    </label>

                    <label className="donor__item">
                        <span className="donor__span">Введите название мероприятия</span>
                        <input className="donor__input" type={"text"} value={nameEvent} onChange={(e) => {
                            setnameEvent(e.currentTarget.value)
                        }}/>
                    </label>

                    <label className="donor__textarea">
                        <span>Расскажите о мероприятии которое хотите провести максимально подробно</span>
                        <textarea value={contactTextarea} onChange={(e) => {
                            setTextArea(e.currentTarget.value)
                        }}/>
                    </label>
                </div>
                <div className="donor__contact">
                    <Button text="Отправить" link="/index/magic-profile"/>
                </div>
            </form>
        </div>
    );
};

