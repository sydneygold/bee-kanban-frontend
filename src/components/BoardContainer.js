import React from 'react'
import BoardCard from './BoardCard'

export default function BoardContainer({boards, listItems}) {

    const showBoards = () => {
        return boards.map(board => <BoardCard
            key={board.id}
            board={board}
            listItems={listItems}
        />)
    }

    return (
        <div>
            <ul className="board-list">
                {showBoards()}
            </ul>
        </div>
    )
}
