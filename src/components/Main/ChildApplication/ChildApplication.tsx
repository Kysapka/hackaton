import React, {ChangeEvent, useState} from 'react';
import s from './Application.module.css'

type ApplicationType = {
    name:string
    age: string
    dream: string
}

export const ChildApplication: React.FC = () => {
    let [valueName, setValueName] = useState('')
    let [valueYears, setValueYears] = useState('')
    let [valueArea, setValueArea] = useState('')
    let [application, setApplication] = useState<Array<ApplicationType>>([])

    const nameHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValueName(e.currentTarget.value)
    }
    const yearsHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValueYears(e.currentTarget.value)
    }
    const areaHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        setValueArea(e.currentTarget.value)
    }
    const appChange = () => {
        setApplication([...application, {name:valueName, age:valueYears, dream:valueArea}])
    }
    return (
        <div>
            <form className={s.apply}>
                <h1 className={s.header}>Расскажи о себе</h1>
                <input value={valueName} type="text" placeholder={'Как тебя зовут'} className={s.appInput} onChange={nameHandler}/>
                <input value={valueYears}  type="text" placeholder={'Сколько тебе лет'} className={s.appInput} onChange={yearsHandler}/>
                <textarea name="dream"
                          placeholder={'Опиши мечту и что тебе необходимо для ее достижения'}
                          className={s.appTextarea} onChange={areaHandler} value={valueArea}/>
                <button type={"submit"} className={s.appButton} onClick={appChange}>Сообщить о мечте</button>
            </form>
        </div>

    );
};