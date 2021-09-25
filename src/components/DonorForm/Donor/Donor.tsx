import React from 'react';

type propsType = {
    addUser: () => void
    newUser: any
    setNewUser: (user: any) => void
    setformaEnter: (value: boolean) => void
}

export const Donor = (props:propsType) => {

    return (
        <div>
            <form>
                <p>Вы волшебник первого уровня,давайте познакомимся и вы
                    выберите вид помощи который вы хотите оказать</p>
                <div>
                    <input type={"text"} value={props.newUser.name} onChange={(e) => {
                        props.setNewUser({...props.newUser, name: e.currentTarget.value})
                    }}/>
                    <input type={"text"} value={props.newUser.password} onChange={(e) => {
                        props.setNewUser({...props.newUser,password: e.currentTarget.value})
                    }}/>

                </div>
                <div>
                    <input type="radio" id="contactChoice1" name="contact" value="event" onChange={(e) => {
                        props.setNewUser({...props.newUser, radio: e.currentTarget.value})
                    }}/>
                    <label htmlFor="contactChoice1">Я хочу организовать мероприятие</label>
                    <input type="radio" id="contactChoice2" name="contact" value="finance" onChange={(e) => {
                        props.setNewUser({...props.newUser, radio: e.currentTarget.value})
                    }}/>
                    <label htmlFor="contactChoice2">Оплачу курсы,куплю игрушки,помогу финансово</label>
                    <input type="radio" id="contactChoice3" name="contact" value="private" onChange={(e) => {
                        props.setNewUser({...props.newUser, radio: e.currentTarget.value})
                    }}/>
                    <label htmlFor="contactChoice3">Свяжитесь со мной лично</label>
                </div>
                <div>
                    <button type="submit" onClick={() => {
                        props.setformaEnter(true)
                        props.addUser()
import React, {useState} from 'react';
import {log} from "util";

export type userType = {
    name: string
    password: string
    formaEnter: boolean
    radio: string
}

type propsType = {
    addUser: () => void
    newUser: userType
    setNewUser: (user: userType) => void
    radio: string
    setRadio: (value: string) => void
    formaEnter: boolean
    setFormaEnter: (value: boolean) => void
    setError: (a: boolean) => void
}

export const Donor = (props: propsType) => {
        let [error, setError] = useState("")
        return (
            <div>
                <form>
                    {error && <h3 className={"error"}>{error}</h3>}
                    <p>Вы волшебник первого уровня,давайте познакомимся и вы
                        выберите вид помощи который вы хотите оказать</p>
                    <div>
                        <input type={"text"} value={props.newUser.name} onChange={(e) => {
                            props.setNewUser({...props.newUser, name: e.currentTarget.value})
                        }}/>
                        <input type={"text"} value={props.newUser.password} onChange={(e) => {
                            props.setNewUser({...props.newUser, password: e.currentTarget.value})
                        }}/>

                    </div>
                    <div>
                        <input type="radio" id="contactChoice1" name="contact" value="event" onChange={(e) => {
                            props.setRadio(e.currentTarget.value)
                        }}/>
                        <label htmlFor="contactChoice1">Я хочу организовать мероприятие</label>
                        <input type="radio" id="contactChoice2" name="contact" value="finance" onChange={(e) => {
                            props.setRadio(e.currentTarget.value)
                        }}/>
                        <label htmlFor="contactChoice2">Оплачу курсы,куплю игрушки,помогу финансово</label>
                        <input type="radio" id="contactChoice3" name="contact" value="private" onChange={(e) => {
                            props.setRadio(e.currentTarget.value)
                        }}/>
                        <label htmlFor="contactChoice3">Свяжитесь со мной лично</label>
                    </div>
                    <div>
                        <button type="submit" onClick={() => {
                            if (props.radio !== "") {
                                props.setFormaEnter(true)
                                props.addUser()
                            } else {
                                props.setError(true)
                            }
                        }}>Выбрать вид помощи
                        </button>
                    </div>
                </form>
            </div>
        );
    }
;

