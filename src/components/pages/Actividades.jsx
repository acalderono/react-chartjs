import React, { useState } from 'react';

import Spinner from '../UI/others/Spinner';

export const Actividades = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='h-full w-auto flex-shrink-0 my-5'>
          <div className='flex content-start flex-wrap'>
            <h1 className='text-2xl text-left font-bold py-4 px-4 float-left'>
              Actividades
            </h1>
            <div className='ml-auto mb:inline-flex'></div>
            <div className='float-right w-1/4'>Is done!</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Actividades;
