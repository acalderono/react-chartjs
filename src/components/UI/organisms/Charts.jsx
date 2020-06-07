import React, { useState, Suspense, useEffect } from 'react'
import Bar from './Bar';
import Pie from './Pie';
import Select from './comunes/Select';

const Charts = ({ data, backgroundColor, borderColor }) => {

    const [select, setSelect] = useState('Cliente');    
    const handleSelect = (e) => {
        setSelect(e)
    }
    
    const assignments = data.map(el => el.assignment).filter((el, i, a) => a.indexOf(el) === i);
    
    return (
        <div className="h-full w-64 bg-gray flex-shrink-0">
            <Select handleSelect={handleSelect} assignments={assignments} ></Select>
            <div className="contenedor">
            <Suspense fallback={ <p> Cargango... </p>}>
                <Bar 
                data={data}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                assignment={select}
                />
            </Suspense>
            </div>
            {/* <div className="contenedor">
                <Suspense fallback={<p> Cargango... </p>} >
                    <Pie
                        data={recipes}
                        backgroundColor={backgroundColor}
                        borderColor={borderColor}
                        assignment={select}
                    />
                </Suspense>
            </div> */}
        </div>
    );

}

export default Charts;