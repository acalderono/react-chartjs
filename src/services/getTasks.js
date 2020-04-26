

// const fromAPi = apiResponse => {
//     const {data = []} = apiResponse;

//     if (Array.isArray(data)) {
//         const tasks = data.map(task => {

//         })
//     }
// };

export default async function getTasks() {
    const apiURL = '/api/team/7?week=14,15';

    // return await fetch(apiURL)
    // .then(res => res.json())
    // .catch(err => console.log(err))
    const res = await fetch(apiURL);
    return res.json().then( res => res.data);


}