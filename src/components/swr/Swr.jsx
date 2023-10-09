import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}


const Swr = () => {

    const { data } = useSWR('https://openapi.programming-hero.com/api/phones?search=iphone', fetcher, {
        suspense: true,

    });
    console.log(data)


    return (
        <div>
            <h2 className='text-cennter font-bold text-4xl '>
               Total Data:  {data.data.length}
            </h2>
        </div>
    );
}

export default Swr;