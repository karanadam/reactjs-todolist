import React, { useState } from 'react';

const TodoInput = (props) => {

    const { todoValue, setTodoValue, handleTodoInput } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} onKeyDown={(e) => {
                if (e.key == 'Enter') {
                    handleTodoInput(todoValue)
                    setTodoValue('')
                }
            }}

                placeholder='Enter Item...' />
            <button onClick={() => {
                handleTodoInput(todoValue)
                setTodoValue('')

            }

            } >+</button>
        </header >
    );
}

export default TodoInput;
