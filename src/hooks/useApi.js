import { useState, useEffect } from 'react';

const useApi = (url, _options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ data: [] });
  const [error, setError] = useState('');

  const doFetch = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((task) => {
          setData({ data: task.data });
        });
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    doFetch();
  }, []);

  return {
    response: data,
    error,
    isLoading,
  };
};

export default useApi;
