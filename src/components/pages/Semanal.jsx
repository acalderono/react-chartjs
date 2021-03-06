import React, { useState } from 'react';
import useApi from '../../hooks/useApi';
import { Spinner } from '../UI/others/Spinner';
import { Card } from '../UI/organisms/Card';
import { useMemo } from 'react';

export const Semanal = () => {
  const { response, error, isLoading } = useApi(
    'https://demo2961273.mockable.io/api'
  ); // useApi('/api/team/7?week=20,21');
  const [getData, setData] = useState([]);
  useMemo(() => {
    setData(response.data);
  }, [response.data]);

  return <>{isLoading ? <Spinner /> : <Card items={getData}></Card>}</>;
};

export default Semanal;
