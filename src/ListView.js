import React from 'react';
import ListItem from './ListItem';

function ListView(props){
    const ListItems = props.list.map(item => <ListItem item={item}/>)

    return <div className="list">
        {ListItems}
    </div>
}

export default ListView;
