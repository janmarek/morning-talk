import React from 'react';
import './Video.css';

export default props => <div className="video">
    <h3>{props.data.name}</h3>
    <p>{props.data.description}</p>
</div>
