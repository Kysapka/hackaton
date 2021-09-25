import React, {useState} from 'react';

export const Donorcontact = () => {
    let [contact, setContact] = useState("")
    return (
        <div>
            <form>
                <p>Здравствуйте</p>
                <div>
                    <input type={"text"} value={contact}/>
                </div>
                <div>
                    тут должна быть форма для связи емайл и другие контакты
                </div>
                <div>
                    <button type="submit">отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

