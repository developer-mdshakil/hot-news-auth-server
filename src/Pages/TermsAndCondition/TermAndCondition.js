import React from 'react';
import { Link } from 'react-router-dom';

const TermAndCondition = () => {
    return (
        <div>
            <h3>Here many terms and Condition</h3>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermAndCondition;