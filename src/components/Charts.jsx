import React, { useState, Suspense, useEffect } from 'react'
import Bar from './Bar';
import Pie from './Pie';


const Charts = () => {

    const [recipes, setRecipes] = useState([]);
    const [hasError, setErros] = useState(false);
    const [select, setSelect] = useState('Cliente');

    const backgroundColor = ['rgba(165, 207, 91, 0.5)', 'rgba(110, 176, 87, 0.5)', 'rgba(88, 214, 141, 0.5)', 'rgba(39, 174, 96, 0.5)', 'rgba(247, 220, 111, 0.5)', 'rgba(245, 203, 167, 0.5)'];
    const borderColor = ['rgba(165, 207, 91)', 'rgba(110, 176, 87)'];

    async function fetchData() {
        const res = await fetch('/api/team/7?week=14');
        res.json()
            .then(res => setRecipes(res.data))
            .catch(err => setErros(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const assignments = recipes.map(el => el.assignment).filter((el, i, a) => a.indexOf(el) === i);
    const assignment = [];
    assignments.map((item) => {
        assignment.push(<option key={item} value={item}> {item}</option>);
    });

    return (
        <div>
            <select onChange={ (e) => setSelect(e.target.value) } >{assignment} </select>
            {/* <div>
            <Suspense fallback={ <p> Cargango... </p>}>
                <Bar 
                data={recipes}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                assignment={select}
                />
            </Suspense>
            </div> */}
                <hr></hr>
            <div>
                <Suspense fallback={<p> Cargango... </p>} >
                    <Pie
                        data={recipes}
                        backgroundColor={backgroundColor}
                        borderColor={borderColor}
                        assignment={select}
                    />
                </Suspense>
            </div>
        </div>
    );

}

export default Charts;