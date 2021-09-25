import React, {ChangeEvent, useContext, useState} from 'react';
import s from './Application.module.css'
import firebase from "firebase/compat";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../Store/Store";
import {sponsorsStateType} from "../../../Store/Reducer_Sponsor";
import {addChildAC, childStateType} from "../../../Store/Reducer_Child";
import { Button } from '../../Button/Button';

type ApplicationType = {
    name: string
    age: string
    dream: string
    job: string
}

export const ChildApplication: React.FC = () => {

    const dispatch = useDispatch()
    let   childs = useSelector<RootStateType, childStateType>(state => state.childs)

    let [child, setChild] = useState<any>({login: "",pass:"" ,valueName: '', valueYears: '', about: '', dream: ''})

    const appChange = () => {
        dispatch(addChildAC())
    }

    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChild({...child, valueName: e.currentTarget.value})
    }
    const jobHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChild({...child, valueJob: e.currentTarget.value})

    }
    const yearsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChild({...child, valueYears: e.currentTarget.value})

    }
    const areaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChild({...child, valueArea: e.currentTarget.value})

    }

    const loginHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChild({...child, login: e.currentTarget.value})

    }

    const passHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChild({...child, pass: e.currentTarget.value})
    }

    return (
        <div>
            <form className={s.apply}>
                <h1 className={s.header}>Расскажи о себе</h1>
                <input type="text" value={child.login} placeholder={'Введи логин'} className={s.appInput}
                       onChange={loginHandler}/>
                <input type="password" value={child.pass} placeholder={'Введи пароль'} className={s.appInput}
                       onChange={passHandler}/>
                <input value={child.valueName} type="text" placeholder={'Как тебя зовут'} className={s.appInput}
                       onChange={nameHandler}/>
                <input value={child.valueYears} type="text" placeholder={'Сколько тебе лет'} className={s.appInput}
                       onChange={yearsHandler}/>
                <input value={child.valueJob} type="text" placeholder={'Кем ты хочешь стать'} className={s.appInput}
                       onChange={jobHandler}/>
                <textarea name="dream"
                          placeholder={'Расскажи о своих увлечениях и достижениях'}
                          className={s.appTextarea} onChange={areaHandler} value={child.valueArea}/>
                <Button text="Найди свой путь" link="/index/child-profile" onClick={appChange} />
            </form>
        </div>

    );
};