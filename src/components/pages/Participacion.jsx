import React, { useState, useEffect } from 'react';
import Pie from '../UI/organisms/Pie';
import Select from '../UI/others/Select';
// import getTasks from './../services/getTasks';
import Spinner from '../UI/others/Spinner';
import useApi from '../../hooks/useApi';

export const Participacion = () => {
  const { response, error, isLoading } = useApi('/api/team/7?week=21,22');

  const backgroundColor = [
    'rgba(165, 207, 91, 0.5)',
    'rgba(110, 176, 87, 0.5)',
    'rgba(88, 214, 141, 0.5)',
    'rgba(39, 174, 96, 0.5)',
    'rgba(247, 220, 111, 0.5)',
    'rgba(245, 203, 167, 0.5)',
  ];
  const borderColor = ['rgba(165, 207, 91)', 'rgba(110, 176, 87)'];

  const [select, setSelect] = useState('Cliente');

  const handleSelect = (e) => {
    setSelect(e);
  };

  const assignments = response
    .map((el) => el.assignment)
    .filter((el, i, a) => a.indexOf(el) === i);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='h-full w-auto flex-shrink-0 my-5'>
          <div className='flex content-start flex-wrap'>
            <h1 className='text-2xl text-left font-bold py-4 px-4 float-left'>
              Participación Fábrica en {select}
            </h1>
            <div className='ml-auto mb:inline-flex'></div>
            <div className='float-right w-1/4'>
              <Select
                handleSelect={handleSelect}
                assignments={assignments}></Select>
            </div>
          </div>
          <Pie
            data={response}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            assignment={select}
          />
        </div>
      )}
    </>
  );
};

export default Participacion;
