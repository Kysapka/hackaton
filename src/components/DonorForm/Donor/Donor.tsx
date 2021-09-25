import React, {useState} from 'react';

type propsType = {
    addUser: () => void
    newUser: any
    setNewUser: (user: any) => void
    setformaEnter: (value: boolean) => void
    setError: (error: boolean) => void
    radio: string
    setRadio: (radio: string) => void
}

export const Donor = (props: propsType) => {

    return (
        <div>
            <div>
                <p>Вы волшебник первого уровня,давайте познакомимся и вы
                    выберите вид помощи который вы хотите оказать</p>
                <div>
                    <input type={"text"} value={props.newUser.name} onChange={(e) => {
                        if (e.currentTarget.value !== "") {
                            props.setError(false)
                        }
                        props.setNewUser({...props.newUser, name: e.currentTarget.value})
                    }}/>
                    <input type={"password"} value={props.newUser.password} onChange={(e) => {
                        if (e.currentTarget.value !== "") {
                            props.setError(false)
                        }
                        props.setNewUser({...props.newUser, password: e.currentTarget.value})
                    }}/>

                </div>
                <div>
                    <input type="radio" id="contactChoice1" name="contact" value="event" onChange={(e) => {
                        if (e.currentTarget.value !== "") {
                           props.setError(false)
                        }props.setRadio(e.currentTarget.value)
                        ;
                    }}/>
                    <label htmlFor="contactChoice1">Я хочу организовать мероприятие</label>
                    <input type="radio" id="contactChoice2" name="contact" value="finance" onChange={(e) => {
                        if (e.currentTarget.value !== "") {
                            props.setError(false)
                        }props.setRadio(e.currentTarget.value)
                    }}/>
                    <label htmlFor="contactChoice2">Оплачу курсы,куплю игрушки,помогу финансово</label>
                    <input type="radio" id="contactChoice3" name="contact" value="private" onChange={(e) => {
                        if (e.currentTarget.value !== "") {
                            props.setError(false)
                        }props.setRadio(e.currentTarget.value)
                    }}/>
                    <label htmlFor="contactChoice3">Свяжитесь со мной лично</label>
                </div>
                <div>
                    <button onClick={() => {
                        if (props.radio !== "") {
                            console.log(props.radio)
                            props.setformaEnter(true)
                            props.addUser()
                        } else {
                            props.setError(true)
                        }

                    }}>Выбрать вид помощи
                    </button>
                </div>
            </div>
        </div>
    );
};

