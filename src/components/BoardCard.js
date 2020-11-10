import React from 'react'
import ListItemContainer from './ListItemContainer'

export default function BoardCard({board, listItems}) {
    
    const {name, description} = board

    return (
        <li className="board">
            <h3>{name}</h3>
            <p>{description}</p>
            <ListItemContainer listItems={listItems}/>
            </li>
            )
        }
