import React, { useState, useMemo } from 'react'

export const Resumen = ({ data }) => {

    const [items, setItems] = useState([]);

    useMemo(() => {
        setItems(data)
    }, [data]);

    const cliente = items.map(el => el.customer).filter((el, i, a) => a.indexOf(el) === i);
    const customer = [];
    cliente.forEach(e => {
        let object = items.filter(el => el.customer === e);
        let hours = object.map(el => el.hour).reduce((a, b) => a + b, 0);
        let obj = [];
        let project = object.map(el => el.project).filter((el, i, a) => a.indexOf(el) === i);
        project.forEach(p => {
            let hour = items.filter(el => el.project === p).map(el => el.hour).reduce((a, b) => a + b, 0);
            obj.push({ project: p, hour: hour });
        })
        customer.push({ customer: e, hours: hours, items: obj })
    });

    return (
        <div className="h-full">
            {
                customer.map((item, index) => (
                    <div key={index} className="flex-grow text-center my-2 pb-4">
                        <div className="flex bg-gray-400">
                            <div className="w-2/4 text-2xl text-left font-bold">{item.customer}</div>
                            <div className="w-1/4 text-2xl text-right font-bold">{item.hours}</div>
                            <div className="w-1/4 text-2xl text-right font-bold">HH</div>
                        </div>
                        {item.items.map((item, i) => (
                            <div key={i} className="flex bg-white">
                                <div className="w-2/4 pt-1 text-lg text-left">{item.project}</div>
                                <div className="w-1/4 pt-1 text-lg text-right">{item.hour}</div>
                                <div className="w-1/4 pt-1 text-lg text-right">HH</div>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default Resumen;