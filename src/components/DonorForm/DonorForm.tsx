import React, {useContext, useState} from 'react';
import Rating from "../RaitingComponent/Rating";
import {Donor} from "./Donor/Donor";
import {DonorFinance} from "./DonorFinance/DonorFinance";
import {Donorcontact} from "./DonorContact/Donorcontact";
import {DonorEvent} from "./DonorEvent/DonorEvent";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Store/Store";
import {addSponsorAC, sponsorsStateType} from "../../Store/Reducer_Sponsor";

export const DonorForm = () => {
    const dispatch = useDispatch()
    const sponsors = useSelector<RootStateType, sponsorsStateType>(state => state.sponsors)
    const [error, setError] = useState(false)
    const [user, setUser] = useState<any>({})
    const [formaEnter, setformaEnter] = useState(false)
    const [radio, setRadio] = useState("")

    const addUser = () => {
        dispatch(addSponsorAC(user.name, true, user.radio))
    }

    return <div>
        {console.log(error)}
        {error && <h3>"Заполните необходимые поля"</h3>}
        {formaEnter || <Donor addUser={addUser}
                              newUser={user}
                              setNewUser={setUser}
                              setformaEnter={setformaEnter}
                              setError={setError} radio={radio} setRadio={setRadio}/>}
        {radio === "private" && formaEnter && <Donorcontact setError={setError}/>}
        {radio === "event" && formaEnter && <DonorEvent setError={setError}/>}
        {radio === "finance" && formaEnter && <DonorFinance />}
        <Rating/>
    </div>
}