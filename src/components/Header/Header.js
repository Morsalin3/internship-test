import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-5 mx-auto'>
            <h3 className='m-3'>
                Internship Test
            </h3>

            <Link to='/home'><Button className='mx-2' variant='primary'>Home</Button></Link>
            <Link to='/summary'><Button className='mx-2' variant='primary'>summary</Button></Link>
        </div>
    );
};

export default Header;