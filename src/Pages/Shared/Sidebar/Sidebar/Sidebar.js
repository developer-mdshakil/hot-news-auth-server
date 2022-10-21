import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    //create a state 'useState' and set catagories here
    const [catagories, setCatagories] = useState([]);

    //load custom server data with express js here 
    useEffect( ()=> {
        fetch('http://localhost:5000/catagories')
        .then( res => res.json())
        .then(data => setCatagories(data));
    }, [])
    
    return (
        <div>
            <h2>All catagories</h2> 
            <div>
                {
                    catagories.map(catagory => <li className='catagory' key={catagory._id}>
                        <Link to={`/catagory/${catagory._id}`}>{catagory.category_name}</Link>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Sidebar;