import React, { useState } from 'react';

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
        <div className="donor">
            <div>
                <p className="donor__text">Вы волшебник первого уровня,давайте познакомимся и вы
                    выберите вид помощи который вы хотите оказать</p>
                <div className="donor__inputs">
                    <input className="donor__input" placeholder="Ваш логин" type={ 'text' } value={ props.newUser.name } onChange={ (e) => {
                        if (e.currentTarget.value !== '') {
                            props.setError(false);
                        }
                        props.setNewUser({...props.newUser, name: e.currentTarget.value});
                    } } />
                    <input className="donor__input" placeholder="Ваш пароль" type={ 'password' } value={ props.newUser.password } onChange={ (e) => {
                        if (e.currentTarget.value !== '') {
                            props.setError(false);
                        }
                        props.setNewUser({...props.newUser, password: e.currentTarget.value});
                    } } />

                </div>
                <div className="donor__radios">
                    <label className="donor__label" htmlFor="contactChoice1">
                        <input type="radio" id="contactChoice1" name="contact" value="event" onChange={ (e) => {
                            if (e.currentTarget.value !== '') {
                                props.setError(false);
                            }
                            props.setRadio(e.currentTarget.value)
                            ;
                        } } />
                        <span>Я хочу организовать мероприятие</span>
                    </label>

                    <label className="donor__label" htmlFor="contactChoice2">
                        <input type="radio" id="contactChoice2" name="contact" value="finance" onChange={ (e) => {
                            if (e.currentTarget.value !== '') {
                                props.setError(false);
                            }
                            props.setRadio(e.currentTarget.value);
                        } } />
                        <span>Оплачу курсы,куплю игрушки,помогу финансово</span>
                    </label>

                    <label className="donor__label" htmlFor="contactChoice3">
                        <input type="radio" id="contactChoice3" name="contact" value="private" onChange={ (e) => {
                            if (e.currentTarget.value !== '') {
                                props.setError(false);
                            }
                            props.setRadio(e.currentTarget.value);
                        } } />
                        <span>Свяжитесь со мной лично</span>
                    </label>
                </div>
                <div className="donor__button-box">
                    <button className="donor__button" onClick={ () => {
                        if (props.radio !== '') {
                            props.setformaEnter(true);
                            props.addUser();
                        } else {
                            props.setError(true);
                        }
                    } }>Выбрать вид помощи
                    </button>
                </div>
            </div>
        </div>
    );
};