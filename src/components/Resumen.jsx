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
        <>
            {
                customer.map((item, index) => (
                    <>
                      <div key={index} className="content">
                        <div className="badge"></div>
                        <div className="table">
                            <div className="theader">
                                <div className="row">
                                    <span className="col key">{item.customer}</span>
                                    <span className="col value">{item.hours}</span>
                                    <span className="col value">HH</span>
                                </div>
                            </div>
                            {item.items.map((item, i) => (
                                <div key={i} className="tbody">
                                    <span className="col key">{item.project}</span>
                                    <span className="col value">{item.hour}</span>
                                    <span className="col value">HH</span>
                                </div>
                            ))}
                        </div>
                        </div>
                    </>
                ))}
        </>
    );
};

export default Resumen;