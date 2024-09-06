import React from 'react'

function TodoCard(props) {

    const { children, handleDelete, handleEditValue, index } = props

    return (
        <li className='todoItem'>
            {children}
            <div className="actionsContainer">
                <button onClick={() => {
                    handleEditValue(index)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>

                </button>
                <button onClick={() => {
                    handleDelete(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>

            </div>
        </li>
    )
}

export default TodoCard