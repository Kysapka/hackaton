import React, {useState} from 'react';


export type ModaleProps = { modale: boolean, setModale: (modale: boolean) => void }
export const Modal = (props: ModaleProps) => {
    let [nameEvent, setnameEvent] = useState("")
    let [events, setevents] = useState("")
    return (
        <div className="modal" onClick={() => props.setModale(false)}>
            <div className="modal__content" onClick={(e) => {
                e.stopPropagation()
            }}>
                <input type="tel" value={nameEvent} onChange={(e) => {
                    setnameEvent(e.currentTarget.value)
                }}/>
                <label>Название мероприятия</label>
                <textarea value={events} onChange={(e) => {
                    setevents(e.currentTarget.value)
                }}/>
                <label>Опишите мероприятие максимально подробно</label>
                <button onClick={() => {
                }}>отправить
                </button>
            </div>
        </div>
    );
};

