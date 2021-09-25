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
                <p>Здравствуйте</p>
                <div>
                    <input type="email" value={contactMail} onChange={(e) => {
                        setContactMail(e.currentTarget.value)
                    }}/>
                    <label>Введите свой емэйл</label>
                    <input type="text" value={contactSocial} onChange={(e) => {
                        setContactSocial(e.currentTarget.value)
                    }}/>
                    <label>Введите ссылку на соцсеть</label>
                    <input type="tel" value={contactTelephone} onChange={(e) => {
                        setContactTelephone(e.currentTarget.value)
                    }}/>
                    <label>Введите свой телефон</label>
                    <textarea value={contactTextarea} onChange={(e) => {
                        setTextArea(e.currentTarget.value)
                    }}/>
                    <label>Расскажите о себе,например,я преподователь английского и хочу оказать адресную помощь</label>
                </div>
                <div>
                    <Button text="Отправить" link="/index/magic-profile" />
                </div>
            </form>
        </div>
    );
};

