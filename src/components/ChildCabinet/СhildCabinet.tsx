import React from 'react';
import ChildUser from "./ChildUser";
import s from './Cabinet.module.css'
import {Bonus} from "./Bonus";
import {PlannedEvents} from "./PlannedEvents";
import {Certificates} from "./Certificates";
import {RatingChild} from "./RatingChild";
import {Chat} from "./Chat";

export const ChildCabinet = () => {

    return (
        <div className={s.container}>
                <ChildUser/>
                <PlannedEvents/>
                <Bonus/>
                <Chat/>
                <Certificates/>
                <RatingChild/>
        </div>
    );
};