import React, {useContext, useState} from 'react';

export type userType = {
    name: string
    formaEnter: boolean
    radio: string
}

type propsType = {
    addUser: () => void
    newUser: userType
    setNewUser: (user: userType) => void
    radio: string
    setRadio: (value:string) => void
    formaEnter:boolean
    setFormaEnter:(value:boolean)=>void
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
                        props.setFormaEnter(true)
                        props.addUser()
                    }}>Выбрать вид помощи
                    </button>
                </div>
            </form>
        </div>
    );
};

