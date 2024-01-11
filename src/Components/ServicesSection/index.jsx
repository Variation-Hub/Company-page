import React from 'react'
import Style from './style.module.css';
import CardComponent from '../../Contains/Card';
import { CardData } from '../../Contanst';

const ServicesSection = () => {
    return (
        <section className={`${Style.service_section}`}>
            <h1>Services</h1>
            <div className={`${Style.cards}`}>
                {CardData?.map(item => <CardComponent key={item.id} item={item}/>)}
            </div>
        </section>
    )
}

export default ServicesSection