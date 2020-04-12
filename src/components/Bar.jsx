import React from 'react'
import { Bar as BarChart } from 'react-chartjs-2';

export const Bar = ({ data, backgroundColor, borderColor }) => {
    const datasets = [];
    const labels = data.filter((el) => el.assignment === 'Cliente').map(el => el.week).filter((el, i, a) => a.indexOf(el) === i);
    labels.forEach((e, i) => {
        const customer = data.filter((el) => el.assignment === 'Cliente' && el.week === e).map(el => el.customer).filter((el, i, a) => a.indexOf(el) === i);
        customer.forEach((element) => {
          const hh = [];
          hh.push({ x: e, y: data.filter((el) => el.assignment === 'Cliente' && el.week === e && el.customer === element).map(el => el.hours).reduce((a, b) => a + b, 0) });
          datasets.push({ label: element, data: hh, backgroundColor: backgroundColor.slice(i, i + 1), borderColor: borderColor.slice(i), borderWidth: 1 });
        });
      });

      const dataBar = { labels, datasets };
      const options = {
        barValueSpacing: 20,
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
            }
          }]
        }
      };

    return (
        <div>
            <BarChart
                data={dataBar}
                options={options}
                width={100}
                height={50}
            />
        </div>
    );

}

export default Bar;