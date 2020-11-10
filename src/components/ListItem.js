import React from 'react'

export default function ListItem({listItem}) {
    const {content, done} = listItem

    return (
        <div className="checkbox">
            <input type="checkbox" name="Checkbox item"></input>
            <p>{content}</p>
        </div>
    )
}
