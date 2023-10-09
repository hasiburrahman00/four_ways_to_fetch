import React, { useDebugValue, useEffect, useState } from 'react';

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        const fetchPhones = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
            const data = await res.json();
            setPhones(data);
        }

        fetchPhones();
    }, [])

    console.log(phones.data);

    return (
        <div>

        </div>
    );
}

export default Phones;          