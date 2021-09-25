import React, { useRef, useState } from 'react';

export type ChatProps = { chat: boolean, setChat: (modale: boolean) => void }
export const Chat = (props: ChatProps) => {
	let [ message, setMessage ] = useState({});

	const $chat = useRef(null);

	return (
		<div className="chat" ref={$chat} onClick={ () => props.setChat(false) }>
			<div className="chat__inner" onClick={ (e) => {
				e.stopPropagation();
			} }>
				<div className="chat__header" />
				<button className="chat__close" onClick={ () => props.setChat(false) }>x</button>
				<div className="chat__content" />
				<div className="chat__footer" />
			</div>
		</div>
	);
};