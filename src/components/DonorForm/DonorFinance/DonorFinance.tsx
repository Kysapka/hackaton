import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../Store/Store";
import {childStateType} from "../../../Store/Reducer_Child";

export const DonorFinance = () => {
    let childs = useSelector<RootStateType, childStateType>(state => state.childs)
    console.log(childs)
    return (
        <div>
            <div>
                {childs.map(el => <div key={el.id}><p>{el.valueName}</p><p>{el.valueYears}</p></div>)}
            </div>
        </div>
    );
};

