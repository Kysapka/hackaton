import React, {useState} from 'react';
import Rating from "../RaitingComponent/Rating";
import {v1} from "uuid";
import {initUserType} from "../../Store/Reducer_User";
import {DonorEvent} from "./DonorEvent/DonorEvent";



export const DonorForm = () => {

    let [name, setName] = useState("")
    let [radio, setRadio] = useState("event")
    let [formaEnter, setFormaEnter] = useState(false)
    let [formaContact, setFormaContact] = useState(false)
    let [users, setUser] = useState<initUserType>([])
    let [contact, setContact] = useState("")

    // }

    return (
        <div>
            {formaEnter || <DonorEvent name={name} setName={setName}  radio={radio} setRadio={setRadio} formaEnter={formaEnter}setFormaEnter={setFormaEnter}/>}
            {formaEnter && <form>
                <p>Здравствуйте</p>
                <div>
                    <input type={"text"} value={contact}/>
                </div>
                <div>

                </div>
                <div>
                    <button type="submit">отправить
                    </button>
                </div>
            </form>}
            <Rating/>
        </div>
    );
}
;

