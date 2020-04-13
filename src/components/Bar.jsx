import React from 'react'
import { Bar as BarChart } from 'react-chartjs-2';

export const Bar = ({ data, assignment, backgroundColor, borderColor }) => {
    const datasets = [];
    const labels = data.filter((el) => el.assignment === assignment).map(el => el.week).filter((el, i, a) => a.indexOf(el) === i);
    labels.forEach((e, i) => {
        const customer = data.filter((el) => el.assignment === assignment && el.week === e).map(el => el.customer).filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => (a > b) ? 1 : (b > a) ? -1 : 0 );
        customer.forEach((element, index) => {
          const hh = [];
          hh.push({ x: e, y: data.filter((el) => el.assignment === assignment && el.week === e && el.customer === element).map(el => el.hours).reduce((a, b) => a + b, 0) });
          datasets.push({ label: element, data: hh, backgroundColor: backgroundColor.slice(index, index + 1), borderColor: borderColor.slice(index, index + 1), borderWidth: 1 });
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