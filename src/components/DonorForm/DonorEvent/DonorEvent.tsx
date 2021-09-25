import React, {useState} from 'react';

export const DonorEvent = () => {
    let [contact, setContact] = useState("")
    return (
        <div>
            <form>
                <p>Здравствуйте</p>
                <div>
                    {/*{}*/}
                    <input type={"text"} value={contact}/>
                    <textarea/>
                </div>
                <div>
                    тут должна быть форма для описания события
                </div>
                <div>
                    <button type="submit">отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

