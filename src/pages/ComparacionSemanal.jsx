import React, { useState } from 'react'
import Bar from './../components/Bar';
import Select from './../components/comunes/Select';

export const ComparacionSemanal = ({ data }) => {

    const backgroundColor = ['rgba(165, 207, 91, 0.5)', 'rgba(110, 176, 87, 0.5)', 'rgba(88, 214, 141, 0.5)', 'rgba(39, 174, 96, 0.5)', 'rgba(247, 220, 111, 0.5)', 'rgba(245, 203, 167, 0.5)'];
    const borderColor = ['rgba(165, 207, 91)', 'rgba(110, 176, 87)'];

    const [select, setSelect] = useState('Cliente');    
    
    const handleSelect = (e) => {
        setSelect(e)
    }
    
    const assignments = data.map(el => el.assignment).filter((el, i, a) => a.indexOf(el) === i);
    return (
        <div className="h-full w-auto flex-shrink-0 my-5">
            <div className="flex content-start flex-wrap">
                    <h1 className="text-2xl text-left font-bold py-4 px-4 float-left">Comparación Semanal</h1>
                    <div className="ml-auto mb:inline-flex"></div>
                    <div className="float-right w-1/4">
                        <Select handleSelect={handleSelect} assignments={assignments} ></Select>
                    </div>
            </div>

            <Bar data={data} backgroundColor={backgroundColor} borderColor={borderColor} assignment={select} />

        </div>
    )

}

export default ComparacionSemanal;