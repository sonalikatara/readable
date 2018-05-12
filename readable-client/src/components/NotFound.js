import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({location}) => (
<div><br/>
<h3>No match for <code>{location.pathname}</code></h3>
<center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default NotFound;
