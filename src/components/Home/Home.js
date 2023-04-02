import React, { useEffect, useState } from 'react';

const Home = () => {

    const [show, setShow] = useState([]);

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data =>setShow(data))
    },[])

    return (
        <div>
            this home
        </div>
    );
};

export default Home;