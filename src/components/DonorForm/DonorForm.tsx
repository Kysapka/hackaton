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
    let [radio, setRadio] = useState("")
    let [formaEnter, setFormaEnter] = useState(false)
    let [user, setUser] = useState<userType>({name: "", password: "", formaEnter: false, radio: ''})
    let [error, setError] = useState(false)
    // Firebase
    const {auth, firestore} = useContext<any>(Context)
    const [auth_user] = useAuthState(auth)
    // const [startForm, loading] = useCollectionData<any>()

    const addUser = async () => {
        firestore().collection('users').add(
            {
                ...user,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
    }

    return <div>
        {formaEnter}{user.radio}
        {formaEnter || <Donor addUser={addUser} newUser={user} setNewUser={setUser} setformaEnter={setformaEnter}/>}
        {user.radio === "private" && formaEnter && <Donorcontact/>}
        {user.radio === "event" &&   formaEnter && <DonorEvent/>}
        {user.radio === "finance" && formaEnter && <DonorFinance/>}
        {error && <h1>Ошибка</h1>}
        {formaEnter || <Donor addUser={addUser} newUser={user} setNewUser={setUser} radio={radio} setRadio={setRadio}
                              formaEnter={formaEnter} setFormaEnter={setFormaEnter} setError={setError}/>}
        {radio === "private" && formaEnter && <Donorcontact setError={setError}/>}
        {radio === "event" && formaEnter && <DonorEvent setError={setError}/>}
        {radio === "finance" && formaEnter && <DonorFinance/>}
        <Rating/>
    </div>
}