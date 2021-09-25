import React from 'react';
import s from "./Cabinet.module.css";

export type CertificateType ={
    img:string
    id:string
}

export const Certificates = () => {
    let certificates: Array<CertificateType> = [
        {id:"1",img:"https://myrosmol.ru/images/events/53094/53094.jpg?1605608379"},
        {id:"2",img:"https://myrosmol.ru/images/events/53094/53094.jpg?1605608379"},
        {id:"3",img:"https://myrosmol.ru/images/events/53094/53094.jpg?1605608379"},

    ]
    return (
        <div className={s.gridItem}>
            <span className={s.title}>Сертификаты</span>
            <div className={s.certificatesList}>
                {certificates.map(e => <div key={e.id}><img src={e.img} className={s.certificatesImg}/></div>)}
            </div>
        </div>
    );
};

