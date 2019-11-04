import React from 'react';
import './NewItemView.css'

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
            <button className="save green">SAVE</button>
            <button className="cancel red">CANCEL</button>
        </div>
    </div>
}

export default NewItemView;
