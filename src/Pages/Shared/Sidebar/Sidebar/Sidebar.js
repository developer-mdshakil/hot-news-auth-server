import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [catagories, setCatagories] = useState([]);

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