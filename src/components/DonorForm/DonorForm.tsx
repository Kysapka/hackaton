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
    let sponsors = useSelector<RootStateType, sponsorsStateType>(state => state.sponsors)

    let [user, setUser] = useState<any>({})
    let [formaEnter, setformaEnter] = useState(false)

    const addUser = () => {
        dispatch(addSponsorAC(user.name, true, user.radio ))
    }

    return <div>
        {formaEnter}{user.radio}
        {formaEnter || <Donor addUser={addUser} newUser={user} setNewUser={setUser} setformaEnter={setformaEnter}/>}
        {user.radio === "private" && formaEnter && <Donorcontact/>}
        {user.radio === "event" &&   formaEnter && <DonorEvent/>}
        {user.radio === "finance" && formaEnter && <DonorFinance/>}
        <Rating/>
    </div>
}

