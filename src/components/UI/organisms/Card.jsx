import React, { useState, useEffect, useMemo } from 'react';

export const Card = ({ items }) => {
  const [data, setData] = useState([]);

  useMemo(() => {
    setData(items);
  }, [items]);

  const clientes = data
    .map((element) => element.customer)
    .filter((element, index, array) => array.indexOf(element) === index);
  const customer = [];
  clientes.forEach((cliente) => {
    let object = data.filter((element) => element.customer === cliente);
    let hours = object
      .map((element) => element.hours)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let assignament = object
      .map((element) => element.assignment)
      .filter((element, index, array) => array.indexOf(element) === index);

    let objectProject = [];
    let projects = object
      .map((element) => element.project)
      .filter((element, index, array) => array.indexOf(element) === index);

    projects.forEach((project) => {
      let hour = data
        .filter((element) => element.project === project)
        .map((element) => element.hours)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      objectProject.push({ project, hour });
    });
    customer.push({
      customer: cliente,
      hours: hours,
      items: objectProject,
      assignament: assignament,
    });
  });

  return (
    <>
      <section className='container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16'>
        <div className='w-full px-0 lg:px-4'>
          <div className='flex flex-wrap items-center justify-center py-4 pt-0'>
            {customer.map((item, index) => (
              <div key={index} className='w-full p-4 md:w-1/4 lg:w-1/4'>
                <label className='flex flex-col rounded-lg shadow-lg group card-group relative cursor-pointer'>
                  <div className='w-full px-4 py-6 rounded-t-lg card-section-1'>
                    <h3 className='mx-auto text-xl font-semibold text-center uppercase text-green-500 group-hover:text-white tracking-wide'>
                      {item.customer}
                    </h3>
                    <p className='text-5xl font-bold text-center group-hover:text-white text-green-500 tracking-wide'>
                      {item.hours}
                      <span className='text-3xl'>HH</span>
                    </p>
                    <p className='text-xs text-center uppercase group-hover:text-white text-green-500 capitalize'>
                      {item.assignament}
                    </p>
                  </div>
                  <div className='flex flex-col justify-center w-full h-full py-6 rounded-b-lg bg-green-500'>
                    <div className='text-xl text-white'>
                      {/* {item.items.map((item, index) => (
                        <div key={index} className='flex w-auto'>
                          <p className='text-xs font-bold text-left text-white pl-4 w-3/5 uppercase truncate'>
                            {item.project}
                          </p>
                          <p className='text-xs tracking-white font-bold text-right pr-4 text-white w-2/5'>
                            {item.hour}
                            <span className='text-xs'>HH</span>
                          </p>
                        </div>
                      ))} */}
                      <Project projects={item.items}></Project>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const Project = (projects) => {
  return (
    <>
      {projects.map((item, index) => (
        <div className='flex w-auto'>
          <p className='text-xs font-bold text-center text-white pl-4 w-3/5 uppercase truncate'>
            {item.project}
          </p>
          <p className='text-xs tracking-white font-bold text-center text-white w-2/5'>
            {item.hour}
            <span className='text-xs'>HH</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
