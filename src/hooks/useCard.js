import { useState, useEffect } from 'react';

const useCard = ({ items }) => {
  const [customers, setCustomer] = useState([]);
  //   const [project, setProject] = useState();
  //   const [hourProject, setHourProject] = useState();

  const onCustomer = () => {
    setCustomer(
      items.map((el) => el.customer).filter((el, i, a) => a.indexOf(el) === i)
    );
  };

  useEffect(() => {
    onCustomer();
  }, [items]);

  return { customers };
};

export default useCard;
