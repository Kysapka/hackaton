import React, {useState} from "react";

export type ChatProps = { chat: boolean, setChat: (modale: boolean) => void }
export const Chat = (props: ChatProps) => {

    const modal = {
        height: "200px",
        width: "200px",
        backgroundColor: "red",
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
    let [message, setMessage] = useState({})

    return (
        <div style={modal} onClick={() => props.setChat(false)}>
            <div style={modalContent} onClick={(e) => {
                e.stopPropagation()
            }}>
                <button onClick={() => props.setChat(false)}>x
                </button>
            </div>
        </div>
    );
};