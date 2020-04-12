import React, { useState, Suspense, useEffect } from 'react'
import Bar from './Bar';
import Pie from './Pie';


const Charts = () => {

    const [recipes, setRecipes] = useState([]);
    const [hasError, setErros] = useState(false);
    const backgroundColor = ['rgba(165, 207, 91, 0.5)', 'rgba(110, 176, 87, 0.5)', 'rgba(88, 214, 141, 0.5)', 'rgba(39, 174, 96, 0.5)', 'rgba(247, 220, 111, 0.5)', 'rgba(245, 203, 167, 0.5)'];
    const borderColor = ['rgba(165, 207, 91)', 'rgba(110, 176, 87)'];

    async function fetchData() {
        const res = await fetch('/api/team/7?lastweek=true');
        res.json()
            .then(res => setRecipes(res.data))
            .catch(err => setErros(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>
            <Suspense fallback={ <p> Cargango... </p>}>
                <Bar 
                data={recipes}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                />
                {/* <span>Has error: { JSON.stringify(hasError) }</span> */}
            </Suspense>
            </div>
                <hr></hr>
            <div>
                <Suspense fallback={<p> Cargango... </p>} >
                    <Pie
                        data={recipes}
                        backgroundColor={backgroundColor}
                        borderColor={borderColor}
                    />
                </Suspense>
            </div>
        </div>
    );

}

export default Charts;