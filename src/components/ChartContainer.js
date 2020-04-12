import React, { useState, useEffect, Suspense } from 'react'

const Container = () => {

    const [recipes, setRecipes] = useState([]);
    const [hasError, setErrors] = useState(false);
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const res = await fetch("/api/team/7?lastweek=true");
        res
          .json()
          .then(res => setRecipes(res.data))
          .catch(err => setErrors(err));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
        <Suspense fallback={ <p> Cargando....</p> }>
          <span>{JSON.stringify(recipes)}</span>
          <hr />
          <span>Has error: {JSON.stringify(hasError)}</span>
          </Suspense>
        </div>
      );
    }

export default Container;