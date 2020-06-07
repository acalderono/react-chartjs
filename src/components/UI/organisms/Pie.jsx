import React from 'react';
import { Pie as PieChart } from 'react-chartjs-2';
import { Resumen } from './Resumen';
import Card from '../others/Card';

export const Pie = ({ data, assignment, backgroundColor }) => {
  const dataset = [];
  const week = data
    .filter((el) => el.assignment === assignment)
    .map((el) => el.week)
    .reduce((a, b) => (a > b ? a : b), 0);
  const projects = data
    .filter((el) => el.assignment === assignment && el.week === week)
    .map((el) => el.project)
    .filter((el, i, a) => a.indexOf(el) === i)
    .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
  projects.forEach((project, i) => {
    let object = data.filter(
      (el) =>
        el.assignment === assignment &&
        el.week === week &&
        el.project === project
    );
    let hour = object.map((el) => el.hours).reduce((a, b) => a + b, 0);
    let customer = object
      .map((el) => el.customer)
      .filter((el, i, a) => a.indexOf(el) === i)[0];
    dataset.push({
      customer,
      project,
      hour,
      backgroundColor: backgroundColor.slice(i, i + 1),
    });
  });

  const dataPie = {
    labels: dataset.map((p) => p.project),
    datasets: [
      {
        data: dataset.map((h) => h.hour),
        backgroundColor: dataset.map((b) => b.backgroundColor),
        hoverBackgroundColor: dataset.map((b) => b.backgroundColor),
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `Participación de la Fábrica - Semana ${week}`,
    },
  };

  return (
    <div className='flex md:flex-row flex-wrap'>
      <div className='w-full sm:w-1/2 md:w-3/4 p-4 text-center'>
        <PieChart data={dataPie} options={options} />
      </div>
      {/* <div className="w-full sm:w-1/2 md:w-3/4 p-4 text-center">
                    <PieChart data={dataPie} options={options} />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 p-2 bg-gray-200 text-center text-gray-700">
                      <Resumen data={dataset} ></Resumen>
                </div> */}
      <div className=' sm:w-1/2 md:w-3/4 p-4'>
        <Card data={dataset}></Card>
      </div>
    </div>
  );
};

export default Pie;
