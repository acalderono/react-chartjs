import React, { useState, useMemo, useEffect } from 'react';

export const Card = ({ items }) => {
  const [data, setData] = useState([]);
  const [assignament, setAssignament] = useState([
    { assignament: '', hours: '', data: [] },
  ]);

  useMemo(() => {
    setData(items);
  }, [items]);

  useEffect(() => {
    getAssignament(data);
  }, []);

  const getAssignament = (data) => {
    const assignamentList = getNameValues(data, 'assignment');
    const assignaments = [];

    assignamentList.forEach((assignment) => {
      const customerObject = getFilter(data, 'assignment', assignment);
      const hourAssignament = customerObject
        .map((element) => element.hours)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      const customers = [];
      const customerList = data
        .filter((element) => element.assignment === assignment)
        .map((element) => element.customer)
        .filter((element, index, array) => array.indexOf(element) === index);

      customerList.forEach((customer) => {
        const projects = [];
        const customerObject = getFilter(data, 'customer', customer);
        const assignment = getNameValues(customerObject, 'assignment');
        const projectsList = getNameValues(customerObject, 'project');
        const hourCustomer = customerObject
          .map((element) => element.hours)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        projectsList.forEach((project) => {
          const hourProject = data
            .filter((element) => element.project === project)
            .map((element) => element.hours)
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            );
          projects.push({ project, hour: hourProject });
        });

        customers.push({
          customer,
          hours: hourCustomer,
          items: projects,
          assignament: assignment,
        });
      });

      assignaments.push({
        assignament: assignment,
        hours: hourAssignament,
        data: customers,
      });
    });
    setAssignament(assignaments);
  };

  const getFilter = (object, name, filterName) => {
    return object.filter((element) => element[name] === filterName);
  };

  const getNameValues = (object, name) => {
    return object
      .map((element) => element[name])
      .filter((element, index, array) => array.indexOf(element) === index);
  };

  return (
    <section className='container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16'>
      <div className='w-full px-0 lg:px-4'>
        <div className='flex flex-wrap items-center py-4 pt-0'>
          {assignament.map((item, index) => (
            <>
              <div key={index} className='w-full p-4 md:w-1/4 lg:w-1/4'>
                <label className='flex flex-col bg-green-500 rounded-lg shadow-lg group card-group relative cursor-pointer'>
                  <div className='w-full px-4 py-6 rounded-t-lg card-section-1'>
                    <h3 className='mx-auto text-xl font-semibold text-center uppercase text-white group-hover:text-white tracking-wide'>
                      {item.assignament}
                    </h3>
                    <p className='text-5xl font-bold text-center group-hover:text-white text-white tracking-wide'>
                      {item.hours}
                      <span className='text-3xl'>HH</span>
                    </p>
                  </div>
                </label>
              </div>
              <CardMini data={item.data}></CardMini>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CardMini = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
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
              <CardBody items={item.items} />
            </div>
          </label>
        </div>
      ))}
    </>
  );
};

export const CardBody = ({ items }) => {
  return (
    <div className='text-xl text-white h-full'>
      {items.map((item, index) => (
        <div key={index} className='flex w-auto'>
          <p
            className='text-xs font-bold text-left text-white pl-4 w-3/5 uppercase truncate'
            style={{ fontSize: '10px' }}>
            {item.project}
          </p>
          <p className='text-xs tracking-white font-bold text-right pr-4 text-white w-2/5'>
            {item.hour}
            <span className='text-xs'>HH</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
