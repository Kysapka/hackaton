import React from 'react';

type propsType = {
    addUser: () => void
    newUser: any
    setNewUser: (user: any) => void
    setformaEnter: (value: boolean) => void
    setError:(error:boolean)=>void
}

export const Donor = (props:propsType) => {

    return (
        <div>
            <form>
                <p className="donor__text">Вы волшебник первого уровня, давайте познакомимся и Вы
                    выберите вид при помощи который вы хотите оказать помощь</p>
                <div className="donor__inputs">
                    <input className="donor__input" placeholder="Ваш логин" type={"text"} value={props.newUser.name} onChange={(e) => {
                        props.setNewUser({...props.newUser, name: e.currentTarget.value})
                    }}/>
                    <input className="donor__input" placeholder="Ваш пароль" type={"text"} value={props.newUser.password} onChange={(e) => {
                        props.setNewUser({...props.newUser,password: e.currentTarget.value})
                    }}/>

                </div>
                <div className="donor__radios">
                    <label className="donor__label">
                        <input type="radio" id="contactChoice1" name="contact" value="event" onChange={(e) => {
                            props.setNewUser({...props.newUser, radio: e.currentTarget.value})
                        }}/>
                        <span>Я хочу организовать мероприятие</span>
                    </label>

                    <label className="donor__label">
                        <input type="radio" id="contactChoice2" name="contact" value="finance" onChange={(e) => {
                            props.setNewUser({...props.newUser, radio: e.currentTarget.value})
                        }}/>
                        <span>Оплачу курсы,куплю игрушки,помогу финансово</span>
                    </label>

                    <label className="donor__label">
                        <input type="radio" id="contactChoice3" name="contact" value="private" onChange={(e) => {
                            props.setNewUser({...props.newUser, radio: e.currentTarget.value})
                        }}/>
                        <span>Свяжитесь со мной лично</span>
                    </label>
                </div>
                <div className="donor__button-box">
                    <button className="donor__button" type="submit" onClick={() => {
                        props.setformaEnter(true)
                        props.addUser()

                    }}>Выбрать вид помощи
                    </button>
                </div>
            </form>
        </div>
    );
};

