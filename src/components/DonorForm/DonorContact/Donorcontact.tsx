import React, {useState} from 'react';

type propsType={
    setError:(a:boolean)=>void
}
export const Donorcontact = (props:propsType) => {
    let [contactMail, setContactMail] = useState("")
    let [contactSocial, setContactSocial] = useState("")
    let [contactTelephone, setContactTelephone] = useState("")
    let [contactTextarea, setTextArea] = useState("")
    // let [error, setError] = useState(false)
    return (
        <div>
            {/*{console.log(error)}*/}
            <div>
                <p>Здравствуйте</p>
                <div>
                    {/*{error && <h3 className={"error"}>{"Заполните необходимые поля"}</h3>}*/}
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
                    <button  onClick={() => {
                        props.setError(true);
                    }}>отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

