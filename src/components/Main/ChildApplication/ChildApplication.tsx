import React, {ChangeEvent, useState} from 'react';
import s from './Application.module.css'

import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../Store/Store";
import {addChildAC, childStateType} from "../../../Store/Reducer_Child";

export const ChildApplication: React.FC = () => {

    const dispatch = useDispatch()
    let childs = useSelector<RootStateType, childStateType>(state => state.childs)

    let [child, setChild] = useState<any>({})
    let [submitChildForm, setSubmitChildForm] = useState(false)

    const appChange = () => {
        dispatch(addChildAC(child.login, child.pass, child.valueYears, child.valueName, child.valueJob, child.valueArea))
        setSubmitChildForm(true)
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
                <button className={s.appButton} onClick={appChange}>Найди свой путь</button>
            </form>
        </div>

    );
};