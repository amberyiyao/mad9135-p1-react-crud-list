import React from 'react';
import './NewItemView.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function NewItemView(props){

    let name = ""
    let url = ""
    let lead = ""
    let id = 0

    if(props.edit){
        name = props.item.name
        url = props.item.docsURL
        lead = props.item.lead
        id = props.item.id
    } 

    return <div className="addNew">
        <div className="inputs">
            <div>
                <label htmlFor="name">Framework Name</label>
                <input id="name" className="nameInput" type="text" required="required" defaultValue={name} onChange={props.handleInputChange}/>
            </div>
            <div>
                <label htmlFor="docsURL">Docs URL</label>
                <input id="docsURL" className="urlInput" type="text" required="required" defaultValue={url} onChange={props.handleInputChange}/>
            </div>
            <div>
                <label htmlFor="lead">Lead by</label>
                <input id="lead" className="leadInput" type="text" required="required" defaultValue={lead} onChange={props.handleInputChange}/>
            </div>
        </div>
        <div className="actions">
            <Link className="save green" to="/" data-id={id} onClick={props.handleAddorEditFramework}>SAVE</Link>
            <Link className="cancel cancel" to="/">CANCEL</Link>
        </div>
    </div>
}

export default NewItemView;
