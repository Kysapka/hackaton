import React, {useState} from 'react';
import { Button } from '../../Button/Button';
type propTypeContact={
    setError:(error:boolean)=>void
}

export const Donorcontact = (props:propTypeContact) => {
    let [contactMail, setContactMail] = useState("")
    let [contactSocial, setContactSocial] = useState("")
    let [contactTelephone, setContactTelephone] = useState("")
    let [contactTextarea, setTextArea] = useState("")
    return (
        <div>
            <form>
                <p className="donor__text">Здравствуйте, (имя/фамилия)</p>
                <div>
                    <label className="donor__item">
                        <span className="donor__span">Введите свой email</span>
                        <input className="donor__input" type="email" value={contactMail} onChange={(e) => {
                            setContactMail(e.currentTarget.value)
                        }}/>
                    </label>

                    <label className="donor__item">
                        <span className="donor__span">Введите ссылку на соцсеть</span>
                        <input className="donor__input" type="text" value={contactSocial} onChange={(e) => {
                            setContactSocial(e.currentTarget.value)
                        }}/>
                    </label>

                    <label className="donor__item">
                        <span className="donor__span">Введите свой телефон</span>
                        <input className="donor__input" type="tel" value={contactTelephone} onChange={(e) => {
                            setContactTelephone(e.currentTarget.value)
                        }}/>
                    </label>

                    <label className="donor__textarea">
                        <span>Расскажите о себе, например, я преподаватель английского и хочу оказать адресную помощь</span>
                        <textarea value={contactTextarea} onChange={(e) => {
                            setTextArea(e.currentTarget.value)
                        }}/>
                    </label>
                </div>
                <div className="donor__contact">
                    <Button className="donor__contact" text="Отправить" link="/index/magic-profile" />
                </div>
            </form>
        </div>
    );
};

