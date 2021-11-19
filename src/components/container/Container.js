import React from 'react'
import { Cards} from '../Cards'
import { Card2} from '../Card2'
import { Slider } from '../Slider'
import '../../styles/principal.css';

export const Container = ({productos, populares}) => {
    return (
        <div>
            <Slider/>
            <div className="supercontainer">
            <div className="containercard1">
            <h3 className="textcontcard1"><strong>Ofertas</strong></h3>
            <Cards productos={productos}/></div>
            <div className="containercard2">
            <h3 className="textcontcard2"><strong>Los mas Populares</strong></h3>
            <Card2 populares={populares}/></div>
            </div>
        </div>
    )
}
