import React from 'react';
import s from './Cabinet.module.css'

export type PlannedEventsType ={
    id:string
    img:string
    name:string
}

export const PlannedEvents = () => {
    let events:Array<PlannedEventsType> = [
        {id:"1",img:"https://myrosmol.ru/images/events/53094/53094.jpg?1605608379",name:"Хакатон"},
        {id:"2",img:"https://myrosmol.ru/images/events/53094/53094.jpg?1605608379",name:"Димыч Найт Шоу"},
        {id:"3",img:"https://myrosmol.ru/images/events/53094/53094.jpg?1605608379",name:"Monkey"}
    ]
    return (
        <div className={s.gridItem}>
            <span className={s.title}>Подсписка на события</span>
            <div className={s.eventList}>
                {events.map(e => <div key={e.id}><img src={e.img} className={s.eventsImg}/>{e.name}</div>)}
            </div>
        </div>
    );
};

