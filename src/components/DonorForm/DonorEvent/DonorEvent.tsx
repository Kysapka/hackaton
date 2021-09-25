import React, {useState} from 'react';
type propsType={
    setError:(a:boolean)=>void
}
export const DonorEvent = (props:propsType) => {
    let [contactMail, setContactMail] = useState("")
    let [contactSocial, setContactSocial] = useState("")
    let [event, setEvent] = useState("")


    return (
        <div>
            <form>
                <p>Здравствуйте</p>
                <div>
                    <textarea value={event} onChange={(e) => {
                        setEvent(e.currentTarget.value)
                    }}/> <label>Расскажите максимально подробно о мероприятии которое вы готовы провести</label>
                    <input type={"text"} value={contactMail}onChange={(e) => {
                        setContactMail(e.currentTarget.value)
                    }}/> <label>Введите свой емэйл</label>
                    <input type={"text"} value={contactSocial}onChange={(e) => {
                        setContactSocial(e.currentTarget.value)
                    }}/><label>Введите ссылку на соцсеть</label>
                </div>
                <div>
                    тут должна быть форма для описания события
                </div>
                <div>
                    <button type="submit" onClick={()=>{contactMail && contactSocial ==="" ? props.setError(true):"" }}>отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

