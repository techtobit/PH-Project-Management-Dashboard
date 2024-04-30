"use client"
import React, { useState,useEffect } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);
    async function fetchToDo(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if(!response.ok){
                throw new Error(response.massage)
            }
            const data = await response.json();
            const sliceData = data.slice(0,10);
            setData(sliceData)
        } catch (error) {
            throw new Error(error)
        }
    }

    useEffect(()=> {
        fetchToDo()
    },[data])
    
    console.log(data);
    return(
        <>
        <h1>Helllo</h1>
        </>
    )
};

export default Dashboard;