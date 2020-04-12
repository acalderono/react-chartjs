import React, { useState } from 'react'
import { Pie as PieChart } from 'react-chartjs-2';


export const Pie = ({ data, backgroundColor }) => {

    const [select, setSelect] = useState('Cliente');

    const dataset = [];
    const assignments = data.map(el => el.assignment).filter((el, i, a) => a.indexOf(el) === i);
    const week = data.filter((el) => el.assignment === select).map(el => el.week).reduce((a, b) => a > b ? a : b, 0);
    const projects = data.filter((el) => el.assignment === select && el.week === 14).map(el => el.project).filter((el, i, a) => a.indexOf(el) === i);

    projects.forEach((project, i) => {
        let hour = data.filter((el) => el.assignment === select && el.week === 14 && el.project === project).map(el => el.hours).reduce((a, b) => a + b, 0);
        dataset.push({ project, hour, backgroundColor: backgroundColor.slice(i, i + 1) });
    });

    const dataPie = {
        labels: dataset.map(p => p.project),
        datasets: [{
            data: dataset.map(h => h.hour),
            backgroundColor: dataset.map(b => b.backgroundColor),
            hoverBackgroundColor: dataset.map(b => b.backgroundColor)
        }]
    };

    const options = {
        title: {
            display: true,
            text: `Participación de la Fábrica - Semana ${week}`
        }
    };

    const assignment = [];
    assignments.map((item) => {
        assignment.push(<option key={item} value={item}> {item}</option>);
    });

    return (
        <div>
            <select onChange={ (e) => setSelect(e.target.value) } >{assignment} </select>
            <PieChart data={dataPie} options={options} />
        </div>
    );

}

export default Pie;