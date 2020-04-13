import React, { useState, useMemo } from 'react'

export const Resumen = ({ data }) => {

    const horas = 1;
    const proyecto = '2';
    const hora = '1';


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
        let hour = items.filter(el => el.project === project).map(el => el.hour).reduce((a, b) => a + b, 0);
        obj.push( { project: project, hour: hour } );
        customer.push({ customer: e, hours: hours, items: obj })
    });

    console.log(customer);



    return (
        <div className="content">
            <div className="table">
                {
                    customer.map((item, index) => (
                        <div key={index}>
                            <div className="theader">
                                <div className="row">
                                    <span className="col">{item.customer}</span>
                                    <span className="col">{item.hour} </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                { items.map((item, index) => (
                        <div key={index} className="tbody">
                            <span className="col">{item.project}</span>
                            <span className="col">{item.hour}</span>
                        </div>
                    )) }
            </div>
        </div>
    );


    // return (
    //     <div className="content">
    //         <div className="badge"></div>
    //         <div className="table">
    //             <div className="theader">
    //                 <div className="row">
    //                     <span className="col">as</span>
    //                     <span className="col">{horas}</span>
    //                     {/* <span className="col">HH</span> */}
    //                 </div>
    //             </div>
    //                 { items.map((item, index) => (
    //                     <div key={index} className="tbody">
    //                         <span className="col">{item.project}</span>
    //                         <span className="col">{item.hour}</span>
    //                     </div>
    //                 )) }
    //         </div>
    //     </div>
    // );
}

export default Resumen;