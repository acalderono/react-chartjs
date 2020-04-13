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
        <div className="content">
            {
                customer.map((item, index) => (
                    <>
                        <div className="badge"></div>
                        <div key={index} className="table">
                            <div className="theader">
                                <div className="row">
                                    <span className="col">{item.customer}</span>
                                    <span className="col">{item.hours} </span>
                                </div>
                            </div>
                            {item.items.map((item, index) => (
                                <div key={index} className="tbody">
                                    <span className="col">{item.project}</span>
                                    <span className="col">{item.hour}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
        </div>
    );
};

export default Resumen;