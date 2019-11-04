import React from 'react';
import './NewItemView.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function NewItemView(){
    return <div className="addNew">
        <div className="inputs">
            <div>
                <p>Framework Name</p>
                <input className="nameInput" type="text"/>
            </div>
            <div>
                <p>Docs URL</p>
                <input className="urlInput" type="text"/>
            </div>
            <div>
                <p>Lead by</p>
                <input className="leadInput" type="text"/>
            </div>
        </div>
        <div className="actions">
            <Link className="save green">SAVE</Link>
            <Link className="cancel red">CANCEL</Link>
        </div>
    </div>
}

export default NewItemView;
