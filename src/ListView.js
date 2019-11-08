import React from 'react';
import ListItem from './ListItem';
import './ListView.css'

function ListView(props){
    const ListItems = props.list.map(item => <ListItem key={item.id} item={item} handleDeleteFramework={props.handleDeleteFramework} handleInputChange={props.handleInputChange} handleAddorEditFramework={props.handleAddorEditFramework}/>)

    return <div  className="list">
        {ListItems}
    </div>
}

export default ListView;


