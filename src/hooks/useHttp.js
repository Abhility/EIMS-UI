import {useEffect, useState} from 'react';

const useHttp = (url) => {

    let [data,setData] = useState([]);

    useEffect(() =>{
        (async function fetchData(){
        let response = await fetch(url,{
            headers: {'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmU4ZWNhNjM2NjM5YzFiN2M4MzE4NGUiLCJ1c2VyUm9sZSI6IkFETUlOIiwiaWF0IjoxNjA5MTQyNzEzfQ.EjS8lxDqfGiCLlVkhVoJNsXRzLKy9snyH-JSdcm2LGU'}
        });
        let responseData = await response.json();
        responseData = responseData.map(data => {
            return {...data,
                startDate: new Date(data.startDate).toDateString(),
                endDate: new Date(data.endDate).toDateString()};
        })
        setData(responseData);
        })();
    },[url]);

    return data;
}
 
export default useHttp;