import React, {ChangeEvent, useState} from 'react';
import s from './Application.module.css'

type ApplicationType = {
    name:string
    age: string
    dream: string
    job: string
}

export const ChildApplication: React.FC = () => {
    let [valueName, setValueName] = useState('')
    let [valueYears, setValueYears] = useState('')
    let [valueArea, setValueArea] = useState('')
    let [valueJob, setValueJob] = useState('')
    let [application, setApplication] = useState<Array<ApplicationType>>([])

    const nameHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValueName(e.currentTarget.value)
    }
    const jobHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValueJob(e.currentTarget.value)
    }
    const yearsHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setValueYears(e.currentTarget.value)
    }
    const areaHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        setValueArea(e.currentTarget.value)
    }
    const appChange = () => {
        setApplication([...application, {name:valueName, age:valueYears, dream:valueArea, job: valueJob}])
    }
    return (
        <div>
            <form className={s.apply}>
                <h1 className={s.header}>Расскажи о себе</h1>
                <input value={valueName} type="text" placeholder={'Как тебя зовут'} className={s.appInput} onChange={nameHandler}/>
                <input value={valueYears}  type="text" placeholder={'Сколько тебе лет'} className={s.appInput} onChange={yearsHandler}/>
                <input value={valueJob}  type="text" placeholder={'Кем ты хочешь стать'} className={s.appInput} onChange={jobHandler}/>
                <textarea name="dream"
                          placeholder={'Расскажи о своих увлечениях и достижениях'}
                          className={s.appTextarea} onChange={areaHandler} value={valueArea}/>
                <button type={"submit"} className={s.appButton} onClick={appChange}>Найди свой путь</button>
            </form>
        </div>

    );
};