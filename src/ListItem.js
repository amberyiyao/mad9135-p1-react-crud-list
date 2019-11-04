import React from 'react';
import './ListItem.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function ListItem(props){
    return (
        <div className="item">
            <div className="itemInfo">
                <p>{props.item.name}</p>
                <div>
                    <p>lead by {props.item.lead}</p>
                    <a href={props.item.docsURL} target="_black">Official Docs</a>
                </div>
            </div>
            <div className="actions">
                <Link className="edit green">EDIT</Link>
                <Link className="delete red">DELETE</Link>
            </div>
        </div>
    )
}

export default ListItem;
