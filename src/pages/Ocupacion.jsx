import React from 'react'

import Spinner from './../components/comunes/Spinner';

export const Ocupacion = () => {

    return (
        <div className="h-full w-auto flex-shrink-0 my-5">
            <div className="flex content-start flex-wrap">
                    <h1 className="text-2xl text-left font-bold py-4 px-4 float-left">Ocupacion</h1>
                    <div className="ml-auto mb:inline-flex"></div>
                    <div className="float-right w-1/4">
                        <Spinner/>
                    </div>
            </div>
        </div>
    )
}

export default Ocupacion;