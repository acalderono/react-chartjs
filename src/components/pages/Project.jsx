import React, { useState } from 'react';
import useApi from '../../hooks/useApi';
import { Spinner } from '../UI/others/Spinner';
import { Card } from '../UI/organisms/Card';
import { useMemo } from 'react';
import * as moment from 'moment';

export const Project = () => {
  // const { response, error, isLoading } = useApi('https://demo2961273.mockable.io/api');
  const weekNumber = moment().week();
  const { response, error, isLoading } = useApi(
    `/api/team/7?week=${weekNumber - 1}`
  );
  const [data, setData] = useState([]);
  useMemo(() => {
    setData(response.data);
  }, [response.data]);

  return <>{isLoading ? <Spinner /> : <Card items={data} />}</>;
};

export default Project;
