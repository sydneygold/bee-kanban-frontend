import React from 'react'
import ListItem from './ListItem'

export default function ListItemContainer({listItems}) {

    const showListItems = () => {
        return listItems.map(listItem => <ListItem
            key={listItem.id}
            listItem={listItem}
        />)
    }

    return (
        <div className="checklist-container">
            <p>Holds checkbox items</p>
            {showListItems()}
        </div>
    )
}
