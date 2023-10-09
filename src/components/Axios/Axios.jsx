import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axios = () => {


    const [phones, setPhones] = useState([]);

    useEffect(() => {
        const fetchPhone = async () => {
            const res = await axios.get('https://openapi.programming-hero.com/api/phones?search=iphone');
            setPhones(res.data);
        }

        fetchPhone();
    }, [])

    console.log(phones.data);

    return (
        <div>

        </div>
    );
}

export default Axios;