import React, {useContext, useState} from 'react';
import Rating from "../RaitingComponent/Rating";
import {v1} from "uuid";
import {initUserType} from "../../Store/Reducer_User";
import {Donor,userType} from "./Donor/Donor";
import {DonorFinance} from "./DonorFinance/DonorFinance";
import {Donorcontact} from "./DonorContact/Donorcontact";
import {DonorEvent} from "./DonorEvent/DonorEvent";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

export const DonorForm = () => {

    // let [name, setName] = useState("")
    let [radio, setRadio] = useState("event")
    let [formaEnter, setFormaEnter] = useState(false)
    let [formaContact, setFormaContact] = useState(false)
    let [user, setUser] = useState<userType>({name: "", formaEnter: false, radio: ''})

    // Firebase
    const {auth, firestore} = useContext<any>(Context)
    const [auth_user] = useAuthState(auth)
    // const [startForm, loading] = useCollectionData<any>()

    const addUser = async () => {
            firestore().collection('users').add(
                {   ...user,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }
            )
    }

    return <div>
            {formaEnter || <Donor addUser={addUser} newUser={user} setNewUser={setUser} radio={radio} setRadio={setRadio} formaEnter={formaEnter} setFormaEnter={setFormaEnter}/>}
            {<Donorcontact/>}
            {<DonorEvent/>}
            {<DonorFinance/>}
            <Rating/>
        </div>
}

