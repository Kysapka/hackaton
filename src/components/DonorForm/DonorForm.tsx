import React, {useContext, useState} from 'react';
import Rating from "../RaitingComponent/Rating";
import {v1} from "uuid";
import {initUserType} from "../../Store/Reducer_User";
import {Donor, userType} from "./Donor/Donor";
import {DonorFinance} from "./DonorFinance/DonorFinance";
import {Donorcontact} from "./DonorContact/Donorcontact";
import {DonorEvent} from "./DonorEvent/DonorEvent";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

export const DonorForm = () => {


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
        {error && <h1>Ошибка</h1>}
        {formaEnter || <Donor addUser={addUser} newUser={user} setNewUser={setUser} radio={radio} setRadio={setRadio}
                              formaEnter={formaEnter} setFormaEnter={setFormaEnter} setError={setError}/>}
        {radio === "private" && formaEnter && <Donorcontact setError={setError}/>}
        {radio === "event" && formaEnter && <DonorEvent setError={setError}/>}
        {radio === "finance" && formaEnter && <DonorFinance/>}
        <Rating/>
    </div>
}

