import React from 'react';
import {v1} from "uuid";

type propsType = {
    name: string
    setName: (value:string) => void
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
                    <input type={"text"} value={props.name} onChange={(e) => {
                        props.setName(e.currentTarget.value)
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
                        props.setFormaEnter(true);
                        // props.setUser([...users, {    ///////////dispatch
                        //     id: v1(),
                        //     name:props.name,
                        //     formaEnter:props.formaEnter,
                        //     radio: "event",
                        //     formaContact: false,
                        //     contact: "",
                        //     rating: "",
                        //     events: ""
                        // }])
                    }}>Выбрать вид помощи
                    </button>
                </div>
            </form>
        </div>
    );
};

Donor;