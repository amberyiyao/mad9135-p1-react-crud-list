import React from 'react';
import './ListItem.css'

function ListItem(props){
    return (
        <div className="item">
            <div className="itemInfo">
                <p>{props.item.name}</p>
                <div>
                    <p>lead by {props.item.lead}</p>
                    <a href={props.item.docsURL}>Official Docs</a>
                </div>
            </div>
            <div className="actions">
                <button className="edit green">EDIT</button>
                <button className="delete red">DELETE</button>
            </div>
        </div>
    )
}

export default ListItem;
