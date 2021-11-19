import React from 'react'
import { Cards } from '../Cards'
import { Slider } from '../Slider'

export const Container = ({productos}) => {
    return (
        <div>
            <Slider/>
            <Cards productos={productos}/>
        </div>
    )
}
