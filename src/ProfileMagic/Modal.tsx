import React, {useState} from 'react';


export type ModaleProps = { modale: boolean, setModale: (modale: boolean) => void }
export const Modal = (props: ModaleProps) => {

    const modal = {
        height: "100hv",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.4)",
        // position:"fixed",
        display: "flex",
        justifyContent: "center",
        top: "0",
        left: "0",

    }

    const modalContent = {
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "white",
        height: "200px",
        width: "400px",
        alignItems: "center"

    }
    let [nameEvent, setnameEvent] = useState("")
    let [events, setevents] = useState("")
    return (
        <div style={modal} onClick={() => props.setModale(false)}>
            <div style={modalContent} onClick={(e) => {
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

