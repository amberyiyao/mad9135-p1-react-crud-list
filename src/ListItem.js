import React from 'react';
import './ListItem.css'
import EditItem from './NewItemView'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function ListItem(props){
    const editPath = `/${props.item.id}/edit`

    return (
        <div>
            <div className="item">
                <div className="itemInfo">
                    <p>{props.item.name}</p>
                    <div>
                        <p>lead by {props.item.lead}</p>
                        <a href={props.item.docsURL} target="_black">Official Docs</a>
                    </div>
                </div>
                <div className="actions">
                    <Link className="edit green" to={editPath}>EDIT</Link>
                    <Link className="delete red">DELETE</Link>
                </div>
            </div>
            <Route path={editPath}>
                <EditItem item={props.item} edit={true}/>
            </Route>
        </div>
    )
}

export default ListItem;
